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






app.post('/updatename', async (req, res, next) => { 
  console.log(req.body)
 const { email, iFirstName, oldName } = req.body;

await db.query(
  "UPDATE users SET name = ($1) WHERE email = ($2);",
  [iFirstName, email]
).then(
       res.status(201).send({
           message: "Perfil alterado com sucesso!",
           body: {
             users: { email, iFirstName, oldName  } 
           },
           
       })).catch((error) => {
       console.log(error)
   })

})



app.post('/updatelastname', async (req, res, next) => { 
  console.log(req.body)
 const { email, iLastName, oldLastname } = req.body;
 console.log( email, iLastName, oldLastname )

await db.query(
  "UPDATE users SET lastname = ($1) WHERE email = ($2);",
  [iLastName, email]
).then(
       res.status(201).send({
           message: "Perfil alterado com sucesso!",
           body: {
             users: { email, iLastName, oldLastname }
           },
           
       })).catch((error) => {
       console.log(error)
   })

})

app.post('/updatebiography', async (req, res, next) => { 
  console.log(req.body)
 const { email, iBiography, oldBiography } = req.body;
 console.log( email, iBiography, oldBiography )

await db.query(
  "UPDATE users SET biography = ($1) WHERE email = ($2);",
  [iBiography, email]
).then(
       res.status(201).send({
           message: "Perfil alterado com sucesso!",
           body: {
             users: { email, iBiography, oldBiography }
           },
           
       })).catch((error) => {
       console.log(error)
   })

})










app.post('/updatecellphone', async (req, res, next) => { 
  console.log(req.body)
 const { oldCellphone, iWhatsapp, email } = req.body;

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



app.post('/login', async (req, res, next) => { 
  console.log(req.body)
 const { iPassword, iEmail } = req.body;
 console.log(iPassword,iEmail)

// const emailUsuario = await db.query(
//   "SELECT id_user FROM users WHERE email =($1);",
//   [email]
// )

// // const idDoUsuario = idUsuario.rows[0].id_user

// console.log(idUsuario.rows[0].email)

const dadosUsuario = await db.query(
  "SELECT email, password, name, lastname, whatsapp, biography FROM users WHERE email = ($1) AND password = ($2)",
  [iEmail, iPassword]
)

console.log('Dados',dadosUsuario.rows)

if(dadosUsuario.rows.length !== 0)
{

  const iFirstName = dadosUsuario.rows[0].name
  const iLastName = dadosUsuario.rows[0].lastname
  const iEmail = dadosUsuario.rows[0].email
  const iPassword = dadosUsuario.rows[0].password
  const iWhatsapp = dadosUsuario.rows[0].whatsapp
  const iBiography = dadosUsuario.rows[0].biography

   res.status(201).send({
              message: "Perfil alterado com sucesso!",
              body: {
                users: { iFirstName, iLastName, iEmail, iPassword, iWhatsapp, iBiography } 
              }

})

} else {
  res.status(201).send({
    message: "Falha!",

})
}
 

})


    app.post('/cadastro', async (req, res, next) => { 
        const { iFirstName , iLastName , iEmail, iPassword, iWhatsapp, iBiography} = req.body;

        const verifyEmail = await db.query(
          'SELECT * FROM users WHERE email = ($1)',
          [iEmail]
        )

        const constVerifyEmail = verifyEmail.rows


        if(constVerifyEmail == '') {
        await db.query(
          "INSERT INTO users (name, lastname, email, password, whatsapp, biography) VALUES ($1, $2, $3, $4, $5, $6);",
          [iFirstName, iLastName, iEmail, iPassword, iWhatsapp, iBiography]
        ).then(
            res.status(201).send({
                message: "Perfil criado com sucesso!",
                body: {
                  users: { iFirstName , iLastName , iEmail, iPassword, iWhatsapp, iBiography }
                }
            })).catch((error) => {
            console.log(error)
        })
      } else {
        res.status(201).send({
          message: "Falha!",
      })
    }
  





    
}) 

var server = http.createServer(app); 
server.listen(3031);
console.log("Servidor escutando na porta 3031...")