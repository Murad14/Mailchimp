const express = require('express')
const app = express()
const port = 3001
const axios = require('axios'); //axios

console.log(axios.isCancel('something'));

app.use(express.static("public"));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html");
})

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})