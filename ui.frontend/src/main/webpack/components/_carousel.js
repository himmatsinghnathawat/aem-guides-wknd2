const color1 = document.querySelectorAll(".cmp-carousel__action--next");
const color2 = document.querySelectorAll(".cmp-carousel__action--next2");

if(color1){
color1.forEach((el, index)=>{
el.addEventListener("click", ()=>{
   
    el.classList.toggle("cmp-carousel__action--next2")
    el.classList.toggle("cmp-carousel__action--next")
console.log('newconsole')

})
});
}

if(color2){
color2.forEach((el, index)=>{
    el.addEventListener("click", ()=>{
        el.classList.toggle("cmp-carousel__action--next")
        el.classList.toggle("cmp-carousel__action--next2")
    })
    });
}


console.log("working carousel");


