import React, { useEffect, useState } from 'react'

function SearchHistory(props) {
    const [coinList, setState] = useState([])
    console.log(props.history);
    
    useEffect(() => {
        if(!props.history.location.state){
            return
        }
        setState(coin => [...coin, props.location.state.data])
    }, [props]);

    let searchList = coinList.map((element) => {
        return <article key={element.id}style={styles.article2}>
            <img alt='cryptocurrency coin logo' src={element.img} style={{height: '75px'}}/>
            <p style={styles.output}>{element.name}</p>
            <p style={styles.output}>{element.price}</p>
         </article>
    })

    return (
        <section style={styles.body}>
           <div style={styles.main}>
               <h2>Search Results</h2>
               <article id='info' style={styles.article}>
                    <p style={styles.output} id='title'></p>
                    <p style={styles.output} id='price'></p>
               </article>
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