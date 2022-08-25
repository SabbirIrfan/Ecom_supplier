var express = require("express");
var server = express();
var cors = require("cors");

const CookieParser = require("cookies-parser")
const bodyParser = require("body-parser");

/// all usable
server.use(express.json())
server.use(bodyParser.urlencoded({
    extended: true
}));

const corsOptions = {
    //origin : 'http://localhost:300',
    credentials: true,
    //access=control-allow-credentials :true
    optionSeccessStatus: 200,
    origin: 'http://localhost:300'
}

server.use(cors(corsOptions));
server.use(CookieParser);
server.use("/auth", require("./Routes/api-routes"))
server.listen(4000,()=>{
    console.log("server is running");
})