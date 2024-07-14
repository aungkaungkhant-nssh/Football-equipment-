import {cleanEnv} from 'envalid'
import {port,str,num} from 'envalid/dist/validators'

export default cleanEnv(process.env,{
    PORT:num({default:8000}),
    DB_USER:str({default:"root"}),
    DB_PASSWORD : str({default:"root"}),
    AUTH_EMAIL : str({default:"aungkaungkhantakk123321@gmail.com"}),
    AUTH_PASSWORD : str({default:"acnh ayux njcp govo"}),
    DB_DEFAULT_DATABASE :str({default:"footballequipment"}),
    JWT_KEY:str({default:"nansusanhtike@107"}),

    STRIPE_SINGNING_SECRET:str({default:"whsec_38c8f9fd500c9e048c314ead7719259a13b3137b069980e90c97e94993d0e340"}),
    STRIPE_SECRET_KEY:str({default:"sk_test_51OFqbEKcFtr63svvEvTLhUgaFnfRWDPBKVKlnrxhMDFSp7lf3bMIXxoAdJrLOV6uxQZRg3oiraFp8PqSpdU6hIGC00lFVgSZdo"}),
    STRIPE_API_KEY:str({default:"pk_test_51OFqbEKcFtr63svvKewbvLEbjYlZqV66KNzZRQJ16JUfpH7etSvpGwP4DwElOVEhOOmB3EGdhDb7kScYPNct6Dpb00vDesDmfc"}),
    GOOGLE_CLIENT_ID:str({default:"333967193431-4ibdkbc2tok5o08r2isgi7142q9ll8ui.apps.googleusercontent.com"}),
    GOOGLE_CLIENT_SECRET:str({default:"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"}),
    GOOGLE_CALLBACK:str({default:"http://localhost:8000/google/callback"}),
    CLIENT_DOMAIN:str({default:"http://localhost:5173"})
})
