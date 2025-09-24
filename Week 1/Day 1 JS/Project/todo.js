let container = document.querySelector("#container")


let addBtn = document.querySelector("#addBtn")
addBtn.addEventListener("click", () => {
    let textContent = document.querySelector("#textContent")
    let text = textContent.value
    let removeBtn = document.createElement("button")
    removeBtn.innerText = "X"
    removeBtn.addEventListener("click", ()=>{
        box.remove()
    })

    let box = document.createElement("div")
    box.innerHTML = text 

    box.appendChild(removeBtn)
    
    container.prepend(box)

    textContent.value = ""
})
