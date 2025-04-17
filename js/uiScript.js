const menu = document.getElementById("menu");
const navLink = document.getElementById("links");
const navbar = document.getElementById("nav-bar");

let clicked = false;

menu.addEventListener("click" , function () {

    if (clicked == false) {

        navLink.style.backgroundColor = "rgb(175, 171, 171)";
        navLink.style.position = "absolute";
        navLink.style.zIndex = "999";
        navLink.style.display = "flex";
        navLink.style.flexDirection = "column";
        navLink.style.top = "3%";
        navLink.style.left = "10%";
        clicked = true;

        window.matchMedia("(min-width: 492px)").addEventListener("change" , () => {

            if (window.matchMedia("(min-width: 492px)").matches) {

                navLink.style.display = "none";
                clicked = false;

            }

        })

    } else {

        navLink.style.display = "none";
        clicked = false;

    }

});
