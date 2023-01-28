const express = require('express');
const bodyParser = require('body-parser');
const route = require('./route/route.js');
const { default: mongoose } = require('mongoose');
const multer= require("multer");
const { AppConfig } = require('aws-sdk');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use( multer().any());


mongoose.connect("mongodb+srv://Shukla123:Shukla123@cluster0.vyd2nui.mongodb.net/project3", {
    useNewUrlParser: true 
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )



app.use('/', route);
app.use("/*",function(req,res){

    res.status(400).send({status:false ,message:"Wrong path! "})
}
)


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
