const root = document.getElementById('root')
root.className = ('root')


const header = document.createElement('header')
header.className = ('header')
root.append(header)

const button = document.createElement('button')
button.innerText = ('Delete All')
button.className = ('button')
header.append(button)

const input = document.createElement('input')
input.className = ('input')
input.placeholder = ('Enter todo ...')
header.append(input)



const buttonTwo = document.createElement('button')
buttonTwo.innerText = ('Add')
buttonTwo.className = ('buttonTwo')
header.append(buttonTwo)


const taskConteiner = document.createElement('div')