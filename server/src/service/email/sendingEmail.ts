import nodemailer from 'nodemailer'
import env from '../../util/validateEnv'
const sendingEmail = (emailTemplate:any)=>{
   let isFailed:boolean | null =null;
   const transport =  nodemailer.createTransport({
        service: "Gmail",
        auth:{
            user:env.AUTH_EMAIL,
            pass:env.AUTH_PASSWORD
        }
    })

    transport.sendMail(emailTemplate,(error,info)=>{
        if(error) return (isFailed =true)
        isFailed = false;
    })
    return isFailed
}

export default sendingEmail