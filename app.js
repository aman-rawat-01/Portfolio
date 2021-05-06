//jshint esversion 6
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;
  const project = req.body.project;
  const message = req.body.message;

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
          PROJECT: project,
          MESSAGE: message
        }
      }
    ]
  };

  const jsonData = JSON.stringify(data);

  const url = "https://us1.api.mailchimp.com/3.0/lists/51897ef127";
 
  const options = {
    method: "POST",
    auth: "AmanRawat:cf295b5dda4cc22567e3e9c8bb6b77bd-us1"
  };
  const request = https.request(url, options, (response) => {

    if(response.statusCode===200){
        res.sendFile(__dirname + "/success.html")
    }else{
        res.sendFile(__dirname + "/failure.html")
    }

    response.on("data", (data) => {
      // console.log(JSON.parse(data));
    });
  });

  request.write(jsonData);
  request.end();

});

app.post("/failure", (req,res)=>{
    res.redirect("/")
})

app.listen(process.env.PORT || 3000, () => {
  console.log("server is running at port 3000");
});

