var express = require('express');
var app = express();

var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended: false}));

// var nodemailer = require('nodemailer');
// var transporter = nodemailer.createTransport({
//     port: 465,
//     host: "smtp.gmail.com",
//     auth: {
//         user:'rameen.amir.malik@gmail.com',
//         pass:''
//     },
//     secure: false
// });

// var mailOptions= {
//     from: 'rameen.amir.malik@gmail.com',
//     to: 'l201283@lhr.nu.edu.pk',
//     subject: 'first try'

// }

// transporter.sendMail(mailOptions,function(error,info){
//     if(error)
//         console.log(error);
//     else
//         console.log("email sent" + info.response);
// })

app.get('/',function(req,res){
    res.sendFile('index.html');
});

app.post('/submit-data',function(req,res){
    var name = req.params.name;
    res.send(name);
});

var server = app.listen(5000,function(){
    console.log("Node server is running");
})

