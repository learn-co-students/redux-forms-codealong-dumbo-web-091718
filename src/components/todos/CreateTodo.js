import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';

class CreateTodo extends Component {
  constructor() {
    super();
    
    this.state = {text: ''};
  
  }
  
  handleOnChange(e) {
    this.setState({
      text: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state)
    this.props.dispatch({ type: 'ADD_TODO', payload: this.state })
  }
  
  render() {
    return(
    <Fragment>
        <form onSubmit={ e => this.handleSubmit(e) }>
          <p>
            <label>add todo</label>
            <input type="text" onChange={(e) => this.handleOnChange(e)} value={this.state.text}/>
          </p>
          <input type="submit" />      
        </form>
      </Fragment>
      );
  }
};

export default connect()(CreateTodo);