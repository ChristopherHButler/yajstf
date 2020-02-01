## Project setup

 - to make a node cli program we need to do 3 things: 

 1. add ```#!/usr/bin/env node``` to the top of the file we want to run from the terminal

 2. add a bin section to the package.json file specifying the command and file we want to run

 ```
  "bin": {
    "jtf": "src/index.js"
  },
 ```

 3. run the ```npm link``` command from the root directory in the termial. 
