import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,
         Switch,
         Redirect,
         Route
} from "react-router-dom";

import  Header  from './components/Header';
import  Footer  from './components/Footer';
import  routes  from './router';

ReactDOM.render(
  <React.StrictMode>
        <Header />
          <BrowserRouter>
          <Switch>
            {routes.map((props, index) => <Route {...props} key={index} />)}
            <Redirect to="/" />
          </Switch>
      </BrowserRouter>
      <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
