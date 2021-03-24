import React, { Component } from 'react'
import {Consumer } from '../../context'
export default class Contact extends Component {
    componentDidUpdate(){
        console.log('mise a jour')
    }
    state={
        show:false
    }
    montrecontat = () =>{
        this.setState({
            show :!this.state.show
        })
    }
    supprimeContact = (id, dispatch) => {  
        dispatch({type: 'DELETE_CONTACT', payload: id})
      }
  
    render() {

        return (
          <Consumer>
          {value => {
            return (
 <div className="card card-body mb-3 text-center">
 <h4>{this.props.nom}&nbsp;<i style={{cursor:'pointer'}}className="fa fa-sort-down"
 onClick={this.montrecontat}
 ></i>
 <i className="fa fa-times" style={{cursor:'pointer',float:'right',color:'red'}}
                onClick={() => this.supprimeContact(this.props.id, value.dispatch)}></i>
 </h4>
 {this.state.show ? ( <ul className="card card body  mb-3">
     <li className="list-group-item">
         Email : {this.props.email}
     </li>
     <li className="list-group-item">
         Tétéphone : {this.props.tel}
     </li>

 </ul>) : null}

</div> )
              }}
            
             </Consumer>
        );
    }
}
