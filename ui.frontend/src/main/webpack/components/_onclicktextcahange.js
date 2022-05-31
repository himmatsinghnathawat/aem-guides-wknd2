const color3 = document.querySelectorAll(".cmp-text");
const color4 = document.querySelectorAll(".cmp-text2");


color3.forEach((el, index)=>{
el.addEventListener("click", ()=>{
    el.classList.toggle("cmp-text2")
    el.classList.toggle("cmp-text")
})
});


color4.forEach((el, index)=>{
    el.addEventListener("click", ()=>{
        el.classList.toggle("cmp-text")
        el.classList.toggle("cmp-text2")
    })
    });