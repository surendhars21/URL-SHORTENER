import React from 'react'
import Login from './Login'
import Signup from './Signup'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Dashboard from "./Dashboard";
import YourUrl from './YourUrl';
import Links from './Links';
const Home = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route element={<Login/>} path='/' /> 
            <Route element={<Signup/>} path='/signup' /> 
            <Route element={<Dashboard/>} path='/dashboard/:id' /> 
            <Route element={<YourUrl/>} path='/yoururl/:id' /> 
            <Route element={<Links/>} path='/:link' /> 
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Home