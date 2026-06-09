// let heading=document.querySelector("#heading")
// let para=document.querySelector(".para")

// heading.innerHTML="<h2>Modified DOM<h2>"
// let body=document.querySelector("body")
// body.style.backgroundColor="LightBlue"
// para.style.fontSize="50px"

// let div=document.createElement("div")
// div.innerHTML="<h2>Submit<h2>"
// body.appendChild(div)

// para.remove()

// let  btn=document.querySelector("#btn")
// btn.addEventListener("click",()=>{body.style.backgroundColor="lightpink"})

// let check=document.querySelector("#checkbox")
// check.addEventListener("click",(event)=>{event.preventDefault()})

// let link=document.querySelector("#link")
// link.addEventListener("click",(event)=>{event.preventDefault()})

let task=document.querySelector("#taskinput")
let taskol=document.querySelector("#list")
let btn=document.querySelector("#btn")

btn.addEventListener("click",()=>{
    let taskdata=task.value

    if(taskdata === ""){
        alert("please enter your task before adding")
        return;
    }

    let tasklist=document.createElement("li")
    tasklist.innerText=taskdata

    let delbtn=document.createElement("button")
    delbtn.innerText="Delete"

    let compbtn=document.createElement("button")
    compbtn.innerText="Unompleted"
    compbtn.style.backgroundColor="Red"

    taskol.appendChild(tasklist)
    tasklist.appendChild(delbtn)
    tasklist.appendChild(compbtn)

    task.value=""

    delbtn.addEventListener("click",()=>{tasklist.remove()
    })

    compbtn.addEventListener("click",()=>{compbtn.innerText="Completed" 
        compbtn.style.backgroundColor="LightGreen"
    })
})

let searchInput = document.querySelector("#searchinput")
let sbtn=document.querySelector("#sbtn")
sbtn.addEventListener("click", () => {
    let searchTask = searchInput.value.trim().toLowerCase()

    if (searchTask === "") {
        alert("Please enter a task to search");
        return;
    }

    let tasks = document.querySelectorAll("#list li")
    let found = false

    tasks.forEach((task) => {
        let taskText = task.firstChild.textContent.trim().toLowerCase()
        if (taskText === searchTask) {
            found = true;
        }
    });

    if (found) {
        alert("Task exists")
    } else {
        alert("Task not found")
    }
});