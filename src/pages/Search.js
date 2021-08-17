import React from 'react'
import Button from '../components/Button';
import { withRouter } from 'react-router-dom'

function Search({ history }) {
    async function fetchAPI(){
        const coinGecko = require('coingecko-api');
        const coingeckoclient = new coinGecko();
        const response = await coingeckoclient.coins.fetch(document.myForm.userSearch.value, {});
    
        return response;
    }

    const addCoin = async e => {
        e.preventDefault();

        if(document.myForm.userSearch.value === ""){
            alert("Please enter a valid crypto currency to search")
            return false;
        }
        else{
          const data = await fetchAPI();

          // If not successful
          if(data.code !== 200){
            alert(`${document.myForm.userSearch.value} is not a valid currency! Please enter a valid currency and try again.`)
            return false;
          }

          // Load the SearchHistory page
          history.push('/SearchHistory');
          console.log(data.data.market_data.current_price.usd)

          // toFixed add to zeros after the decimal
          const price = parseFloat(data.data.market_data.current_price.usd).toFixed(2);

          document.getElementById('title').innerHTML = `Current price for ${data.data.name}`;

          // .replace to add the commas
          document.getElementById('price').innerHTML = '$' + price.toString(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
          const image = new Image();
          image.id = 'coinLogo';
          image.src = data.data.image.large;
          image.style.height = '75px';
          document.getElementById('info').style.backgroundColor = '#fff'
          document.getElementById('info').style.boxShadow = '0 0 5px 5px #D6D7DD'

          // Add to the beginning of the element
          document.getElementById('info').insertBefore(image, document.getElementById('info').firstChild)

        }
    }
    
    return (
        <section>
            <form name='myForm' onSubmit={addCoin}  style={styles.form}>
                <h2>Please enter a crypto currency you would like to search</h2> 
                <input placeholder="Enter a Crypto Currency" style={styles.input} id='userSearch'/>
                <Button btnText='Search' />
            </form>
            <div style={styles.examples}>
                <h3>Example Searches</h3>
                <ul style={styles.list}>
                    <li style={styles.item}>Bitcoin</li>
                    <li style={styles.item}>Ethereum</li>
                    <li style={styles.item}>Cardano</li>
                    <li style={styles.item}>Chainlink</li>
                </ul>
                <ul style={styles.list}>
                    <li style={styles.item}>Dogecoin</li>
                    <li style={styles.item}>Lightcoin</li>
                    <li style={styles.item}>Monero</li>
                    <li style={styles.item}>Cosmos</li>
                </ul>
            </div>
        </section>
    )
}

export default withRouter(Search);

const styles = {
    input: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '50%',
        height: '40px',
        fontSize: '1.6rem',
        textAlign: 'center',
        marginBottom: '2rem',
        borderRadius: '.25rem'
    },
    form: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    examples: {
        width: '75vw',
        marginTop: '4rem',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '.25rem',
        fontSize: '1.6rem'
    },
    list: {
        width: '100%',
        display: 'flex',
        alignItems: 'center'
    },
    item: {
        display: 'flex',
        width: 'calc(100%/4)',
        margin: '0 5rem'
    }
}