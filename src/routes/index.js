import React from 'react';
import {Switch,Route} from 'react-router-dom';
import TextView from '../views/testView';
import Nav2 from '../views/nav2';



const Index=()=>{
    return(
        <Switch>
            <Route component={TextView} exact path={["/home","/"]} />
            <Route component={Nav2} exact path={['/nav2']}/>
        </Switch>
    )

}

export default Index;