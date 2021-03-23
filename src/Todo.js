import React, { Component } from 'react'

export default class Todo extends Component {
    state={
        element :'',
        items :[]
    }
    onSubmi =(e) =>{
        e.preventDefault();
        this.setState({
            element:'',
            items:[...this.state.items,{element:this.state.element}]
        })
    }
    onChange = (e) => {
this.setState({
    [e.target.name] : e.target.value
})
//console.log(this.state.element)
    }
    deletItem = (index) =>{
const arr = this.state.items.filter(e =>e.index==!index)
this.setState({items:arr})
    }
    rederTodo = () => {
       return this.state.items.map((item,index) =>{
           return (
               <div className="card mb-3" key={index}>
                   <div className="card-body">
                       <h4>{item.element}
                       <i className="fa fa-times"
                       style={{cursor:'pointer',color:'red',float:'right'}}
                      onClick={() => this.deletItem(index)}
                      ></i>
                       </h4>
                   </div>
               </div>
           )
       })
    }
    render() {
        return (
            <React.Fragment>
            <div className="card my-3">
                <div className="card-header">To Do List</div>
<div className="card-body">
<form  onSubmit={this.onSubmi}>
      <div className="form-group">
        <label htmlFor="element">Chose a faire</label>
        <input type="text"
        className="form-control form-control-lg"
        name="element"
        onChange={this.onChange}
        value={this.state.element}
        />
    </div>
    <button className="btn btn-primary btn-block">Ajouter une chose a faire</button>
</form>

</div>
            </div>
            {this.rederTodo()}
          </React.Fragment>
        )
    }
}
