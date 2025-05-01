
let Select=document.querySelector('#select')
let text=document.querySelector("#showtext")
let dropdown=document.querySelector("#dropdown")
let Arrow=document.querySelector("#arrow")

let select=()=>{

    if( dropdown.style.visibility=="visible" ){

        dropdown.style.visibility="hidden"
        Arrow.style.transform="rotate(360deg)"

    }
    else{
        dropdown.style.visibility="visible"
        Arrow.style.transform="rotate(180deg)"

        }
     
}


let jump=(inp,icon,link)=>{

    text.innerHTML=`<div id="hello"> <img src="${icon}"> ${inp} <a href="${link}">GO </a> </div>`
    dropdown.style.visibility="hidden"


}