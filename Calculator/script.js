
let store=''

let dis=(value)=>{  

    let show=document.querySelector("#display")
     store=store+value 
     show.innerHTML=store

}

let res=()=>{
     
    let show=document.querySelector("#display")

    store=eval(store).toString() 
        
    show.innerHTML=store

}

let del=()=>{
    
    store= store.slice(0,-1)
    let show=document.querySelector("#display")
    show.innerHTML=store


}

let AC=()=>{

    store=""
    let show=document.querySelector("#display")
    show.innerHTML=store

}