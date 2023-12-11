const btn = document.querySelectorAll(".btn")
const div = document.getElementById("div")


btn.addEventListener("click",function(){

    const new_div = document.createElement("div")
    new_div.appendChild(div)
})