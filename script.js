const a= document.querySelectorAll(".panels")
a.forEach((panel)=>{
    panel.addEventListener("click",()=>{
        removeclass()
        panel.classList.add("active")

    })
})
function removeclass(){
    a.forEach((panel)=>{
        panel.classList.remove("active")
    })
}