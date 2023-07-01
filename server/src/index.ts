import app from './app'
import mongoose, { mongo } from 'mongoose'
import env from './util/validateEnv'

const PORT  = env.PORT



mongoose.connect(`mongodb+srv://${env.DB_USER}:${env.DB_PASSWORD}@cluster0.cme43aq.mongodb.net/${env.DB_DEFAULT_DATABASE}?retryWrites=true&w=majority`)
.then(()=>{
    console.log(`Server is running on port ${PORT}`)
})
.catch((err)=>{
    console.log(err)
})