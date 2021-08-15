import './App.css';
import Button from './components/Button';
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Nav from './components/Nav'
import coins from './images/cryptocurrency.png'
import bitcoin from './images/blackcoin.png'
import coinstacks from './images/coinstacks.png'

function App() {

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
    <Router>
      <div style={styles.main} id='main'>
        <h1>Cryptocurrency Price Search</h1>
        <div style={styles.pics}>
          <img src={coins} alt='Many different crypto currencys' style={styles.images}/>
          <img src={coinstacks} alt='Many different coins' style={styles.images}/>
          <img src={bitcoin} alt='Bitcoin on black background' style={styles.images}/>
          <Nav />
        </div>
        <form name='myForm' onSubmit={addCoin} style={styles.form}>
          <h2>Please enter a crypto currency you would like to search</h2> 
          <input placeholder="Enter a Crypto Currency" style={styles.input} id='userSearch'/>
          <Button btnText='Search' />
        </form>
        <div id='info'>
          <p style={styles.output} id='title'></p>
          <p id='price'></p>
        </div>
      </div>
    </Router>
  );
}

export default App;

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  form: {
    width: '30%',
    fontSize: '1.6rem',
    margin: '3rem'
  },
  input: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '50px',
    fontSize: '1.6rem',
    textAlign: 'center',
    marginBottom: '2rem'
  },
  output: {
    fontSize: '1.6rem'
  },
  pics: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: '45vh',
    paddingTop: '5rem',
    justifyContent: 'space-around',
    alignItems: 'space-around',
    backgroundColor: '#000'
  },
  images: {
    height: 'calc((100% / 5) * 4)',
    width: '33.3%',
  }
}
