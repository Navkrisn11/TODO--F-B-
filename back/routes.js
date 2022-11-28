const exp =require('express')
const routes =exp.Router()

const details=require('./Schema')


routes.get('/',async(req,res)=>{
  const data = await details.find()
    res.send(data)
})
// routes.get('/abc',(req,res)=>{
//     res.send("i have a  good boy")
// })

routes.post('/',async(req,res)=>{
  const data = await details.create(req.body)  
           console.log("Hello")
           
        res.send([{data,"result":"success"}])
})

routes.put('/:name',async(req,res)=>{
    
    const data  =await details.findOneAndUpdate({groceryItem:req.params.name},{isPurchased:req.body.isPurchased})                                                                  //res.params.name
                                                                        //res.query
                                                                      // let val=data.filterPath
    res.send([{data,"result":"success"}])
})

routes.delete('/:name',async(req,res)=>{
    const data =await details.findOneAndDelete({groceryItem:req.params.name})
   
    res.send([{data,"result":"success"}])
})
module.exports=routes;