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

    STRIPE_SINGNING_SECRET:str({default:"whsec_a96ee65458f86012659d8f1b93005fed8bdfb65f0516898ef2b67b51a52f147a"}),
    STRIPE_SECRET_KEY:str({default:"sk_test_51NhulAFtJsNegd4lgMeV7TOY9qmc26rOrgLBbc0pbKta8dSK9G4TLC5N1CxirPXHQwENkCnss2UgTB4wvIBjnlPs00bxZb7Aa0"}),
    STRIPE_API_KEY:str({default:"pk_test_51NhulAFtJsNegd4lYEUQFNeR1luPY9kiMXZs0xMkZBWtPYY90w44YFPpv8HQoubyn6Qz3K8qat9AaZ1wnQhOJS0P00H8dEyZOH"}),
    GOOGLE_CLIENT_ID:str({default:"333967193431-4ibdkbc2tok5o08r2isgi7142q9ll8ui.apps.googleusercontent.com"}),
    GOOGLE_CLIENT_SECRET:str({default:"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"}),
    GOOGLE_CALLBACK:str({default:"http://localhost:8000/google/callback"}),
    CLIENT_DOMAIN:str({default:"http://localhost:5173"})
})