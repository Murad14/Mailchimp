const express = require('express')
const app = express()
const port = 3001
const axios = require('axios'); //axios
const https = require("https");
const { url } = require('inspector');


console.log(axios.isCancel('something'));

app.use(express.static("public"));
app.use(express.urlencoded()); //BODY-PARSER

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
})

app.post("/", function (req, res) {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  };

  const jsonData = JSON.stringify(data);
  const url = "https://21.api.mailchimp.com/3.0/lists/64ff661dfc"

  const options = {
    method: "POST",
    auth: "murad1:ebf51bfc62b8628fa4dcf39f4433af1a-us21"
  }

  const request = https.request(url, options, function (response) {

    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html");
    }else{
      res.sendFile(__dirname + "/failure.html");
    }

    response.on("data", function (data) {
      console.log(JSON.parse(data));
    });
  })
  request.write(jsonData);
  request.end();
})


app.post("/failure", function(req, res){
  res.redirect("/")
})


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


//API key:
// ebf51bfc62b8628fa4dcf39f4433af1a-us21
// Audience ID
// 64ff661dfc 