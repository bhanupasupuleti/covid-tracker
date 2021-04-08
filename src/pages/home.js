import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Global from '../components/global';
import India from '../components/india';
import IndiaStateWise from '../components/indiastateWise';
class Home extends React.Component{
    state={
        allTabs:['/', '/global', '/indiastatewise']
    }
    render(){
        return(
        <div className='Home'>
            <Switch>
                <Route exact path={this.state.allTabs[0]} render={() => <div><India /></div>} />
                <Route path={this.state.allTabs[1]} render={() => <div><Global /></div>} />
                <Route path={this.state.allTabs[2]} render={() => <div><IndiaStateWise /></div>} />
              </Switch>
        </div>
        )
    }
}

export default Home