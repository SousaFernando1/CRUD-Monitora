//api-cadastro.js
var http = require('http'); 
const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const db = require('./database.js')

app.use(require("cors")());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
    res.json({message: "Tudo ok por aqui!"});
})







// app.post('/perfil', async (req, res, next) => { 
//     const { iFirstName , iLastName , iEmail, iPassword} = req.body;
//     await db.query(
//       "INSERT INTO users (name, lastname, email, password) VALUES ($1, $2, $3, $4);",
//       [iFirstName, iLastName, iEmail, iPassword]
//     ).then(
//         res.status(201).send({
//             message: "Perfil criado com sucesso!",
//             body: {
//               users: { iFirstName , iLastName , iEmail, iPassword }
//             }
//         })).catch((error) => {
//         console.log(error)
//     })
// })


//////////////////////////



 app.post('/perfil', async (req, res, next) => { 
    console.log(req.body)
    const { iEmail, email} = req.body;
    await db.query(
        
      "UPDATE users SET email = ($1) where email = ($2);",
      [iEmail, email]
    ).then(
        res.status(201).send({
            message: "Perfil alterado com sucesso!",
            body: {
              users: {email, iEmail} 
            }
        })).catch((error) => {
        console.log(error)
    })

}) 






    app.post('/cadastro', async (req, res, next) => { 
        const { iFirstName , iLastName , iEmail, iPassword} = req.body;
        await db.query(
          "INSERT INTO users (name, lastname, email, password) VALUES ($1, $2, $3, $4);",
          [iFirstName, iLastName, iEmail, iPassword]
        ).then(
            res.status(201).send({
                message: "Perfil criado com sucesso!",
                body: {
                  users: { iFirstName , iLastName , iEmail, iPassword }
                }
            })).catch((error) => {
            console.log(error)
        })
    
    

/*   console.log("Cadastro recebido!");



    //salva no banco de dados
    cadastros.push({
        Nome: req.body.iFirstName, 
        Sobrenome: req.body.iLastName, 
        Email: req.body.iEmail, 
        Password: req.body.iPassword
    });
    res.json({message: "Tudo ok por aqui!", dados: cadastros}); */
}) 

var server = http.createServer(app); 
server.listen(3031);
console.log("Servidor escutando na porta 3031...")