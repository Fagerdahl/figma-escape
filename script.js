const openBtn=document.querySelector(".sidebar-btn");
const closeBtn=document.querySelector(".close-btn")
const menuWrapper= document.querySelector(".menu-wrapper");


openBtn.addEventListener("click",()=> {
    menuWrapper.classList.toggle("visible");
    openBtn.classList.add("hidden");/*hamb menu hidden*/
    console.log("opened");
});

closeBtn.addEventListener("click",()=>{
menuWrapper.classList.remove("visible");
openBtn.classList.remove("hidden");
console.log("closed");
});
