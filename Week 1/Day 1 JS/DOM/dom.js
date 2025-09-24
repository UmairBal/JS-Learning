// console.log(document.body)
// let heading = document.getElementById("heading")
// console.dir(heading)

// let container = document.querySelector("div")
// console.log(container.textContent)

// // heading.innerHTML = "Something New"
// // console.log(heading.tagName)

// const textChange = document.querySelector("#textChange")
// const text = document.querySelector("#heading")
// const para = document.querySelector("#content")

// textChange.addEventListener("click", ()=> {
//     text.innerHTML = "Changed"
//     para.style.color = "red"
//     alert("Everything has been changed")
// })


let headings = document.querySelector("#heading")

// console.log(headings)

let old = headings.textContent + " From Chatgpt";

let div = document.querySelectorAll("div")
div.forEach(box => {
    box.innerHTML = "Something"
});


div[0].innerText = "div 1 changed"
div[1].innerText = "div 2 changed"
div[2].innerText = "div 3 changed" 