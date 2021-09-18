require('dotenv').config({path:'variaveis.env'});
const express= require('express');
const cors= require('cors')
const bodyParser= require('body-parser')

const server= express()

routes= require('./route');

server.use(cors());
server.use( bodyParser.json() );
server.use( bodyParser.urlencoded( { extended: false, } ) );
server.use('/api',routes);

server.listen(process.env.PORT, ()=>{
    console.log(`Servidor rodando na porta${process.env.PORT}`);
})
