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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAmendFiles = exports.getCommitFiles = void 0;
const execa_1 = __importDefault(require("execa"));
const getCommitFiles = (options = {}) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { stdout } = yield (0, execa_1.default)('git', [
            'diff',
            '--staged',
            '--diff-filter=ACMR',
            '--name-only',
            '--ignore-submodules',
        ], Object.assign(Object.assign({}, options), { all: true, cwd: options.cwd || process.cwd() }));
        return stdout ? stdout.split(/\s/).filter(Boolean) : [];
    }
    catch (e) {
        return [];
    }
});
exports.getCommitFiles = getCommitFiles;
const getAmendFiles = (options = {}) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { stdout } = yield (0, execa_1.default)('git', [
            'diff',
            '--name-only',
        ], Object.assign(Object.assign({}, options), { all: true, cwd: options.cwd || process.cwd() }));
        return stdout;
    }
    catch (e) {
        return '';
    }
});
exports.getAmendFiles = getAmendFiles;
