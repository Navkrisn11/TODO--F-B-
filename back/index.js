const exp=require('express')
const mongoose=require('mongoose')
const cors=require('cors');
const app=exp()
const bp=require('body-parser')

const rout=require('./routes.js')
mongoose.connect('mongodb+srv://navkrisn:12345@cluster0.ykmsl3h.mongodb.net/Grocery?retryWrites=true')

mongoose.connection.once('open',()=>{console.log("connected")})
// app.get()  // url, middeware ,callback
app.use(cors('http://localhost:3000'))
app.use(bp.json(),rout)
app.listen(8000)








// const exp=require('express')
// const app=exp()


// const bp=require('body-parser')

// //app.get()  // url, middeware ,callback
// app.use(bp.json())
// let data ="abc"
// app.get('/',(req,res)=>{
//     res.send(data)
// })
// app.get('/abc',(req,res)=>{
//     res.send("hello,kanha")
// })
// app.post('/',(req,res)=>{
//      data=req.body.name
//     res.send(data)
// })
// app.listen(8000)