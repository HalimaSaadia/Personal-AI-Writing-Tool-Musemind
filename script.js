let isNavbarOpen = false
const navbarToggleButton = document.getElementById("navbarToggleButton");
const navbarGripIcon = document.getElementById("navbarGripLines")
const navbarCrossIcon = document.getElementById("navbarCrossIcon")
const navbarSmallDevice = document.getElementById("navItemSmallDevice")
console.log(isNavbarOpen)

const toggleNavbar = () =>{
    navbarGripIcon.style.transition = "display .3s ease"
    navbarCrossIcon.style.transition = "display .3s ease"
    if(isNavbarOpen){
        isNavbarOpen = false;
        navbarGripIcon.style.display = "block"
        navbarCrossIcon.style.display = "none"
        navbarSmallDevice.style.display="none"
      
    }else{
        isNavbarOpen = true;
        navbarCrossIcon.style.display = "block"
        navbarGripIcon.style.display = "none"
       
        navbarSmallDevice.style.display="block"
    }
 
}

