import { configureStore } from '@reduxjs/toolkit'
import uiReducer from '../features/ui/uiSlice'
import productReducer from '../features/products/productSlice'
import brandReducer from '../features/brands/brandSlice'
import categoryReducer from '../features/categories/categorySlice'
import customerReducer from '../features/customers/customerSlice'
import orderReducer from '../features/orders/orderSlice'
import adminReducer from '../features/adminAuth/authSlice'
const store =  configureStore({
  reducer: {
    ui:uiReducer,
    product:productReducer,
    brand:brandReducer,
    category:categoryReducer,
    customer:customerReducer,
    order:orderReducer,
    adminAuth:adminReducer
  },
})
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch