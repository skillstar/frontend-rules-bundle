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
const child_process_1 = require("child_process");
const ora_1 = __importDefault(require("ora"));
const log_1 = __importDefault(require("../utils/log"));
const npm_type_1 = __importDefault(require("../utils/npm-type"));
const constants_1 = require("../utils/constants");
const checkLatestVersion = () => __awaiter(void 0, void 0, void 0, function* () {
    const npm = yield npm_type_1.default;
    const latestVersion = (0, child_process_1.execSync)(`${npm} view ${constants_1.PKG_NAME} version`).toString('utf-8').trim();
    if (constants_1.PKG_VERSION === latestVersion)
        return null;
    const compareArr = constants_1.PKG_VERSION.split('.').map(Number);
    const beComparedArr = latestVersion.split('.').map(Number);
    for (let i = 0; i < compareArr.length; i++) {
        if (compareArr[i] > beComparedArr[i]) {
            return null;
        }
        else if (compareArr[i] < beComparedArr[i]) {
            return latestVersion;
        }
    }
});
exports.default = (...args_1) => __awaiter(void 0, [...args_1], void 0, function* (install = true) {
    const checking = (0, ora_1.default)(`[${constants_1.PKG_NAME}] 正在检查最新版本...`);
    checking.start();
    try {
        const npm = yield npm_type_1.default;
        const latestVersion = yield checkLatestVersion();
        checking.stop();
        if (latestVersion && install) {
            const update = (0, ora_1.default)(`[${constants_1.PKG_NAME}] 存在新版本，将升级至 ${latestVersion}`);
            update.start();
            (0, child_process_1.execSync)(`${npm} i -g ${constants_1.PKG_NAME}`);
            update.stop();
        }
        else if (latestVersion) {
            log_1.default.warn(`最新版本为 ${latestVersion}，本地版本为 ${constants_1.PKG_VERSION}，请尽快升级到最新版本。\n你可以执行 ${npm} install -g ${constants_1.PKG_NAME}@latest 来安装此版本\n`);
        }
        else if (install) {
            log_1.default.info(`当前没有可用的更新`);
        }
    }
    catch (e) {
        checking.stop();
        log_1.default.error(e);
    }
});
