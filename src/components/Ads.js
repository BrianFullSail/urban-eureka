import React from 'react';
import image from '../images/freebitcoin.png';
import image2 from '../images/free_bitcoin.png';
import image3 from '../images/coinbase.png';

const Ads = () => {
    return(
        <section style={styles.ads}>
            <a href="https://freebitco.in/?r=11874370"><img src={image} style={styles.image} alt="Free bitcoin ad"/></a>
            <a href="https://freebitco.in/?r=11874370"><img src={image2} style={styles.image} alt="Free bitcoin ad"/></a>
            <a href="https://www.coinbase.com/join/alvara_0n3"><img src={image3} style={styles.image} alt="Join Coinbase ad"/></a>
        </section>
    )
}
export default Ads;

const styles = {
    ads: {
        width: '20%',
        display: 'flex',
        flexDirection: 'column'
    },
    image: {
        width: '100%',
        marginBottom: '1rem',
        borderRadius: '.25rem'
    }
}