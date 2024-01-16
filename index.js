const root = document.getElementById('root')
root.className = ('root')

const header = document.createElement('header')
header.className = ('header')

const taskConteiner = document.createElement('div')
taskConteiner.className = ('taskConteiner')

root.append(header, taskConteiner)

const createButton = (type, text, className) => {
  const button = document.createElement('button');
  button.className = className;
  button.type = type;
  button.textContent = text;
  return button
}
const buttonDel = createButton('button', 'Delete All', 'buttonDel')
const buttonAdd = createButton('button', 'Add', 'buttonAdd')
const taskButton = createButton('button','✓', 'taskButton' )
const taskSubButton = createButton('button', '✗', 'taskSubButton')

const createInput = (type, className, placeholder) => {
  const input = document.createElement('input');
  input.type = type;
  input.className = className;
  input.placeholder = placeholder;
  return input
}
const input = createInput('input', 'input', 'Enter todo ...')

header.append(buttonDel, input, buttonAdd)

const taskWindow = document.createElement('div')
taskWindow.className = ('taskWindow')
const taskSubConteiner = document.createElement('div')
taskSubConteiner.className = ('taskSubConteiner')

taskConteiner.append(taskWindow, taskSubConteiner)

const taskDiv =  document.createElement('div')
taskDiv.className = ('taskDiv')

taskWindow.append(taskButton, taskDiv)

const taskParagraph = document.createElement('p')
taskParagraph.className = ('taskParagraph')
taskParagraph.innerText = ('Go shoping')

taskDiv.append(taskParagraph)

const date = document.createElement('span')
date.className = ('date')
date.innerText = ('15.01.2024')

taskSubConteiner.append(taskSubButton, date)



