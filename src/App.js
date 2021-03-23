import React  from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import List from './component/List'
import Header from './component/Header'
import {Provider} from './context'
function App () {

    return (
      <Provider>
      <div className="App">
        <Header/>
        <div className="container">
        <List/>
        </div>


      </div>
      </Provider>
    );
  }
  

  
export default App;
