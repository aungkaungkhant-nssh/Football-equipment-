import {cleanEnv} from 'envalid'
import {port,str,num} from 'envalid/dist/validators'

export default cleanEnv(process.env,{
    PORT:num({default:8000}),
    DB_USER:str({default:"root"}),
    DB_PASSWORD : str({default:"root"}),
    DB_DEFAULT_DATABASE :str({default:"footballequipment"})
})