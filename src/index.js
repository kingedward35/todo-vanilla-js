import { addListener, addTodo, deleteTodo, updateVal } from './helpers'

const input = document.querySelector('input')
const addButton = document.querySelector('.add')
const todos = document.querySelector('.todos')
const todosList = []

input.placeholder = 'Add new task'

addListener(input, 'keyup', (e) => updateVal(todosList, todos, e))
addListener(addButton, 'click', (e) => addTodo(todosList, todos, input))
