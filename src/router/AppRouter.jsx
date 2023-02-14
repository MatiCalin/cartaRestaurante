import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ErrorScreen } from '../404/pages/ErrorScreen'
import { AdminScreen } from '../admin/pages/AdminScreen'
import { LoginScreen } from '../auth/pages/LoginScreen'
import { RegisterScreen } from '../auth/pages/RegisterScreen'
import { ProtectedRoute } from '../components/ProtectedRoute'
import { HomeScreen } from '../user/pages/HomeScreen'
import { MenuScreen } from '../user/pages/MenuScreen'


export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/login' element={<LoginScreen/>} />
            <Route path='/register' element={<RegisterScreen/>} />
                <Route path='/home' element={<HomeScreen/>} />
            <Route element={<ProtectedRoute/>}>
                <Route path='/menu' element={<MenuScreen/>} />
            </Route>
            <Route path='/administration' element={<AdminScreen/>} />
            <Route path='/*' element={<ErrorScreen/>} />
            
        </Routes>
    </BrowserRouter>
  )
}
