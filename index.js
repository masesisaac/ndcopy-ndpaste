#!/usr/bin/env node

const ncp = require("copy-paste");
const getStdin = require('get-stdin');

const copy = async() => {
  let string = process.argv[2];
  let stdin = await getStdin();
  string = stdin || string;
  if(string){
    ncp.copy(stdin || string, function (a) {
      process.exit(0);
    });
  }else{
    console.log('nothing to copy');
    process.exit(0);
  }
}

const paste = () => {
  process.stdout.write(ncp.paste());
}

module.exports = {copy, paste};
