import React from 'react'
import Homepage from './pages/Homepage'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Discount from './pages/Discount';


function App() {
  return (
   <div>
     <Router>
        <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/desconto" component={Discount} />
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
