
let Select=document.querySelector('#select')
let text=document.querySelector("#showtext")
let dropdown=document.querySelector("#dropdown")

let select=()=>{

    if( dropdown.style.visibility=="visible" ){

        dropdown.style.visibility="hidden"
    }
    else{
        dropdown.style.visibility="visible"
        }
     
}


let jump=(link)=>{

    text.innerHTML=link
    dropdown.style.visibility="hidden"


}