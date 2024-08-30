"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 1 - importação de arquivos
const greet_1 = __importDefault(require("./greet"));
(0, greet_1.default)();
// 2 - importação de variáveis
const varables_1 = require("./varables");
console.log(varables_1.x);
// 3 - múltplas importações
const multiple_1 = require("./multiple");
console.log(multiple_1.a);
console.log(multiple_1.b);
(0, multiple_1.myFunction)();
// 4 - alias
const changeName_1 = require("./changeName");
console.log(changeName_1.someName);
