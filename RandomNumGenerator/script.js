

const number = document.querySelector(".number")
const button = document.querySelector(".generate")

const generateNumber =()=>{
    // generate number between 1 and 50
    const randomNum = Math.floor(Math.random()* 49 + 1)
    number.innerHTML=randomNum
}

button.addEventListener("click", generateNumber)