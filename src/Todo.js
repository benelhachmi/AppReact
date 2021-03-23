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
    rederTodo = () => {
       
    }
    render() {
        return (
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
        )
    }
}
