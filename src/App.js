import './App.css';
import Button from './components/Button';
import React from 'react'

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
    <div style={styles.main} id='main'>
      <form name='myForm' onSubmit={addCoin} style={styles.form}>
      <h1>Please enter a crypto currency you would like to search</h1>
      <input placeholder="Enter a Crypto Currency" style={styles.input} id='userSearch'/>
      <Button btnText='Search' />
      </form>
      <div id='info'>
        <p style={styles.output} id='title'></p>
        <p id='price'></p>
      </div>
    </div>
  );
}

export default App;

const styles = {
  main: {
    display: 'flex'
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
  }
}
