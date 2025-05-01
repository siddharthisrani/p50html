

let date=document.querySelector("#date")
let day=document.querySelector("#day")
let month=document.querySelector("#month")
let year=document.querySelector("#year")


setInterval(()=>{
    let Time=new Date()

    date.innerHTML=Time.getDate()
    year.innerHTML=Time.getFullYear()

    let Months=["Jan", "Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"]
    let Days=["Sun","Mon","Tue","Wed","Thr","Fri","Sat"] 

    day.innerHTML=Days[Time.getDay()]
    month.innerHTML=Months[Time.getMonth()]

},1000)

    