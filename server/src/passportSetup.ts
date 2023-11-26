import passport from 'passport';
import {Strategy as GoogleStrategy} from "passport-google-oauth20"
import env from './util/validateEnv'
import Customer from './model/Customer';
passport.serializeUser(function(user, done) {

    done(null, user);
  });
  
passport.deserializeUser(function(user:any, done) {

    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: env.GOOGLE_CLIENT_ID,
    clientSecret: env.GOOGLE_CLIENT_SECRET,
    callbackURL:env.GOOGLE_CALLBACK,
  },
  async function(accessToken, refreshToken, profile, done) {
     const emails = profile.emails;
     if(!emails) return;
     const customer =  await Customer.findOne({email:emails[0].value})
     if(customer){
        let token =await  customer.generateToken();
        done(null,{...customer,token})
     }else{
      let  newCustomer =  new Customer({
         name:profile.displayName,
         email:emails[0].value,
         provider:true,
         password:"",
         oAuthProvider:{
           provider:profile.provider,
           providerId:profile.id
         }
       })
       newCustomer =await newCustomer.save();
       let token = await newCustomer.generateToken();
       done(null,{...newCustomer,token})
     }
    
   
    
  }
));