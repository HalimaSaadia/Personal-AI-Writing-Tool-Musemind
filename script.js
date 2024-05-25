let isNavbarOpen = false
const navbarToggleButton = document.getElementById("navbarToggleButton");
const navbarGripIcon = document.getElementById("navbarGripLines")
const navbarCrossIcon = document.getElementById("navbarCrossIcon")
const navbarSmallDevice = document.getElementById("navItemSmallDevice")

const toggleNavbar = () =>{
    navbarGripIcon.style.transition = "display .3s ease"
    navbarCrossIcon.style.transition = "display .3s ease"
    if(isNavbarOpen){
        isNavbarOpen = false;
        navbarGripIcon.style.display = "block"
        navbarCrossIcon.style.display = "none"
        navbarSmallDevice.classList.add("slideFromBottomToTop")
        navbarSmallDevice.classList.remove("slideFromTopToBottom")
        navbarSmallDevice.style.display = "none";
      
    }else{
        isNavbarOpen = true;
        navbarCrossIcon.style.display = "block"
        navbarGripIcon.style.display = "none"
        navbarSmallDevice.style.display="block"
        navbarSmallDevice.classList.add("slideFromTopToBottom")
        navbarSmallDevice.classList.remove("slideFromBottomToTop")
    }
 
}


// FAQ
const detailsElements = document.querySelectorAll("details")

detailsElements.forEach(targetElement => {
    targetElement.addEventListener("click",()=>{
        detailsElements.forEach(otherDetailsElement=>{
            if(otherDetailsElement!==targetElement){
                otherDetailsElement.removeAttribute("open")
            }
        })
    })
})


const header = document.querySelector("header")
const main = document.querySelector("main")
const footer = document.querySelector("footer")

window.addEventListener("load",()=>{
    document.getElementById("loader").style.display="none"
    header.style.display="block"
    main.style.display="block"
    footer.style.display="block"
})