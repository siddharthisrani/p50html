let AddItem=()=>{

   let inptext=document.querySelector("#inptext").value

  
  let list= document.createElement('p')
  list.innerHTML=`<button id="com"> Comp </button> <span id="task"> ${inptext} </span>  <button id="del"> Del </button> `
  document.querySelector("#Show").appendChild(list)
  
  list.querySelector("#com").addEventListener('click',()=>{

         list.style.textDecoration="line-through"
         

  })

  list.querySelector("#del").addEventListener('click',()=>{

      list.remove()

})

}



