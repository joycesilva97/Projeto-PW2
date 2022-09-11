//IMPORTA O PACOTE DO EXPRESS PARA O SCRIPT INDEX.JS
const express = require ('express');


//TORTA O EXPRESS EXECUTAVEL DENTRO DO SCRIPT INDEX.JS ATRAVÉS DA CONSTANTE APP
const app = express ();

//ABRIR O SERVIDOR
app.listen (3000,()=>{
    console.log('Servidor rodando')
});




