let heading=document.querySelector("#heading")
let para=document.querySelector(".para")

heading.innerHTML="<h2>Modified DOM<h2>"
let body=document.querySelector("body")
body.style.backgroundColor="LightBlue"
para.style.fontSize="50px"

let div=document.createElement("div")
div.innerHTML="<h2>Submit<h2>"
body.appendChild(div)

para.remove()

let  btn=document.querySelector("#btn")
btn.addEventListener("click",()=>{body.style.backgroundColor="lightpink"})

let check=document.querySelector("#checkbox")
check.addEventListener("click",(event)=>{event.preventDefault()})

let link=document.querySelector("#link")
link.addEventListener("click",(event)=>{event.preventDefault()})