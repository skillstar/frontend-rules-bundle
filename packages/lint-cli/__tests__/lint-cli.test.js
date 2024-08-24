'use strict';

const lintCli = require('..');
const assert = require('assert').strict;

assert.strictEqual(lintCli(), 'Hello from lintCli');
console.info('lintCli tests passed');
