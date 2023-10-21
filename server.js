const express require= const('express')
const app=express()
const bodyparser=require('body-parser')
const port =3003
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

// app.get("/",(req,res)=>{
//     res.status(200).send("hellowrold")
// })
const book_all=require('./routers/router')
app.use('/',book_all)
app.listen(port,()=>{
    console.log("running sucessfull")
})
