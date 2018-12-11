import React from 'react'

const ToDo =(props)=> {
  return (
    <div>
      <p>{props.todo.title}</p>
      <p>{props.todo.description}</p>
      <button onClick={()=>props.didIt(props.todo)} type="button">Done Did It</button>
    </div>
  )
}

export default ToDo
