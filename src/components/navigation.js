import React, { Fragment } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Route, Link } from "react-router-dom";

import image from '../resources/image.png'


export function Navigation() {
  const allTabs = ['/', '/india', '/indiastatewise'];

  return (
    <div style={{backgroundColor:"aqua",width:'100%',borderRadius:'10px'}}>
      <div style={{padding:'2px'}}>
        <Link to="/">
          <img src={image} alt='Logo' height='30px' width='inherit' />
      </Link>
      </div>
    
      <div className="Navigation">
        <Route
          path="/"
          render={({ location }) => (
            <Fragment>
              <Tabs value={location.pathname}>
                <Tab label="Global" value="/" component={Link} to={allTabs[0]} />
                <Tab label="India" value="/india" component={Link} to={allTabs[1]} />
                <Tab
                  value="/indiastatewise"
                  label="India State Wise"
                  component={Link}
                  to={allTabs[2]}
                />
              </Tabs>
            </Fragment>
          )}
        />
      </div>
    </div>
  );
}
