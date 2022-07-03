import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../container/Home'
import ListContainer from '../container/ListContainer'
import Login from '../container/Login'
import PrivateRoute from './PrivateRoute'

const Router = () => {


    return(
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/todolist' element={<PrivateRoute/>}>
                    <Route path='' element={<ListContainer/>}></Route>
                </Route>
                <Route path='/login' element={<Login/>}></Route>
            </Routes>
        </BrowserRouter>

    )
}

export default Router