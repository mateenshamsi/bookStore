import express from 'express'
import mongoose from 'mongoose'
import {Book} from './model/bookModel.js'
import BookRouter from './routes/BookRouter.js'
import cors from 'cors'
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Book');
}
main()
const app = express()
app.use(express.json())
app.use('/',BookRouter)
app.listen(3000,()=>{ 
    console.log("Listening on port 3000")
})
  