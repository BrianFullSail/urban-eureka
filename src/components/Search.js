import React from 'react';

const Search = props => {
    return(
        <form style={styles.search} onSubmit={props.searchMe}>
            <button style={styles.button}></button>
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
        width: '100%'
    },
    input: {
        width: '40%',
        border: 'none',
        borderRadius: '.25rem'
    },
    button: {
        border: 'none',
        background: 'none'
    }
}