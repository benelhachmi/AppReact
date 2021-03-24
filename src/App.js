import React  from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import List from './component/contact/List'
import Header from './component/Header'
import {Provider} from './context'
import AddContact from './component/contact/AddContact'
import Apropos from './component/pages/Apropos'
import Erreur from './component/pages/Erreur'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
function App () {

    return (
      <Provider>
        <Router>
      <div className="App">
        <Header/>
        <div className="container">
          <Switch>
        <Route exact path="/ajoute" component={AddContact}/>

         <Route exact path="/liste" component={List}/>
         <Route exact path="/" component={List}/>

         <Route exact path="/apropos" component={Apropos}/>
         <Route component={Erreur}/>

</Switch>
        </div>


      </div>
      </Router>
      </Provider>
    );
  }
  

  
export default App;
