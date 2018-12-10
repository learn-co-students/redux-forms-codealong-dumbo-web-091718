import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {

  state = {
    text: ""
  }

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitHandler = event => {
    event.preventDefault();
    this.props.addToDo(this.state);
    this.setState({
      text: ""
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.submitHandler}>
          <input type="text" name="text" value={this.state.text} onChange={this.changeHandler} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

  const mapDispatchToProps = dispatch => {
    return {
      addToDo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
    }
  }



export default connect(null, mapDispatchToProps)(CreateTodo);
