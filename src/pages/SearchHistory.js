import React, { useEffect, useState } from 'react'

function SearchHistory(props) {
    const [coinList, setState] = useState([])
    console.log(props.history);
    
    useEffect(() => {
        // if there is no prop passed AND no storage then return
        if(!props.history.location.state && !localStorage.getItem('cList')){
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
        // setState(coin => [...coin, props.location.state.data])
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