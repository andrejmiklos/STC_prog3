"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wholeInfo = exports.someInfo = exports.map2 = exports.map1 = void 0;
const fs_1 = __importDefault(require("fs"));
exports.map1 = new Map();
exports.map2 = new Map();
const myBooks = fs_1.default.readFileSync("Books.json");
let JBooks = JSON.parse(myBooks.toString());
//map1.set
function someInfo() {
    JBooks.forEach(element => {
        exports.map1.set(element.id, [element.name, element.author, element.genre]);
    });
}
exports.someInfo = someInfo;
function wholeInfo() {
    JBooks.forEach(element => {
        exports.map2.set(element.id, element);
    });
}
exports.wholeInfo = wholeInfo;
