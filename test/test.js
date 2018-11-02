'use strict';
const assert = require('assert');
const lib = require('../index');

describe('Copy - Paste', () => {
  it('should copy and paste "Hello World"', async(done) => {
    lib.copy('Hello Worlda', () => {
      let content = lib.paste();
      assert.equal('Hello Worlda', content);
      done();
    });
  });
});
