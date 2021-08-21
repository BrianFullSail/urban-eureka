import React from 'react'
import Ads from '../components/Ads'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <section style={styles.body}>
            <article style={styles.news}>
                <img alt='Bitcoin token' style={styles.images} src='https://crypto.snapi.dev/images/v1/z/n/bitcoin-3374479-1920-2-51195.jpg'/>

                <div style={styles.newsArticle}>
                    <h2>Welcome to Cryptocurrency Price Search</h2>
                    <p>On this site you will be able to search for the price of nearly 2k different cryptocurrencies on the market. Head over to the <Link to={'./Search'} style={styles.links}>search</Link> page to enter a search or the <Link to={'./SearchHistory'} style={styles.links}>search history</Link> page to see the history of your searches. We plan to add more cryptocurrencies as they enter the market, and in the future more data will be available to the current searches.</p>
                    <p>Bitcoin currently leads the market being the most popular and the highest price point. Ethereum is closing in fast on Bitcoins popularity and may some day even lead on price point. Today there are many other cryptocurrencies such as Caradno and Chainlink gaining popularity as their prices sore. Anyone new to the market would be wise to invest in anything related to Ethereum as it covers many of the other currencies on the market that use the Ethereum blockchain.</p>
                </div>
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
        flexDirection: 'column',
        width: '75%',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: '.25rem',
        boxShadow: '0 0 5px 5px #D6D7DD',

    },
    images: {
        width: '100%',
        height: '100%',
        borderRadius: '.25rem .25rem 0 0',
        objectFit: 'cover'

    },
    newsArticle: {
        marginLeft: '2rem',
        marginRight: '2rem',
        marginBottom: '2rem',
    },
    links: {
        color: '#1f7a8c',
        textDecoration: 'none',
    }
}