var express = require("express");
var bodyParser = require("body-parser");
var request = require("request");
var app = express();
var cors = require("cors");

app.use(bodyParser.json());
/*------------------Routing Started ------------------------*/
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,DELETE,POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.static(__dirname + "/build"));
app.post("/getToken", function (req, res) {
  request(
    {
      method: "POST",
      url:
        "https://dh-atrpackageinstalltest.atrmywizard-aiops.com/atr-gateway/identity-management/api/v1/auth/short-token?useDeflate=true",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        apiToken: req.headers,
      },
      body: JSON.stringify(req.body),
    },
    async function (error, response) {
      if (error === null) {
        console.log("Token API Success!!");
      }
      return res.json(JSON.parse(response.body));
    }
  );
});

app.post("/getCardList", function (req, res) {
  request(
    {
      method: "GET",
      url: `https://dh-atrpackageinstalltest.atrmywizard-aiops.com/atr-gateway/ticket-management/api/v1/tickets?ticketType=incident&sortDirection=DESC&page=${req.body.page}&perPage=${req.body.perPage}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        apiToken: req.headers["authorization"],
      },
    },
    async function (error, response) {
      if (error === null) {
        console.log("card lists API success!!");
      }
      return res.json(JSON.parse(response.body));
    }
  );
});

app.get("/*", function (req, res) {
  res.sendFile("/build/index.html", { root: __dirname });
});
/*--------------------Routing Over----------------------------*/
app.listen(3003, function () {
  console.log("Express Started on Port 3003");
});
