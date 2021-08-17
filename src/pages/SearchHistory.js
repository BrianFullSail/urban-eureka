import React from 'react'

function SearchHistory() {

    return (
        <section style={styles.body}>
           <div style={styles.main}>
               <h2>Search Results</h2>
               <article id='info' style={styles.article}>
                    <p style={styles.output} id='title'></p>
                    <p style={styles.output} id='price'></p>
               </article>
            </div>
            <div style={styles.main}>
               <h2>Search History</h2>
               <article id='infoH' style={styles.article}>
                    <p style={styles.output} id='titleH'></p>
                    <p style={styles.output} id='priceH'></p>
               </article>
            </div>
        </section>
    )
}

export default SearchHistory;

const styles = {
    body: {
        width: '100vw',
        height: '75vh',
        display: 'flex',
        justifyContent: 'space-around'
    },
    main: {
        width: '35%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '2rem'
    },
    output: {
        fontSize: '1.4rem'
    },
    article: {
        width: '90%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '5rem',
        padding: '1rem',
        borderRadius: '.25rem'
    }
}