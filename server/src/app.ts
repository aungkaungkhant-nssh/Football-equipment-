import "dotenv/config"
import express from 'express'
import bodyParser from 'body-parser'

import brandRoute from './routes/brand'
import categoryRoute from './routes/category'
import productRoute from './routes/product'
import customerRoute from './routes/customer'
import adminRoute from './routes/admin'
import orderRoute from './routes/order'
import checkOutRoute from './routes/checkout'
import dashboardRoute from './routes/dashboard';
import cors from 'cors';
import session from 'express-session'
import env from './util/validateEnv'

require('./passportSetup.ts');
import passport from 'passport'
const app = express();
app.use(session({
  secret: env.JWT_KEY,
  resave: false,
  saveUninitialized: false
}));


app.use(cors())
app.use(passport.initialize());
app.use(passport.session());
 
app.use((req,res,next)=>{
    if (req.originalUrl === '/api/checkout/webhook') {
        next();
      } else {
        express.json()(req, res, next);  
      }
});
app.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/google/callback', passport.authenticate('google', { failureRedirect: '/failed' }),
  function(req:any, res) {
    res.redirect(`${env.CLIENT_DOMAIN}/login?name=${req.user._doc.name}&email=${req.user._doc.email}&token=${req.user.token}`)
  }
);

app.use("/api/checkout",checkOutRoute)
app.use("/api/admin/brand",brandRoute)
app.use("/api/admin/category",categoryRoute)
app.use("/api/admin/product",productRoute)
app.use("/api/customer",customerRoute)
app.use("/api/admin/auth",adminRoute)
app.use("/api/order",orderRoute);
app.use("/api/admin/dashboard",dashboardRoute)

export default app