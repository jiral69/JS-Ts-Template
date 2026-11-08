import express from 'express';
import type {Express, Request, Response} from 'express';
import cors from 'cors';

import path from 'path';
import db from './DataBase'


const PORT =3001;
const app:Express=express();

app.use(express.json());

app.use(cors())

app.use(express.static(path.join(__dirname, 'react-build')));

app.get('/api/health', (req:Request,res:Response):void=>{
    res.json({message:"good"});
} )

app.listen(PORT , ()=>{
    console.log("listening on port:", PORT);

})