


const border1 = document.querySelectorAll(".border-left-black");
const border2 = document.querySelectorAll(".border-left-black1");


border1.forEach((el, index)=>{
el.addEventListener("click", ()=>{
    el.classList.toggle("border-left-black1")
    el.classList.toggle("border-left-black")
})
});


border2.forEach((el, index)=>{
    el.addEventListener("click", ()=>{
        el.classList.toggle("border-left-black")
        el.classList.toggle("border-left-black1")
    })
    });