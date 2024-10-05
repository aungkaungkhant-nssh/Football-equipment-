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

    STRIPE_SINGNING_SECRET:str({default:"whsec_55bc7a5983607deda4cff2aab26847cd575d49bcd715844a2e0df09294398a61"}),
    STRIPE_SECRET_KEY:str({default:"sk_test_51Q6XZpP612Nudxro9u3mMcmzjQSj6KNf4gVtMiFpT3oguwIcrwKMUCHCt3MwlW9NSKk4YSlBEsWvATXr2goQsKCy0094sLXfKa"}),
    STRIPE_API_KEY:str({default:"pk_test_51Q6XZpP612NudxropLkXO3lhry5X9My0mZMQaB1I4DRtd63GHbKnoM2VRoyV6WhJhF0fXOseiGsfu3BMfl3na9Na00g88D8edU"}),
    GOOGLE_CLIENT_ID:str({default:"333967193431-4ibdkbc2tok5o08r2isgi7142q9ll8ui.apps.googleusercontent.com"}),
    GOOGLE_CLIENT_SECRET:str({default:"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"}),
    GOOGLE_CALLBACK:str({default:"http://localhost:8000/google/callback"}),
    CLIENT_DOMAIN:str({default:"http://localhost:5173"})
})
