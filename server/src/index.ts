import env from './util/validateEnv'
import app from './app'
import mongoose from 'mongoose'


const port  = env.PORT




mongoose.connect(`mongodb+srv://${env.DB_USER}:${env.DB_PASSWORD}@cluster0.cme43aq.mongodb.net/${env.DB_DEFAULT_DATABASE}?retryWrites=true&w=majority`)
.then(()=>{
    app.listen(port, () => {
        console.log("Server running on port: " + port);
    });
})
.catch((err)=>{
    console.log(err)
})