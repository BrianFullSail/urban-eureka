import React from 'react'
import Ads from '../components/Ads';

function Home() {
    return (
        <section style={styles.body}>
          <article style={styles.news}>
            <p> sample here</p>
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
        alignItems: 'center',
        width: '75%',
        backgroundColor: 'grey'
    }
}