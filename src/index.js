const app = document.getElementById('app')
const input = document.createElement('input')
const button = document.createElement('button')
const ul = document.createElement('ul')
const globalVar = {}

const addTodo = e => {
  const li = document.createElement('li')
  input.value = ''
  li.textContent = globalVar.inputVal
  ul.appendChild(li)
}

const updateVal = e => {
  globalVar.inputVal = e.target.value
  if (e.keyCode === 13) {
    addTodo(e)
  }
  return globalVar
}

input.addEventListener('keyup', updateVal, false)
button.textContent = 'Add'
button.addEventListener('click', addTodo)

app.appendChild(input)
app.appendChild(button)
app.appendChild(ul)
