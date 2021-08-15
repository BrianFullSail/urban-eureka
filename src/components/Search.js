import React from 'react';
import { MdSearch } from 'react-icons/md';

const Search = props => {
    return(
        <form style={styles.search} onSubmit={props.searchMe}>
            <button style={styles.button}><MdSearch size="20px" /></button>
            <input placeholder="Search" style={styles.input}/>
        </form>
    )
}
export default Search;

const styles = {
    search: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '40%'
    },
    input: {
        width: '100%',
        border: 'none',
        borderRadius: '.25rem'
    },
    button: {
        border: 'none',
        background: 'none'
    }
}