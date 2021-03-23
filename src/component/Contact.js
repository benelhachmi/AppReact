import React, { Component } from 'react'

export default class Contact extends Component {
    state={
        show:true
    }
    montrecontat = () =>{
        this.setState({
            show :!this.state.show
        })
    }
    suprimeContact= () =>{
this.props.supprimeClick()
    }
    render(props) {
        return (
          
             <div className="card card-body mb-3 text-center">
               <h4>{this.props.nom}&nbsp;<i style={{cursor:'pointer'}}className="fa fa-sort-down"
               onClick={this.montrecontat}
               ></i>
               <i className="fa fa-times" style={{cursor:'pointer',float:'right',color:'red'}}
                              onClick={this.suprimeContact}

               ></i>
               </h4>
               {this.state.show ? ( <ul className="card card body  mb-3">
                   <li className="list-group-item">
                       Email : {this.props.email}
                   </li>
                   <li className="list-group-item">
                       Tétéphone : {this.props.tel}
                   </li>

               </ul>) : null}
              
             </div>
        )
    }
}
