const bars = document.querySelector(".fa-bars");
const x =document.querySelector(".fa-x");
const nav =document.querySelector('.nav')
bars.addEventListener("click",()=>{
    bars.classList.add('d-nona');
    x.classList.remove('d-nona');
    nav.classList.remove('close-nav')
    nav.classList.add("open");
})

x.addEventListener("click",()=>{
    x.classList.add('d-nona');
    bars.classList.remove('d-nona');
    nav.classList.remove('open')
    nav.classList.add("close-nav")
})
