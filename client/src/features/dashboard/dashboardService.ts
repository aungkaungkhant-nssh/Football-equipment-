import Axios from "../../Axios";
const API_URL = "/api/admin/dashboard";


const fetchLatestDashboardData = async(adminToken:string | undefined)=>{
    try{
        const res = await Axios.get(`${API_URL}`,{
            headers:{
                Authorization:`Bearer ${adminToken}`
            }
        })
        return res.data
    }catch(err:any){
        return err.response.data
    }
}


const dashboardService = {
    fetchLatestDashboardData
}

export default dashboardService