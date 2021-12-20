import React from 'react'
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom'
import Home from '../views/Home'
import Layout from './Layout'
import TableUser from '../views/TableUser'
import Login from '../views/Login'
import PrivateRoute from './PrivateRoute'
import AuthProvider from '../context/AuthProvider'
import UserProvider from '../context/UserProvider'



function Rutas() {
    return (
        <>
           <Router>
           <AuthProvider>
             <UserProvider>
               <Routes>
                     <Route path="/" element={<PrivateRoute path="/login" component={<Layout />} />}>
                       <Route index element={<Home />} />
                       <Route path="user" element={<TableUser />} />
                     </Route>
                     <Route path="/login" element={<Login />} /> 
               </Routes>
             </UserProvider>
           </AuthProvider>
           </Router>
        </>
    )
}

export default Rutas
