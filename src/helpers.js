export const addListener = (element, evt, fn) => {
  element.addEventListener(evt, fn)
}

const globalVar = {
  id: 0,
  value: '',
  completed: false
}

export const deleteTodo = (todo, todosList, todos) => {
  const newTodosList = todosList.filter(t => t.id !== todo.id)
  const newLi = document.createElement('li')
  newTodosList.forEach(todo => {
    todos.appendChild(newLi)
  })
}

const completedTodo = (todo, todosList, e) => {
  if (e.target.checked) {
    e.target.parentNode.className = 'completed'
  } else {
    e.target.parentNode.className = ''
  }
  todosList = todosList.map(t => {
    return t.id === todo.id ? { ...t, completed: e.target.checked } : t
  })
  return todosList
}

export const addTodo = (todosList, todos, input) => {
  if (input.target !== undefined && input.target.value !== undefined && input.target.value.length === 0) {
    return
  } else if (input.value !== undefined && input.value.length === 0) {
    return
  }

  const deleteButton = document.createElement('button')
  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
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
    checkbox.addEventListener('click', (e) => completedTodo(todo, todosList, e))
    deleteButton.addEventListener('click', () => deleteTodo(todo, todosList, todos))
    deleteButton.textContent = 'Delete'
    input.value = ''
    li.appendChild(checkbox)
    li.appendChild(deleteButton)
    todos.appendChild(li)
  })
}

export const updateVal = (todosList, todos, e) => {
  if (e.target.value && e.target.value.length === 0) return
  globalVar.value = e.target.value
  if (e.keyCode === 13) {
    addTodo(todosList, todos, e)
    e.target.value = ''
  }
  return globalVar
}
