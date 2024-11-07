const openBtn=document.querySelector(".sidebar-btn");
const closeBtn=document.querySelector(".close-btn")
const menuWrapper= document.querySelector(".menu-wrapper");
const headerNav=document.querySelector(".menu-list-mobile");

openBtn.addEventListener("click",()=> {
    menuWrapper.classList.toggle("visible");
    console.log("opened");
});

closeBtn.addEventListener("click",()=>{
menuWrapper.classList.remove("visible");
console.log("closed");
});
