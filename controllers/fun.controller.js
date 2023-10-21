const qu =require('../models/model')
const sql=require('../config/db.config')

exports.bookstore = async (req,res)=>{
    try{
        const book = await req.body
        const value=book.map((element)=>[element.book_title,element.book_author,element.book_published])
        sql.query(qu.store_data,[value],(err,result)=>{
            if(err){
                console.log(err)
            }
            else{
                res.send("uploaded sucessfull")
            }
        })
        
    }
    catch(e){
        console.log(error)
    }
}

exports.bookshow =  async (req,res)=>{
    try{
          sql.query(qu.get_data,(error,result)=>{
            if(error){
                console.log(error)
            }
            else{
                res.send(result)
            }
        })
    }
    catch(e){
        console.log(e)
    }
}
exports.specific = async (req,res)=>{
    try{
        const { id }= req.params;
        // console.log(id)
        sql.query(qu.specifc_data,[id],(error,result)=>{
            if(error){
                console.log(error)
            }
            else{
               res.send(result)
            }
        
        })
    }
    catch(e){
        console.log(e)
    }
}

exports.delete_specific = (req,res)=>{
    try{
        const { id } =req.params;
        sql.query(qu.delete_data,[id],(error,result)=>{
            if(error){
                console.log(error)
            }
            else{

                res.send("deleted sucessfull")
            }
        })
    }
    catch(error){
        console.log(error)
    }
}