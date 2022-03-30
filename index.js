const { response } = require("express");
const express = require("express");
const { request } = require("https");
const app = express();

app.listen(3000,() => console.log("Hello Express")); 
app.use(express.static("public"));
app.use(express.json({limit: "1mb"}));
app.post("/api", (request,response) => {
    
    console.log("I got the request!");
    console.log(request.body);
    
});