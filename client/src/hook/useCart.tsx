
import { useAppSelector } from '../app/hook'

const useCart = () => {
  return   useAppSelector((state)=>state.cart)

}

export default useCart