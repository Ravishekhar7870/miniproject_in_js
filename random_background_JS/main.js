// let heading=document.querySelector("h1");
// const change=setTimeout(()=>{
//     heading.innerHTML="website loaded";
// },2000)
// document.querySelector("#button").addEventListener("click",()=>{
//        clearTimeout(change);
// })
function randomcolor(){
    let random1 = Math.floor(Math.random() * 255);
      let random2 = Math.floor(Math.random() * 255);
      let random3 = Math.floor(Math.random() * 255);
      return `rgba(${random1},${random2},${random3})`;
}
let body=document.body;
let changecolor
let startbtn=document.querySelector("#start");
startbtn.addEventListener("click",()=>{
     changecolor=setInterval(()=>{
        body.style.backgroundColor=randomcolor();
    },1000)
})

const stopbtn=document.querySelector("#stop");
stopbtn.addEventListener("click",()=>{
    clearInterval(changecolor);
})

