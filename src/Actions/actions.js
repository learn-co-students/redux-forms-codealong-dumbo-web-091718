

export const didIt =(toDoObj)=> {
  return({
    type:"DID_IT",
    todoThing: toDoObj
  })
}

export const addIt =(toDoObj)=> {
  return({
    type:"ADD_IT",
    todoThing: toDoObj
  })
}
