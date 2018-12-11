import uuid from 'uuid'
export default function manageTodo(state = {todos: []}, action) {

  switch(action.type){
    case "DID_IT":
    let newArr = state.todos.filter(todo => todo.id !== action.todoThing.id)
    console.log(action)
      return {
        todos: newArr
      }
    case "ADD_IT":
      let newObj = Object.assign({}, action.todoThing, {id: uuid()})
      return {
        ...state,
        todos: [...state.todos, newObj]
      }
    default:
      return state;
  }


}
