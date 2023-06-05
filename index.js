'use strict';

import clipboardy from 'clipboardy';
import getStdin from 'get-stdin';

const copy = async(str, cb = () => {}) => {
  let content;
  let stdin = await getStdin();
  content = str || stdin || process.argv[2];
  if (content){
    clipboardy.writeSync(content);
    cb(content);
    process.exit(0);
  } else {
    console.log('Nothing to copy');
    cb('Nothing to copy');
    process.exit(0);
  }
};

const paste = () => {
  let content = clipboardy.readSync();
  process.stdout.write(content);
  return content;
};

export {copy, paste};
