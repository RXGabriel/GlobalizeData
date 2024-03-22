import { writeFile, readFile } from 'fs/promises';

export const save = async (data) => {
    const url = 'C:\\Node-Programns\\JSExpert\\ProjetoFInal\\InternacionalizaçãoDeDados\\database.json'
    const { pathname: databaseFile } = new URL(url, import.meta.url);
    const currentData = JSON.parse((await readFile(databaseFile)));
    currentData.push(data);

    await writeFile(databaseFile, JSON.stringify(currentData));
};
