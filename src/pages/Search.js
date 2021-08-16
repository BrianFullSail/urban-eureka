import React from 'react'
import Button from '../components/Button';

function Search() {
    async function fetchAPI(){
        const coinGecko = require('coingecko-api');
        const coingeckoclient = new coinGecko();
        const response = await coingeckoclient.coins.fetch(document.myForm.userSearch.value, {});
    
        return response;
    }

    const addCoin = async e => {
        e.preventDefault();
        if(document.myForm.userSearch.value === "")
        {
          alert("Please enter a valid crypto currency to search")
          return false;
        }
        else{
          const data = await fetchAPI();
        
          if(data.code !== 200)
          {
            alert(`${document.myForm.userSearch.value} is not a valid currency! Please enter a valid currency and try again.`)
            return false;
          }
    
          document.getElementById('title').innerHTML = `The current price for ${data.data.name} is:`;
          document.getElementById('price').innerHTML = data.data.market_data.current_price.usd;
    
          const image = new Image();
          image.id = 'coinLogo';
          image.src = data.data.image.large;
          image.style.height = '200px';
          image.style.marginTop = '2rem';
          
          if(document.getElementById('coinLogo')){
            const lastImage = document.getElementById('info').lastChild;
    
            document.getElementById('info').removeChild(lastImage);
            document.getElementById('info').appendChild(image);
          }
          else{
            document.getElementById('info').appendChild(image);
          }
       
          e.target.reset();
        }
      }
    
    return (
        <section>
            <form name='myForm' onSubmit={addCoin}  style={styles.form}>
                <h2>Please enter a crypto currency you would like to search</h2> 
                <input placeholder="Enter a Crypto Currency" style={styles.input} id='userSearch'/>
                <Button btnText='Search' />
            </form>
            {/* <div id='info'>
                <p style={styles.output} id='title'></p>
                <p id='price'></p>
            </div> */}
            <div style={styles.examples}>
                <h3>Example Searches</h3>
                <ul style={styles.list}>
                    <li style={styles.item}>Bitcoin</li>
                    <li style={styles.item}>Ethereum</li>
                    <li style={styles.item}>Caradno</li>
                    <li style={styles.item}>Chainlink</li>
                </ul>
                <ul style={styles.list}>
                    <li style={styles.item}>Dogecoin</li>
                    <li style={styles.item}>Lightcoin</li>
                    <li style={styles.item}>Amp</li>
                    <li style={styles.item}>Cosmos</li>
                </ul>
            </div>
        </section>
    )
}

export default Search;

const styles = {
    body: {
        width: '100%',
        height: '75vh',
        fontSize: '1.6rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
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
        height: '25vh',
        marginTop: '3rem',
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
        width: 'calc(100%/4)',
        margin: '0 5rem'
    }
}