const modal = document.querySelector(".modal")
const button = document.querySelector(".button")
const close = document.querySelector(".close")




const showModal = (e)=>{
    e.preventDefault()
    modal.style.display = "block"
}

const hideModal = ()=>{
    modal.style.display = "none"
}
button.addEventListener("click", showModal)
close.addEventListener("click", hideModal)
modal.addEventListener("click", hideModal)