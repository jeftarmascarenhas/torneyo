import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './containers/App';
import Home from './components/Home';
import Inbox from './components/Inbox';
import Equipe from './containers/equipe/Equipe';
import EquipeNew from './containers/equipe/EquipeNew';
import EquipeShow from './containers/equipe/EquipeShow';
import EquipeSearch from './containers/equipe/EquipeSearch';


export default (
    <Route path="/" component={App} title="TorneyoApp">
        <Route path="/home" component={Home}/>
        <Route path="/inbox" component={Inbox}/>
        <Route path="/equipe" component={Equipe}>
            <IndexRoute component={EquipeSearch}/>
            <Route path="new" component={EquipeNew}/>
            <Route path="update/:id" component={EquipeShow}/>
        </Route>
    </Route>
);