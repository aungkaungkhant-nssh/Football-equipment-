import { useAppSelector } from "../app/hook"

const useWishList = ()=>{
    return useAppSelector(state=>state.wishList);
}
export default useWishList