import React from 'react'
import Ads from '../components/Ads';

function Home() {
    return (
        <section style={styles.body}>
          <article style={styles.news}>
            <h2> Sample here</h2>
          </article>
           <Ads />
        </section>
    )
}

export default Home;

const styles = {
    body: {
        width: '75vw',
        display: 'flex',
        justifyContent: 'space-between',
        margin: '4rem'
    },
    news: {
        display: 'flex',
        width: '75%',
        backgroundColor: '#fff',
        paddingLeft: '1rem',
        PaddingRight: '1rem',
        borderRadius: '.25rem',
        boxShadow: '0 0 5px 5px #D6D7DD'
    }
}