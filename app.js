const express = require('express')
const app = express()
const port = 3001
const axios = require('axios'); //axios

console.log(axios.isCancel('something'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})