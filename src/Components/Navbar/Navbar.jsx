import { NavLink } from 'react-router-dom';
import './navbar.css'
const Navbar = () => {
    return (
        <div>
            <h2 className='text-3xl'>Navbar</h2>
            <nav className='text-lg'>
                <NavLink to="/" >Home</NavLink>
                <NavLink  to ="/posts">Posts</NavLink>
                <NavLink  to="/users">Users</NavLink>
                <NavLink  to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                
            </nav>
        </div>
    );
};

export default Navbar;