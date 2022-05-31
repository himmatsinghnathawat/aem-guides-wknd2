
const img1 = document.querySelectorAll(".cmp-image");
const img2 = document.querySelectorAll(".cmp-image2");

if(img1){
img1.forEach((el, index)=>{
el.addEventListener("click", ()=>{
   
    el.classList.toggle("cmp-image2")
    el.classList.toggle("cmp-imaget")
console.log('newconsole')

})
});
}

if(img2){
img2.forEach((el, index)=>{
    el.addEventListener("click", ()=>{
        el.classList.toggle("cmp-image")
        el.classList.toggle("cmp-image2")
    })
    });
}

