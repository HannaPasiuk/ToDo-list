const root = document.getElementById('root')
root.className = ('root')

const header = document.createElement('form')
header.className = ('header')


const taskContainer = document.createElement('div')
taskContainer.className = ('taskContainer')

const tasks = getData("todo");

//local storage
function getData(key){
  return JSON.parse(localStorage.getItem(key) || '[]');
}

function setData(){
  localStorage.setItem("todo", JSON.stringify(tasks))
}




//function create_button
const createButton = (type, text, className) => {
  const button = document.createElement('button');
  button.className = className;
  button.type = type;
  button.textContent = text;
  return button
}
//add button
const buttonDelAll = createButton('button', 'Delete All', 'buttonDelAll')
const buttonAdd = createButton('submit', 'Add', 'buttonAdd')


//function create_input
const createInput = (type, className, placeholder) => {
  const input = document.createElement('input');
  input.type = type;
  input.className = className;
  input.placeholder = placeholder;
  return input
}
//add input
const input = createInput('text', 'input', 'Enter todo ...')





//render task

function renderTask () {
  taskContainer.innerHTML = ''; 
  if(tasks.length > 0){
    tasks.forEach( task => {
    const taskItem = createTaskItem(task.task, task.isCompleted, task.id, task.date);
    taskContainer.appendChild(taskItem);
  }) 
 }
 else{
    const renderText = document.createElement('p')
    renderText.className = 'renderText'
    renderText.textContent = 'No tasks '  
    taskContainer.appendChild(renderText)
    
  }
}



//add task
function addTask(){
  const taskInput = input.value;
  const task = {
    id: self.crypto.randomUUID(),
    task: taskInput,
    isCompleted: false,
    date: new Date().toLocaleDateString(),
    removeOneTaskItem,
}
  tasks.push(task);
  input.value = ``; 
 
}

header.addEventListener('submit', (event) => {
  event.preventDefault();
  
  addTask();
  setData(tasks)
  renderTask()
  
})






//function create tasks cards

function createTaskItem (task, isCompleted, id, date) {
  //elements
  const taskItem = document.createElement('div');
  taskItem.className = ('taskItem');
  taskContainer.append(taskItem)
  

  const taskWindow = document.createElement('div');
  taskWindow.className = ('taskWindow');
  const subContainer = document.createElement('div');
  subContainer.className = ('subContainer');
  taskItem.append(taskWindow, subContainer)
  
 
  const taskButton = document.createElement('label');
  taskButton.className = ('taskButton');
  taskWindow.append(taskButton)
  taskButton.addEventListener('click', handlerIsChecked)

    const taskButtonContent = document.createElement('span');
  taskButtonContent.textContent = ('✓');
  taskButton.append(taskButtonContent)
  

  const taskDiv = document.createElement('div');
  taskDiv.className = ('taskDiv');
   taskWindow.append(taskDiv)


  const taskDelButton = createButton('button', '✗', 'taskDelButton');
  subContainer.append(taskDelButton)
  taskDelButton.addEventListener('click', removeOneTaskItem); 

//checkbox
  const taskCheckbox = createInput('checkbox', 'checkbox');
  taskButton.append(taskCheckbox)
  taskCheckbox.checked = isCompleted;


 taskCheckbox.addEventListener('click', () => {
  if (taskCheckbox.checked){
    taskParagraph.style.textDecoration = 'line-through';
    taskDiv.style.backgroundColor = 'lightgrey';
    taskItem.style.backgroundColor = 'grey'
  }
  else{
    taskParagraph.style.textDecoration = 'none';
    taskDiv.style.backgroundColor = 'white';
    taskItem.style.backgroundColor = 'inherit';
  }
 } )

  //paragraph
  const taskParagraph = document.createElement('p');
  taskParagraph.className = ('taskParagraph');
  taskDiv.append(taskParagraph)
  taskParagraph.id = id;
  taskParagraph.textContent = input.value;

  // data
  const currentDate = document.createElement('time');
  currentDate.textContent = date;
  subContainer.append(currentDate)
  taskParagraph.id = id;
  taskParagraph.textContent = task;

  return taskItem
}









//delete task

const  removeOneTaskItem = (event) => {
  if(confirm('Delete task?')){
    const taskId = event.currentTarget.closest('.taskItem').id;
    const item = tasks.findIndex((task) => task.id === taskId)
    tasks.splice(item);
    setData();
    renderTask()
  }
else return

}


//toggle
const completedTask = (id, checked) => {
  const tasks = getData('todo')
  const updateTask = tasks.map((item) => {
    if(item.id === id){
      item.isCompleted = checked
      return item
    }
    else item
  })
  setData('todo', updateTask)
}

 const handlerIsChecked = (event) => {
  const { target } = event
  const idItem = target.closest('.taskItem').id
  const checked = target.isCompleted
  completedTask(idItem, checked)
}



//delete all
function deleteAllTask (){
  for(i = 0; i < tasks.length; i++){
  const item =  document.querySelectorAll('.taskItem');
  tasks.splice(item)
  }
}
buttonDelAll.addEventListener('click', () => {
  if(tasks.length > 0 && confirm('Are you sure?')){
    deleteAllTask()
    setData(tasks)
    renderTask()
  } 
  else return
  
})






//append
header.append(buttonDelAll, input, buttonAdd)
root.append(header, taskContainer)

renderTask(tasks)
