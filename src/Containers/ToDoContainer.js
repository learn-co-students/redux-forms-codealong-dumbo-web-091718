import React from 'react'
import { Component } from 'react'
import { didIt } from '../Actions/actions'
import { connect } from 'react-redux'
import ToDo from '../components/todos/Todo'

class ToDoContainer extends Component {
  render(){
    const allTheToDos = this.props.todos.map(todo => {
      return (
        <ToDo
        todo={todo}
        didIt={this.props.didIt}
        />
      )
    })
    return(
      <div>
        {allTheToDos}
      </div>
    )
  }
}

const mapStateToProps =(state)=> {
  return ({
    todos: state.todos
  })

}

export default connect(mapStateToProps, { didIt })(ToDoContainer)
