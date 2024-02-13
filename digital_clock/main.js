let clock=document.querySelector(".clock");
setInterval(()=>{
    let data=new Date();
    clock.innerHTML=data.toLocaleTimeString();
},1000)