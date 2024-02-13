const form=document.querySelector("form");
form.addEventListener('submit',(e)=>{
    e.preventDefault();
   
    let h=parseInt(document.querySelector("#Height").value);
    let w=parseInt(document.querySelector("#Weight").value);
    let result=document.querySelector("#result");
    if(h==='' || h<0 || isNaN(h) || w==='' || w<0 || isNaN(w)){
        result.innerHTML="please enter a valid input"
    }
    else{
         result.innerHTML=(w/(h*h));
    }
   
})