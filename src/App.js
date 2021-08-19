import './App.css';
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Nav from './components/Nav'
import coins from './images/cryptocurrency.png'
import bitcoin from './images/blackcoin.png'
import coinstacks from './images/coinstacks.png'
import Routes from './components/Routes'

function App() {

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
        <main>
          <Routes />
        </main>
      </div>
    </Router>
  );
}

export default App;

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#EBEBED',
    height: '100%'
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
    backgroundColor: '#000',
    boxShadow: '0 0 5px 5px #D6D7DD'
  },
  images: {
    height: 'calc((100% / 5) * 4)',
    width: '33.3%',
  },
  body: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: '2rem'
  }
}
