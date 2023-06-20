const inputBox = document.getElementById('inputBox');
const addBtn = document.getElementById('addButton');
const todolist = document.getElementById('todoList');
let edittodo = null;
addBtn.addEventListener('click', add = () => {
    const inputText = inputBox.value.trim();
    if (inputText.length <= 0) {
        alert("Add something!!!");
    }
    if (addBtn.value == "Edit") {
        console.log(addBtn.innerHTML)
        edittodo.target.previousElementSibling.previousElementSibling.innerHTML = inputText;
        addBtn.value = "Add";
        inputBox.value = "";
    }
    else {
        //Creating p tag
        let addli = document.createElement('li');
        let addp = document.createElement('p');
        addp.textContent = inputText;
        addli.appendChild(addp);
        todolist.append(addli);



        //Creating delete button
        const adddel = document.createElement('button');
        adddel.classList.add('delete')
        adddel.textContent = "Remove";
        addli.append(adddel);


        //Creating Edit button
        const addedit = document.createElement('button');
        addedit.textContent = "Edit";
        addedit.classList.add('Edit')
        addli.append(addedit)
        inputBox.value = '';



    }
    savelocaltodos(inputText)
})
todolist.addEventListener('click', remove = (e) => {
    if (e.target.innerHTML == "Remove") {
        todolist.removeChild(e.target.parentElement);
    } if (e.target.innerHTML == "Edit") {
        inputBox.value = e.target.previousElementSibling.previousElementSibling.innerHTML
        inputBox.focus()
        addBtn.value = "Edit"
        edittodo = e;
    }

})

const savelocaltodos = (inputText) => {
    let todos;
    if (localStorage.getItem("todos1") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos1"))
    }
    todos.push(inputText)
    localStorage.setItem("todos1", JSON.stringify(todos))
}

const getlocaltodos = () => {
    let todos;
    if (localStorage.getItem("todos1") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos1"))
        todos.forEach(todo => {
            //Creating p tag
            let addli = document.createElement('li');
            let addp = document.createElement('p');
            addp.textContent = todo;
            addli.appendChild(addp);
            todolist.append(addli);



            //Creating delete button
            const adddel = document.createElement('button');
            adddel.classList.add('delete')
            adddel.textContent = "Remove";
            addli.append(adddel);


            //Creating Edit button
            const addedit = document.createElement('button');
            addedit.textContent = "Edit";
            addedit.classList.add('Edit')
            addli.append(addedit)
            inputBox.value = '';
        });
    }
}
document.addEventListener('DOMContentLoaded', getlocaltodos)