import { Link } from "react-router-dom";
import { BarNav } from '../style/style';

const Navbar = () => {


    return (
        <BarNav>
            <Link to='/'>Home</Link>
            <Link to='/todolist'>TodoList</Link>
            <Link to='/login'>Login</Link>
        </BarNav>
        
       
    )   
}

export default Navbar;