// =======================
// DOM Manipulation Practice
// =======================

// import { color } from "@rneui/base";

// 1️⃣ Selecting & Changing Elements
// Task: Select the <h1> with id="title"
// and create a button that changes its text and color when clicked.

// 👉 Step 1: Select the title element
const title = document.querySelector("#title")
const changeBtnTitle = document.querySelector("#changeTitle")

changeBtnTitle.addEventListener("click", ()=> {
    title.textContent = "text has been changed by JS"
    title.style.color = "red"
    changeBtnTitle.addEventListener("click", ()=> {
        title.textContent = "This is back again"
        title.style.color = "black"
    })
})
// 👉 Step 2: Select the "Change Title" button
// const changeTitleBtn = ...

// 👉 Step 3: Add an event listener on button click
// Inside, change the textContent of the title and its color.


// 2️⃣ Event Listener Example
// Task: Show an alert when "Click Me" button is clicked.

// 👉 Step 1: Select the button with id="clickMe"
const clickMeBtn = document.querySelector("#clickMe")
clickMeBtn.addEventListener("click", ()=> {
    alert("You clicked this button")
})

// 👉 Step 2: Add a click event listener that runs alert("You clicked the button!");


// 3️⃣ Creating Elements Dynamically (To-Do List)
// Task: Add a new <li> item into the list when "Add Task" button is clicked.

// 👉 Step 1: Select input, button, and ul
const taskInput = document.querySelector("#taskInput")
const addBtn = document.querySelector("#addTask")
const taskList = document.querySelector("#taskList")

// 👉 Step 2: Add a click listener to addBtn
// Inside: 
//   - Get the value from input
//   - Create a new <li>
//   - Set li.innerHTML = "taskText <button class='delete'>❌</button>"
//   - Append li to taskList
//   - Clear the input

addBtn.addEventListener("click", ()=> {
    taskText = taskInput.value.trim()
    if (taskText === "") {
        return
    }
    const li = document.createElement("li")
    li.innerHTML = `${taskText} <button class="delete">❌</button>`
    taskList.appendChild(li)

    taskInput.value = ""
})

// 4️⃣ Event Delegation (Delete Task)
// Task: When the ❌ button inside any li is clicked, remove that li

// 👉 Step 1: Add a click listener to taskList (the parent ul)
// 👉 Step 2: Check if e.target has class "delete"
// 👉 Step 3: Remove the parent li of that delete button
