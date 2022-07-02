import ListContainer from "../container/ListContainer"
import Home from "../container/Home"
import Login from "../container/Login"

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from "../components/Navbar"



const Router = () => {

    return(
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/todolist' element={<ListContainer/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </BrowserRouter>
        
        
    )
}

export default Router