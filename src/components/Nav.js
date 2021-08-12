import React from 'react';
import { NavLink } from 'react-router-dom'

const Nav = (props) => {
    return (
        <nav>
            <NavLink to='/Home'>Home</NavLink>
            <NavLink to='/Search'>Search</NavLink>
            <NavLink to='/SearchHistory'>Searh History</NavLink>
        </nav>
    )
}
export default Nav;

const styles = {
    nav: {
        display: 'flex',
        justifyContent: 'space-around'
    }
}