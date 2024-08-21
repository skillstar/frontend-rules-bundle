'use strict';

const rule = require('../../lib/rules/no-http-url.js');
const { RuleTester } = require('eslint');

const ruleTester = new RuleTester({
    languageOptions: {
        parserOptions: {
            ecmaFeatures: {
                jsx: true
            }
        }
    }
});

ruleTester.run('no-http-url', rule, {
  valid: [
    {
      code: "var test = 'https://viink.com';",
    },
  ],

  invalid: [
    {
      code: "var test = 'http://viink.com';",
      output: null,
      errors: [
        {
          message: 'Recommended "http://viink.com" switch to HTTPS',
        },
      ],
    },
    {
      code: "<img src='http://viink.com' />",
      output: null,
      errors: [
        {
          message: 'Recommended "http://viink.com" switch to HTTPS',
        },
      ],
    },
  ],
});
