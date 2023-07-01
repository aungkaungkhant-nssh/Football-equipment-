import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import "dotenv/config"
const app = express();


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


export default app