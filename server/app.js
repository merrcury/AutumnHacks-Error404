const express=require('express');
const app=express();
app.use(require('./utils/cors'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use()

app.listen(process.env.PORT|| 4004,()=>{
    console.log("Server Started, Browse to port no 4004...");
})