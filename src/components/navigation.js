import React, { Fragment } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Route, Link } from "react-router-dom";

import image from '../resources/image.png'


export function Navigation({allTabs=['/', '/global', '/indiastatewise']}) {
  return (
    <div className='navigation'>
      <div className='navigation__img'>
        <Link to="/">
          <img src={image} alt='Logo' height='30px' width='inherit' />
        </Link>
      </div >
        <Route
          path="/"
          render={({ location }) => (
            <Fragment>
              <Tabs TabIndicatorProps={{style: {backgroundColor: "white"}}} value={location.pathname}>
                <Tab label="Global" value="/global" component={Link} to={allTabs[1]} />
                <Tab label="India" value="/" component={Link} to={allTabs[0]} />
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
  );
}
