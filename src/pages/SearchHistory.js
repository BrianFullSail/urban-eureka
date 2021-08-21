import React, { useEffect, useState } from 'react'
import Button from '../components/Button';

function SearchHistory(props) {
    const [coinList, setState] = useState([])
    console.log(props.history);
    
    useEffect(() => {
        // set the button to enabled or disaabled based on exixtance of local storage
        document.getElementById('btn').disabled = localStorage.getItem('cList') ? false : true

        getColor()

        // if there is no prop passed AND no storage then return
        if(!props.history.location.state && !localStorage.getItem('cList')){
            document.getElementById('btn').disabled = localStorage.getItem('cList') ? false : true
            return
        }
        //if there no prop passed but there is storage then update the state to display the storage
        else if(localStorage.getItem('cList')){
            let cList = JSON.parse(localStorage.getItem('cList'))
            setState(cList)
            // if there was a prop passed
            if(props.history.location.state){
                let newList = ([props.location.state.data, ...cList])
                localStorage.setItem('cList', JSON.stringify(newList))
            }
        }
        // if there was a prop passed and there was no list then create the list after pushing the prop
        else{
            let cList = []
            if(props.history.location.state){
                cList.push(props.location.state.data)
                localStorage.setItem('cList', JSON.stringify(cList))
            }
        }

        document.getElementById('btn').disabled = localStorage.getItem('cList') ? false : true

        getColor();

        // setState(coin => [...coin, props.location.state.data])
    }, [props]);

    // map through the coinList array and display each element
    let searchList = coinList.map((element) => {
        return <article key={element.id}style={styles.article2}>
            <img alt='cryptocurrency coin logo' src={element.img} style={{height: '75px'}}/>
            <p style={styles.output}>{element.name}</p>
            <p style={styles.output}>{element.price}</p>
         </article>
    })

    // clear the coinList array and local storage
    const clearHistory = () => {
        localStorage.clear();
        setState([])
        document.getElementById('btn').disabled = true
        if(document.getElementById('coinLogo')){
            const coinLogo = document.getElementById('coinLogo')
            document.getElementById('info').removeChild(coinLogo)
        }
        
        document.getElementById('title').innerText = ''
        document.getElementById('price').innerText = ''
        document.getElementById('info').style.cssText = `
        width: 90%;
        display: flex;
        justifyContent: space-around;
        alignItems: center;
        height: 5rem;
        padding: 1rem;
        borderRadius: .25rem;
        `

        getColor()
    }

    // set the styling of the clear history button
    const getColor = () => {
        if(document.getElementById('btn').disabled === true){
            document.getElementById('btn').style.cssText = `
            height: 50px;
            background-color: #cccecf;
            color: #fff;
            padding: .5rem 3rem;
            border-radius: .5rem;
            font-size: 1.6rem;
            margin-top: 1.5rem;
            cursor: auto
        `;
        }
    
        else{
            document.getElementById('btn').style.cssText = `
            height: 50px;
            background-color: #022b3a;
            color: #fff;
            padding: .5rem 3rem;
            border-radius: .5rem;
            font-size: 1.6rem;
            margin-top: 1.5rem;
            cursor: pointer
        `;
        }

    }

    return (
        
        <section style={styles.body}>
           <div id='mainInfo' style={styles.main}>
               <h2>Search Results</h2>
               <article id='info' style={styles.article}>
                    <p style={styles.output} id='title'></p>
                    <p style={styles.output} id='price'></p>
               </article>
               <Button btnText='Clear History' onClick={clearHistory} />
            </div>
            <div style={styles.main}>
               <h2>Search History</h2>
               {searchList}
            </div>
        </section>
    )
}

export default SearchHistory;

const styles = {
    body: {
        width: '100vw',
        height: '100%',
        backgroundColor: '#EBEBED',
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
    },
    article2: {
        width: '90%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '5rem',
        padding: '1rem',
        borderRadius: '.25rem',
        backgroundColor: '#fff',
        boxShadow: '0 0 5px 5px #D6D7DD',
        marginBottom: '1.5rem'
    }
}