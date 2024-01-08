import express from 'express'
const router = express.Router()
import {Book} from '../model/bookModel.js'

router.post('/books',async(req,res)=>{ 
    try{
      
        
    const newBook = {title:req.body.title,author:req.body.author,publishedYear:req.body.publishedYear}  
     
    const book = await Book.create(newBook)
   
    console.log(book)
    return res.status(200).send(book)
    }
    catch(e){ 
        console.log(e)
        res.status(500).send({message:e})
    }
})
router.get('/books',async(req,res)=>{ 
    try{
        const books = await Book.find({})
        console.log(books)
        return res.status(200).send({
            count:books.length,
            data:books
        }) 
     }
    catch(e){ 
        console.log(e)
        res.status(500).send(e)
    }
})
router.get('/books/:id',async(req,res)=>{ 
    try{
        const {id} = req.params
        const book = await Book.findById(id)
        console.log(book)
        
        return res.status(200).send({
          book
        }) 
     }
    catch(e){ 
        console.log(e)
        res.status(500).send(e)
    }
})
router.put('/books/:id',async(req,res)=>{ 
    try{
        const {id} = req.params
        const result = await Book.findByIdAndUpdate(id,req.body)
        if(!result)
        { 
            return res.status(400).json({message:'Book not found'})
        }
        console.log(result)

        return res.status(200).send({
          result
        }) 
     }
    catch(e){ 
        console.log(e)
        res.status(500).send(e)
    }})
    router.delete('/books/:id',async(req,res)=> {
        try{
            const {id} = req.params
            const result = await Book.findByIdAndDelete(id,req.body)
            if(!result)
            { 
                return res.status(400).json({message:'Book not found'})
            }
             
         }
        catch(e){ 
            console.log(e)
            res.status(500).send(e)
        }
    })
export default router 