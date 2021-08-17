import React from 'react';

const ListItems = props => {
    return(
        <article key={props.id} style={styles.article}>
            <div style={styles.title}>
                <img src={props.val.cIcon} alt="Coin icon" style={styles.icons}/>
                <p style={styles.paragraph}>{props.val.cTitle}</p>
                <p style={styles.paragraph}>{props.val.cPrice}</p>
            </div>
        </article>
    )
}
export default ListItems;

const styles = {
    article: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginBottom: '1rem',
        backgroundColor: '#fff',
        height: '25vh',
        padding: '1rem'
    },
    icons: {
        display: 'block',
        width: '45px'
    },
    title: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    paragraph: {
        width: '40%'
    }
}