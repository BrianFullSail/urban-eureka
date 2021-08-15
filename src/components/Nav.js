import React from 'react';
import { NavLink } from 'react-router-dom'

const Nav = (props) => {
    return (
        <nav style={styles.nav}>
            <NavLink style={styles.links} activeStyle={styles.activeLink} to='/Home'>Home</NavLink>
            <NavLink style={styles.links} activeStyle={styles.activeLink} to='/Search'>Search</NavLink>
            <NavLink style={styles.links} activeStyle={styles.activeLink} to='/SearchHistory'>Searh History</NavLink>
        </nav>
    )
}
export default Nav;

const styles = {
    nav: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        height: '20%'
    },
    links: {
        color: '#1f7a8c',
        textDecoration: 'none',
    },
    activeLink: {
        color: 'cyan',
        textDecoration: 'underline'
    }
}