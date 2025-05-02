
let trans=document.querySelector(".trans")
let full=document.querySelector(".full")
let original=document.querySelector("#originall")
let arrow=document.querySelector("#arrow")

original.style.width=trans.offsetWidth+"px"

let leftSpace=trans.offsetLeft

let LetMove=(e)=>{

    let boxWidth= (e.pageX-leftSpace)+"px"
    full.style.width=boxWidth
    arrow.style.left=boxWidth

}