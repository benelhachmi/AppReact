import React  from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import List from './component/contact/List'
import Header from './component/Header'
import {Provider} from './context'
import AddContact from './component/contact/AddContact'
function App () {

    return (
      <Provider>
      <div className="App">
        <Header/>
        <div className="container">
          <AddContact/>
        <List/>
        </div>


      </div>
      </Provider>
    );
  }
  

  
export default App;
