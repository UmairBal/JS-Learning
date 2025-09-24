// Q 1

let body = document.querySelector("body")

let btn = document.createElement("button")
btn.innerText = "Click Me"

btn.style.background = "red"
btn.style.color = "white"

body.prepend(btn)

// Q 2

let para = document.querySelector(".content")

para.classList.add('secondClass')