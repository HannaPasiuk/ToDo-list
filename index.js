const root = document.getElementById('root')
root.className = ('root')

const header = document.createElement('header')
header.className = ('header')
const taskConteiner = document.createElement('div')
taskConteiner.className = ('taskConteiner')

root.append(header, taskConteiner)

const button = document.createElement('button')
button.innerText = ('Delete All')
button.className = ('button')
const input = document.createElement('input')
input.className = ('input')
input.placeholder = ('Enter todo ...')
const buttonTwo = document.createElement('button')
buttonTwo.innerText = ('Add')
buttonTwo.className = ('buttonTwo')

header.append(button, input, buttonTwo)

const taskWindow = document.createElement('div')
taskWindow.className = ('taskWindow')
const taskSubConteiner = document.createElement('div')
taskSubConteiner.className = ('taskSubConteiner')

taskConteiner.append(taskWindow, taskSubConteiner)

const taskButton = document.createElement('button')
taskButton.className = ('taskButton')
taskButton.innerHTML = ('&#10003')
const taskDiv =  document.createElement('div')
taskDiv.className = ('taskDiv')

taskWindow.append(taskButton, taskDiv)

const taskParagraph = document.createElement('p')
taskParagraph.className = ('taskParagraph')
taskParagraph.innerText = ('Go shoping')

taskDiv.append(taskParagraph)

const taskSubButton = document.createElement('button')
taskSubButton.innerHTML = ('&#215;')
taskSubButton.className = ('taskSubButton')
const date = document.createElement('span')
date.className = ('date')
date.innerText = ('15.01.2024')

taskSubConteiner.append(taskSubButton, date)



