
let count=0;
let inc=()=>{
   
   count++ 
  let display=document.querySelector("#show")
   display.innerHTML=count
}
let dec=()=>{
   
  count-- 
 let display=document.querySelector("#show")
  display.innerHTML=count
}

let res=()=>{

    count=0
    let display=document.querySelector("#show")
    display.innerHTML=count
}