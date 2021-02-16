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





//////////////////////////



// app.post('/perfil', async (req, res, next) => { 
//     console.log(req.body)
//     const { iEmail, email} = req.body;
//     await db.query(
        
//       "UPDATE users SET email = ($1) where email = ($2);",
//       [iEmail, email]
//     ).then(
//         res.status(201).send({
//             message: "Perfil alterado com sucesso!",
//             body: {
//               users: {email, iEmail} 
//             }
//         })).catch((error) => {
//         console.log(error)
//     })

// }) 

app.post('/perfil', async (req, res, next) => { 
    console.log(req.body)

    const resposta = await db.query(
        
      "SELECT name FROM users WHERE id_user = 58;"
    ).then(
        res.status(201).send({
            message: "Perfil alterado com sucesso!",
            body: {
              users: { } 
            },
            
        })).catch((error) => {
        console.log(error)
    })
    console.log(resposta.rows[0].name)
})






app.post('/updateemail', async (req, res, next) => { 
  console.log(req.body)
 const { registerEmail, iEmail } = req.body;

const idUsuario = await db.query(
  "SELECT id_user FROM users WHERE email =($1);",
  [registerEmail]
)

const idDoUsuario = idUsuario.rows[0].id_user

await db.query(     
    "UPDATE users SET email = ($1) where id_user = ($2);",
    [iEmail, idDoUsuario]
 ).then(
     res.status(201).send({
         message: "Perfil alterado com sucesso!",
         body: {
           users: { registerEmail, iEmail } 
         },
         
     })).catch((error) => {
     console.log(error)
 })


})



app.post('/updatecellphone', async (req, res, next) => { 
  console.log(req.body)
 const { oldCellphone, iWhatsapp, email } = req.body;

// const emailUsuario = await db.query(
//   "SELECT id_user FROM users WHERE email =($1);",
//   [email]
// )

// // const idDoUsuario = idUsuario.rows[0].id_user

// console.log(idUsuario.rows[0].email)



await db.query(     
    "UPDATE users SET whatsapp = ($1) where email = ($2);",
    [iWhatsapp, email]
 ).then(
     res.status(201).send({
         message: "Perfil alterado com sucesso!",
         body: {
           users: { iWhatsapp, oldCellphone, email } 
         },
         
     })).catch((error) => {
     console.log(error)
 })

console.log(iWhatsapp, email, oldCellphone)
})





    app.post('/cadastro', async (req, res, next) => { 
        const { iFirstName , iLastName , iEmail, iPassword, iWhatsapp} = req.body;

        const verifyEmail = await db.query(
          'SELECT * FROM users WHERE email = ($1)',
          [iEmail]
        )

        const constVerifyEmail = verifyEmail.rows


        if(constVerifyEmail == '') {
        await db.query(
          "INSERT INTO users (name, lastname, email, password, whatsapp) VALUES ($1, $2, $3, $4, $5);",
          [iFirstName, iLastName, iEmail, iPassword, iWhatsapp]
        ).then(
            res.status(201).send({
                message: "Perfil criado com sucesso!",
                body: {
                  users: { iFirstName , iLastName , iEmail, iPassword, iWhatsapp }
                }
            })).catch((error) => {
            console.log(error)
        })
      } else {
        res.status(201).send({
          message: "Falha!",
      })
    }
  





    

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