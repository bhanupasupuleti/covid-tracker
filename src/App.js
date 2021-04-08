import React from 'react';
import {Route, BrowserRouter } from "react-router-dom";
import {Navigation} from './components/navigation';

import './App.scss'
import Home from './pages/home';
// import {allPropsHoc} from './HOC/hightordercomponents'
class App extends React.Component{
  render(){
    return(
      <div className='App'>
        <BrowserRouter>
        <div>
          <Route path="/" component={Navigation} />
          <Route path="/" component={Home} />
        </div>
        </BrowserRouter>
      </div>
    )
  }
}
export default App