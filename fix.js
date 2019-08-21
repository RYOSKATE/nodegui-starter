var path = require('path');
var fs = require('fs');
const filepath = path.resolve(__dirname, './node_modules/@nodegui/nodegui/dist/src/lib/core/addon.js');
console.log(filepath);
const data = `"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bindings_1 = __importDefault(require("bindings"));
const addon = bindings_1.default({ bindings: "qtnode", module_root: MODULE_ROOT});
exports.default = addon;
//# sourceMappingURL=addon.js.map`
fs.writeFile(filepath, data, function (err) {
    if (err) {
        throw err;
    }
});