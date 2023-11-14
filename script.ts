import xlsx from "xlsx";
import { ClientDto } from "./clienteDTO";

const readFile = xlsx.readFile("arquivoxlsx");

const pagina = readFile.SheetNames[0];
const file = readFile.Sheets[pagina];

const datas: ClientDto[] = xlsx.utils.sheet_to_json<ClientDto>(file, {
  raw: false,
});

let response: ClientDto[] = [];

for (const data of datas) {
  let id: number = 1;
  let clientInfo: ClientDto = {} as ClientDto;

  if (data.id != id) {
    console.log("nao foi");
  }
  clientInfo.id = data.id;

  response.push(clientInfo);
}

console.log(response);
