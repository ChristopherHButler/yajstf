const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const render = require('./render');

const forbiddenDirs = ['node_modules'];

class Runner {
  constructor() {
    this.testFiles = [];

  }

  async runTests() {
    for (let file of this.testFiles) {
      console.log(chalk.gray(`◆  Running Test File -- ${file.shortName}`));

      global.render = render;

      const beforeEaches = [];
      global.beforeEach = (fn) => {
        beforeEaches.push(fn);
      };

      global.it = async (desc, fn) => {
        beforeEaches.forEach(func => func());
        try {
          await fn();
          console.log(chalk.green(`✔︎  TEST - ${desc} - PASSED`));
        } catch (error) {
          console.log(chalk.red(`✘  TEST - ${desc} - FAILED`));
          console.log(chalk.red(`\tERROR: ${error.message}`));
        }
      };

      try {
        // this is how we run all the test files
        require(file.name);
      } catch (error) {
        console.log(chalk.red(`ERROR LOADING FILE - ${file.name}`));
        console.log(chalk.red(`\tERROR: ${error}`));
      }
    }
  }

  async collectFiles(targetPath) {
    const files = await fs.promises.readdir(targetPath);

    for (let file of files) {
      const filePath = path.join(targetPath, file);
      const stats = await fs.promises.lstat(filePath);

      if (stats.isFile() && file.includes('.test.js')) {
        this.testFiles.push({ name: filePath, shortName: file });
      } else if (stats.isDirectory() && !forbiddenDirs.includes(file)) {
        const childFiles = await fs.promises.readdir(filePath);

        files.push(...childFiles.map(f => path.join(file, f)));
      }
    }

    return files;
  }
}

module.exports = Runner;