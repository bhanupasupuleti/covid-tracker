import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import {Navigation} from './components/navigation';

import './App.scss'


const allTabs = ['/', '/india', '/indiastatewise'];
class App extends React.Component{
  render(){
    return(
      <div>
        <BrowserRouter>
            <Navigation/>
            <Switch>
                <Route path={allTabs[1]} render={() => <div>Tab 2</div>} />
                <Route path={allTabs[2]} render={() => <div>Tab 3</div>} />
                <Route path={allTabs[0]} render={() => <div>Tab 1</div>} />
              </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
export default App