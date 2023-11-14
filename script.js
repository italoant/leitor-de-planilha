"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const xlsx_1 = __importDefault(require("xlsx"));
const readFile = xlsx_1.default.readFile("./aaa.xlsx");
const pagina = readFile.SheetNames[0];
const file = readFile.Sheets[pagina];
const datas = xlsx_1.default.utils.sheet_to_json(file, {
    raw: false,
});
let response = [];
for (const data of datas) {
    let id = 1;
    let clientInfo = {};
    if (data.id != id) {
        console.log("nao foi");
    }
    clientInfo.id = data.id;
    response.push(clientInfo);
}
console.log(response);
