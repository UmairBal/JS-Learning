let box = document.querySelector("#box")
// console.log(box)



// box.setAttribute("id", "box-changed")
// let id = box.getAttribute("id")

// console.log(id)


// let container = document.querySelector("#box")

// container.style.color = "red";
// container.style.background = "green";

let btn = document.createElement("button")
let body = document.querySelector("body")

btn.innerText = "Click Me"

console.dir(btn)

body.append(btn)

let btn2 = document.createElement("button")

btn2.innerText = "Button 2"

box.after(btn2)


let h1 = document.createElement("h1")
h1.innerText = "Welcome to JS"

body.prepend(h1)

h1.remove()

box.remove()

let para = document.createElement("p")
para.innerText = "This is a appended Node "

body.appendChild(para)

body.removeChild(btn)