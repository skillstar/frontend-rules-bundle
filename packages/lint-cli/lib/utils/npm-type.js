"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_exists_1 = require("command-exists");
const promise = new Promise((resolve) => {
    if (!(0, command_exists_1.sync)('pnpm'))
        return resolve('npm');
    resolve('pnpm');
});
exports.default = promise;
