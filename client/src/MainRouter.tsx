import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/user/Home'
import ProductDetails from './pages/user/ProductDetails'
import Products from './pages/user/Products'
import Carts from './pages/user/Carts'
import Favorite from './pages/user/Favorite'
import CompareProducts from './pages/user/CompareProducts'
import Login from './pages/user/Login'
import Register from './pages/user/Register'
import DeliveryAndPayment from './pages/user/DeliveryAndPayment'
import OrderConfirm from './pages/user/OrderConfirm'
import OrderComplete from './pages/user/OrderComplete'
import Orders from './pages/user/Orders'
import OrderDetails from './pages/user/OrderDetails'
import AdminLayout from './components/AdminLayout'
import Dashboard from './pages/admin/Dashboard'


import AdminBrandLists from './pages/admin/Brands'
import AdminAddBrand from './pages/admin/AddBrand'
import AdminProductLists from './pages/admin/Products'
import AddProduct from './pages/admin/AddProduct'
import AdminOrderLists from './pages/admin/Order'
import AdminCustomerLists from './pages/admin/Customer'
import AdminAddCustomer from './pages/admin/AddCustomer'
import EditBrand from './pages/admin/EditBrand'
import AdminCategoryLists from './pages/admin/Categories'
import AddCategory from './pages/admin/AddCategory'
import EditCategory from './pages/admin/EditCategory'
import EditProduct from './pages/admin/EditProduct'
import AdminLogin from './pages/admin/auth/AdminLogin'
import ProtectedAdminAuthRoutes from './middleware/ProtectedAdminAuthRoutes'
const MainRouter = () => {
  
  return (
    <Routes>
            <Route  path="/" element={<Layout />}>
                <Route index element={<Home />}/>
                <Route path='/product_details/:id' element={<ProductDetails />} />
                <Route path='/products' element={<Products />} />
                <Route path="/carts" element={<Carts />} />
                <Route path='/favorite' element={<Favorite />} />
                <Route path="/compare_products" element={<CompareProducts />} />
                <Route path='/login' element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/delivery_payment" element={<DeliveryAndPayment />} />
                <Route path='/order_confirm' element={<OrderConfirm />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/order_details/:id" element={<OrderDetails />} />
          
            </Route>
            <Route path='/order_complete' element={<OrderComplete />} />


            {/* Admin Route */}
            <Route path = '/admin/login' element={<AdminLogin />} />
            <Route element={<ProtectedAdminAuthRoutes><AdminLayout /></ProtectedAdminAuthRoutes>}>
                  <Route path='/admin/dashboard' element={<Dashboard />} />
                  <Route path ='/admin/brand/:id' element = {<EditBrand />} />
                  <Route path='/admin/brands' element={<AdminBrandLists />} />
                  <Route path="/admin/categories" element={<AdminCategoryLists />}  />
                  <Route path="/admin/addCategory" element={<AddCategory />} />
                  <Route path ='/admin/categories/:id' element = {<EditCategory />} />
                  <Route  path="/admin/addbrand" element={<AdminAddBrand />}/>
                  <Route path="/admin/products"  element={<AdminProductLists />} />
                  <Route  path='/admin/addproduct' element={<AddProduct />}/>
                  <Route path='/admin/products/:id' element={<EditProduct /> }/>
                  <Route path="/admin/orders" element={<AdminOrderLists />} />
                  <Route path='/admin/customers' element={<AdminCustomerLists />} />
                  <Route path='/admin/addcustomer' element={<AdminAddCustomer />} />
            </Route>
    </Routes>
  )
}

export default MainRouter