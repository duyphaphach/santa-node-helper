const express = require('express');
const users = require('./users');
const fs = require('fs');

const app = express();

app.use(express.static(__dirname +  '/public'))

app.get('/input', (req, res) => {
  fs.readFile('./input.txt', 'ascii', (err, data) =>  {
    if(err){
      console.log(err);
    }
    else{
      console.time('Time');
      const input = data.toString().split(' ');
      input.reduce((acc, i) => {
        return (i === '()') ?  acc += 1 : acc -=1;
      }, 0)
      console.timeEnd('Time');
    }
  });
})
//
// app.get('/profile', (req, res) => {
//   const user = {
//     name: "Sally",
//     dog: "Key",
//     email: "Sally@gmail.com"
//   }
//   res.send(JSON.stringify(user));
// })
//
// app.get('/users', (req, res) => {
//   res.send(JSON.stringify(users));
// })
//
// app.get('/:id', (req, res) => {
//   const user = users[req.params.id+1];
//   if(user)
//     res.status(200).send(`Cua m day: ${JSON.stringify(user)}`);
//   else
//     res.status(404).send("ID fake cai dit me may a");
// })




app.listen(3000);
