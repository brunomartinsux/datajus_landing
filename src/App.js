import React from 'react'
import Homepage from './pages/Homepage'
import Discount from './pages/Discount';
import Register from './pages/SignIn'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ConfirmEmail from './pages/Confirmation';



function App() {
  return (
   <div>
     <Router>
        <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/desconto" component={Discount} />
        <Route exact path="/cadastro" component={Register} />
        <Route exact path="/cadastro/:partnerName" component={Register} />
        <Route exact path="/confirmacao" component={ConfirmEmail} />
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
