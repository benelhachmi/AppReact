import React, { Component } from 'react'
import Contact from './Contact'
export default class List extends Component {
    state={
        contacts: [
            {
                id:1,
                nom : 'fatima',
                email:'fatima@gmail.com',
                tel: "555-555-555"
            },
            {
                id:2,
                nom : 'fatima',
                email:'fatima@gmail.com',
                tel: "555-555-555"
            },
            {
                id:3,
                nom : 'fatima',
                email:'fatima@gmail.com',
                tel: "555-555-555"
            }
        ]
    }
    supprime = (id) =>{
const nvContacts = this.state.contacts.filter(e =>
    e.id !==id)
    this.setState({
        contacts :nvContacts
    })
    }
    render() {
        return (
          <React.Fragment>
               {this.state.contacts.map(contact=>(
                   <Contact
                   key={contact.id}
                   nom ={contact.nom}
                   email ={contact.email}
                   tel ={contact.tel}
                   supprimeClick={() => this.supprime(contact.id)}
                   />
               ))}
</React.Fragment>   
     )
    }
}
