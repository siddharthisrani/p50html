
let circle=document.querySelector("#circle")
let value=document.querySelector("#value")


let ProggressStart=0
let ProggressEnd=50
let speed=100


let Interval=setInterval(()=>{

    ProggressStart++   
    value.innerHTML=`${ProggressStart} %`
    circle.style.background=`conic-gradient(red,blue ${ProggressStart *3.6}deg, white 0deg)`


    if(ProggressStart==ProggressEnd){
        clearInterval(Interval)
    }


},speed)