let body=document.body;
let boxes=document.querySelectorAll(".box");
boxes.forEach(box=>{
    box.addEventListener("click",(e)=>{
        // console.log(e.target.id)
        body.style.backgroundColor=e.target.id
    })
})