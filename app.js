const express = require('express')
const app = express()
const port = 3001
const axios = require('axios'); //axios

console.log(axios.isCancel('something'));

app.use(express.static("public"));
app.use(express.urlencoded()); //BODY-PARSER

app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html");
})

app.post("/", function(req,res){
    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.email;

    console.log(firstName,lastName,email);
})

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})