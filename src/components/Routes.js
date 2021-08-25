import { Redirect, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Search from '../pages/Search'
import SearchHistory from '../pages/SearchHistory'

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}>{ <Redirect to="/Home" /> }</Route> 
            <Route path='/Home' component={Home} />
            <Route path='/Search' component={Search} />
            <Route path='/SearchHistory' component={SearchHistory} />
        </Switch>
    );
}

export default Routes;