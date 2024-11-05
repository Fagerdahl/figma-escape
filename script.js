const sidebarButton=document.querySelector(".sidebar-btn");
const menuWrapper= document.querySelector(".menu-wrapper");
const headerNav=document.querySelector(".menu-list-mobile");

sidebarButton.addEventListener("click", () => {
    console.log("button clicked");

    const exitNav=document.createElement("button");
    const exitNavImg=document.createElement("img");

    exitNavImg.setAttribute("src", "close.png");
    exitNav.appendChild(exitNavImg);
    exitNav.classList.add("exitNavImg");
    headerNav.appendChild(exitNav);

    sidebarButton.addEventListener("click", ()=> {
        console.log ("btn clicked");
        menuWrapper.classList.toggle("hidden");
    });

    exitNavImg.addEventListener("click", () =>{
       menuWrapper.classList.add("hidden");
    });
});