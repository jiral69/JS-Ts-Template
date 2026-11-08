import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

const appDataPath= process.env.APPDATA || '';
const TemplateFolder= path.join(appDataPath,'JS-TS-Template');

if(!fs.existsSync(TemplateFolder)){ 
    fs.mkdirSync(TemplateFolder, {recursive: true});
}

const DBpath:string= path.join(TemplateFolder,'DataBase.db');
const db= new Database(DBpath);


const CreateTableQuery=`
    CREATE TABLE IF NOT EXISTS settings(
        id integer primary key,
        value TEXT default ''
    );
`;

db.exec(CreateTableQuery);

export default db;


