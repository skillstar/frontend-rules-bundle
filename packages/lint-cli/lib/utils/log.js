"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const constants_1 = require("./constants");
const { green, blue, yellow, red } = chalk_1.default;
exports.default = {
    success(text) {
        console.log(green(text));
    },
    info(text) {
        console.info(blue(text));
    },
    warn(text) {
        console.info(yellow(text));
    },
    error(text) {
        console.error(red(text));
    },
    result(text, pass) {
        console.info(blue(`[${constants_1.PKG_NAME}] ${text}`), pass ? green(constants_1.UNICODE.success) : red(constants_1.UNICODE.failure));
    },
};
