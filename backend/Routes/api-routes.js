var express = require("express");
var fs = require("fs");

var  USERS = []

fs.readFile("./Database/USER.json",
    (err,data)=>{
        if(err){
            console.log(err);
        }

        USERS = JSON.parse(data);
        console.log(USERS);
    }
)


var router = express.Router();

/// register route

router.post("/register",(req,res)=>{
    const {
        name,
        address,
        email, username,
        password
    } = req.body;
    if(!name || !address || !email || !username
        || !password){
            res.send("all required ");

        }

    USERS.map((user)=>{
        if(user.username == username){
            res.send("already exists")
        }
    })

    const USER = {
        name : name,
        address : address,
        email : email,
        username : username,
        password : password,
        balance : 0
    }
    USERS.push(USER);
    fs.write("./Database/USER.json",
    JSON.stringify(USERS),
        (err)=>{
            if(err) res.send("User registration successful");

        }
    )

    const token = jwt.sign({
        username: USER.username
    },
        "KEY")
    
        res.cookie("token",
        token,
        {
            httpOnly: true

        }).send("registered");

    

})


//// login router

router.post("/login" , (req,res) => {
    const {
        username,
        password,
    } = req.body;
    if(!username || !password){
        res.send("all required");
    }

    USERS.map((user)=>{
        if(user.username == username && user.password == password){

            const token = jwt.sign({
                username: username
            },
            "KEY")

            res.cookie("jwt-token",
            token, {
                httpOnly: true
            }).send(username)
        }
        else{
            res.status(400).send("login failed")
        }
    })
})


//////// logout route

router.get("/logout", (req,res)=>{
    res.clearCookie("token").send("logged out")
})
module.exports = router;