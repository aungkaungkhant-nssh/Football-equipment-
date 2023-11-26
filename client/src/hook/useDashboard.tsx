import { useAppSelector } from '../app/hook'

const useDashboard = () => {
  return   useAppSelector((state)=>state.dashboard)

}

export default useDashboard