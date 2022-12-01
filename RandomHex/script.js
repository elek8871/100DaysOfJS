
// numbers will from 0-9 and letters a-f  <---> [toString(16)]
// use a substring to slice 6 char from string

// color = Math.random().toString(16).substring(2, 8)

const hexColor = document.querySelector(".color")
const generate = document.querySelector(".button")

const generateColor  = () =>{
    const randomColor = Math.random().toString(16).substring(2, 8)
    document.body.style.backgroundColor = "#" + randomColor
    hexColor.innerHTML =  "#" + randomColor
}

generate.addEventListener("click", generateColor)

generateColor()