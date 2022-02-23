let todoInput //miejce,gdzie uzytkownik wpisuje tresc zadania
let errorInfo // info o braku zadan /  koniecznosci wpisania tekstu
let addBtn // przycisk add - dodaje nowe elementy do listy
let ulList // lista zadan, tagi ul
let newTodo //nowe zadanie(li) dodane do ul

const main = () => {
    prepareDOMElements()
    prepareDOMEvents()

}
const prepareDOMElements = () => {
    
    todoInput = document.querySelector('.todo-input')
    errorInfo = document.querySelector('.error-info')
    addBtn = document.querySelector('.btn-add')
    ulList = document.querySelector('.todolist ul')

}
const prepareDOMEvents = () => {
addBtn.addEventListener('click', addNewTask)
}

const addNewTask = () =>{
    if(todoInput.value !== ""){
        const newTodo = document.createElement('li')
        newTodo.textContent = todoInput.value
        
        ulList.append(newTodo)

        createTool()

        errorInfo.textContent = ""
        todoInput.value = ""


    }else{
        errorInfo.textContent = "Należy wpisać treść"
    }
}

const createTool = (newTodo) =>{
    const divTools = document.createElement('div')
    divTools.classList.add('tools')
    

    const completeBtn = document.createElement('button')
    completeBtn.classList.add('complete')
    completeBtn.innerHTML ='<i class="fas fa-check"></i>'

    
    const editBtn = document.createElement('button')
    editBtn.classList.add('edit')
    editBtn.textContent ='EDIT'

   
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete')
    deleteBtn.innerHTML ='<i class="fas fa-times"></i>'

    divTools.append(completeBtn, editBtn, deleteBtn)

    newTodo.append(divTools)
}


document.addEventListener('DOMContentLoaded', main)