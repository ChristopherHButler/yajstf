#!/usr/bin/env node

const Runner = require('./runner');


console.log('Running Yet Another JavaScript Testing Framework');

const runner = new Runner();

const run = async () => {
  await runner.collectFiles(process.cwd());
  runner.runTests();
};

run();