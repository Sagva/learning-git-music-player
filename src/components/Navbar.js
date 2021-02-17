import { NavLink } from 'react-router-dom'
import { nav } from '../styles/Navbar.module.css'

function Navbar() {
    return(
        <nav className={nav}>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
        </nav>
    )
}

export default Navbar