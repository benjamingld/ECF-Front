import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TabListContainer from "../container/TabListContainer";
import Home from "../container/Home";
import Login from "../container/Login";
import Navbar from '../components/Navbar';

 
const Router = () => {

    return(
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/todolist' element={<TabListContainer/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
            </Routes>
        </BrowserRouter>

        
    )
}

export default Router;