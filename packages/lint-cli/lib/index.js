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
exports.scan = exports.init = void 0;
const ora_1 = __importDefault(require("ora"));
const scan_1 = __importDefault(require("./actions/scan"));
const init_1 = __importDefault(require("./actions/init"));
const constants_1 = require("./utils/constants");
const print_report_1 = __importDefault(require("./utils/print-report"));
const init = (options) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, init_1.default)(Object.assign(Object.assign({}, options), { checkVersionUpdate: false }));
});
exports.init = init;
const scan = (options) => __awaiter(void 0, void 0, void 0, function* () {
    const checking = (0, ora_1.default)();
    checking.start(`执行 ${constants_1.PKG_NAME} 代码检查`);
    const report = yield (0, scan_1.default)(options);
    const { results, errorCount, warningCount } = report;
    let type = 'succeed';
    if (errorCount > 0) {
        type = 'fail';
    }
    else if (warningCount > 0) {
        type = 'warn';
    }
    checking[type]();
    if (results.length > 0)
        (0, print_report_1.default)(results, false);
    return report;
});
exports.scan = scan;
