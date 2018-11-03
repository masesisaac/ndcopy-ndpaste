'use strict';

const clipboardy = require('clipboardy');
const getStdin = require('get-stdin');

const copy = async(str, cb = () => {}) => {
  let content;
  let stdin = await getStdin();
  content = str || stdin || process.argv[2];
  if (content){
    clipboardy.writeSync(content);
    cb(content);
    process.exit(0);
  } else {
    console.log('nothing to copy');
    cb('nothing to copy');
    process.exit(0);
  }
};

const paste = () => {
  let content = clipboardy.readSync();
  process.stdout.write(content);
  return content;
};

module.exports = {copy, paste};
