export const addListener = (element, evt, fn) => {
  element.addEventListener(evt, fn)
}

const globalVar = {
  id: 0,
  value: '',
  completed: false
}

export const deleteTodo = (todo, todosList, todos) => {
  const newTodosList = todosList.filter(t => t.id === todo.id)
  const newLi = document.createElement('li')
  newTodosList.forEach(todo => {
    todos.appendChild(newLi)
  })
}

export const addTodo = (todosList, todos, input) => {
  if ((input.value && input.value.length === 0) || (input.target && input.target.value && input.target.value.length === 0)) {
    return
  }
  console.log(input.value.length)
  // console.log(input.target.value.length)
  const deleteButton = document.createElement('button')
  const li = document.createElement('li')
  globalVar.id += 1
  const todo = {
    id: globalVar.id,
    value: globalVar.value,
    completed: false,
    delete: false
  }
  todosList.push(todo)
  todosList.forEach(todo => {
    li.textContent = todo.value
    deleteButton.addEventListener('click', () => deleteTodo(todo, todosList, todos))
    deleteButton.textContent = 'Delete'
    input.value = ''
    li.appendChild(deleteButton)
    todos.appendChild(li)
  })
}

export const updateVal = (todosList, todos, e) => {
  if (e.target.value && e.target.value.length === 0) return
  globalVar.value = e.target.value
  if (e.keyCode === 13) {
    e.target.value = ''
    addTodo(todosList, todos, e)
  }
  return globalVar
}
