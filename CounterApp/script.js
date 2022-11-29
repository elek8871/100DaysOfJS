const count = document.querySelector(".count")
// const add = document.querySelector(".add")
// const countReset = document.querySelector(".reset")
// const subtract =document.querySelector(".subtract")

const buttons = document.querySelector(".buttons")

buttons.addEventListener("click", (e)=>{
    if(e.target.classList.contains("add")){
        console.log("add")
        count.innerHTML ++
        setColor()
    }
    if(e.target.classList.contains("subtract")){
        console.log("subtract")
        count.innerHTML --
        setColor()
    }
    if(e.target.classList.contains("reset")){
        console.log("reset")
        count.innerHTML = 0
        setColor()
    }
})

function setColor(){
    if(count.innerHTML >0 ){
        count.style.color = "purple"
    }else if( count.innerHTML < 0){
        count.style.color = "blue"
    }else{
        count.style.color = "white"
    }
}


// add.addEventListener("click", ()=>{
//     count.innerHTML ++
// })
// subtract.addEventListener("click", ()=>{
//     count.innerHTML --
// })
// countReset.addEventListener("click", ()=>{
//     count.innerHTML = 0
// })