const menu = document.getElementById("menu");
const navLink = document.getElementsByClassName("nav-links");

let clicked = false;
    
menu.addEventListener("click" , function () {

    if (clicked == false) {
        
        navLink[0].style.position = "absolute";
        navLink[0].style.zIndex = "999"
        navLink[0].style.display = "flex";
        navLink[0].style.flexDirection = "column";
        navLink[0].style.top = "3%";
        navLink[0].style.left = "10%";
        clicked = true;

    } else {

        navLink[0].style.display = "none";
        clicked = false;

    }
    
});

