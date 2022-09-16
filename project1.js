const bar = document.getElementById('bar');
const closee = document.getElementById('close');
const nav =document.getElementById('navbar');

if (bar){
    bar.addEventListener("click",()=>{
        nav.classList.add("active");
    })
}
if(closee){
    closee.addEventListener("click",()=>{
        nav.classList.remove("active");
    })
}