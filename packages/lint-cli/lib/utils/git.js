"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAmendFiles = exports.getCommitFiles = void 0;
const execa_1 = require("execa");
const getCommitFiles = (...args_1) => __awaiter(void 0, [...args_1], void 0, function* (options = {}) {
    try {
        const { stdout } = yield (0, execa_1.execaCommand)('git diff --staged --diff-filter=ACMR --name-only --ignore-submodules', Object.assign(Object.assign({}, options), { all: true, cwd: options.cwd || process.cwd() }));
        return stdout ? stdout.split(/\s/).filter(Boolean) : [];
    }
    catch (e) {
        return [];
    }
});
exports.getCommitFiles = getCommitFiles;
const getAmendFiles = (...args_1) => __awaiter(void 0, [...args_1], void 0, function* (options = {}) {
    try {
        const { stdout } = yield (0, execa_1.execaCommand)('git diff --name-only', Object.assign(Object.assign({}, options), { all: true, cwd: options.cwd || process.cwd() }));
        return stdout;
    }
    catch (e) {
        return '';
    }
});
exports.getAmendFiles = getAmendFiles;
