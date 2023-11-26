import { configureStore } from '@reduxjs/toolkit'
import uiReducer from '../features/ui/uiSlice'
import productReducer from '../features/products/productSlice'
import brandReducer from '../features/brands/brandSlice'
import categoryReducer from '../features/categories/categorySlice'
import customerReducer from '../features/customers/customerSlice'
import orderReducer from '../features/orders/orderSlice'
import authReducer from '../features/Auth/authSlice'
import wishListReducer from '../features/products/wishListSlice'
import cartReducer from '../features/products/cartSlice'
import dashboarReducer from '../features/dashboard/dashboardSlice'
const store =  configureStore({
  reducer: {
    ui:uiReducer,
    product:productReducer,
    brand:brandReducer,
    category:categoryReducer,
    customer:customerReducer,
    order:orderReducer,
    auth:authReducer,
    wishList:wishListReducer,
    cart:cartReducer,
    dashboard:dashboarReducer
  },
})
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch