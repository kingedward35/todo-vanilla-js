const input = document.querySelector('input')
const addButton = document.querySelector('.add')
const todos = document.querySelector('.todos')
const todosList = []
const globalVar = {
  id: 0,
  value: ''
}

const deleteTodo = todo => {
  const newTodosList = todosList.filter(t => t.id === todo.id)
  const newLi = document.createElement('li')
  newTodosList.forEach(todo => {
    todos.appendChild(newLi)
  })
}

const updateVal = e => {
  if (e.target.value.length === 0) return
  globalVar.value = e.target.value
  if (e.keyCode === 13) {
    addTodo(e)
  }
  return globalVar
}

const addTodo = e => {
  if (input.value.length === 0) return
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
    deleteButton.addEventListener('click', () => deleteTodo(todo))
    deleteButton.textContent = 'Delete'
    input.value = ''
    li.appendChild(deleteButton)
    todos.appendChild(li)
  })
}

input.addEventListener('keyup', updateVal, false)
addButton.addEventListener('click', addTodo)
