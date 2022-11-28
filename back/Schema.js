const mongoose = require('mongoose')

const NewSchema=mongoose.Schema (

    {
        groceryItem:{
            required:true,
            type:String,
        },
        isPurchased:{
            required:true,
            type:String,
        }
       
    },

   



)


module.exports=mongoose.model('user',NewSchema)