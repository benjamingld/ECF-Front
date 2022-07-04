import { Link } from "react-router-dom";
import { NavBar } from '../style/style'

const Navbar = () => {

    return (
        <NavBar>
            <Link to='/'>Home</Link>
            <Link to='/todolist'>TodoList</Link>
            <Link to='/login'>Login</Link>
        </NavBar>


    )
}
export default Navbar;