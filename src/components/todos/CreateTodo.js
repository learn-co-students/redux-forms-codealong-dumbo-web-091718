import React, { Component } from 'react'

import { connect } from 'react-redux'
import { addIt } from '../../Actions/actions'

class CreateTodo extends Component {
  state = {
    title: "",
    description: ""
  }

  changeHandler =(e)=> {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit =(e)=> {
    console.log(this.state)
    e.preventDefault()
    this.props.addIt(this.state)
    this.setState({
      title: "",
      description: ""
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={(e)=>this.handleSubmit(e)}>
          <input onChange={this.changeHandler} name="title" value={this.state.title}/>
          <textarea onChange={this.changeHandler} name="description" value={this.state.description} />
          <button type="submit">Add ToDo</button>
        </form>
      </div>
    )
  }
}

export default connect(null, { addIt })(CreateTodo);
