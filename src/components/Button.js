import React from 'react';

const Button = props => {
    return(
        <button style={styles.btn}>
            {props.btnText}
        </button>
    )
}
export default Button;

const styles = {
    btn: {
        width: '100%',
        height: '50px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#022b3a',
        color: 'white',
        padding: '.5rem',
        borderRadius: '.5rem',
        fontSize: '1.6rem'
    }
}