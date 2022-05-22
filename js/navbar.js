console.log('this is navbar.js');
/**
 * i am using width to open or close the menu.
 * i dont find display none method useful for this case as there is some animations also. 
 */
const trigger = document.getElementById("hamburger-trigger");
let isOpen = false;// ! dont temper this it refers to the state of hamburger-menu...
let menu = document.getElementById("hidden-list");
const menuHtml = menu.innerHTML;
menu.innerHTML = "";

const timeout = .7;//! this is used to change the time taken to open the hamburger menu

let isDesktop = (window.innerWidth >= 1150);
trigger.addEventListener("click", function () {

    //function to show or hide the hamburger-menu
    if (isOpen === false) {
        //open the menu
        if (isDesktop)
            menu.style.animation = `desk-menu-open  ${timeout}s 1 forwards`;
        else
            menu.style.animation = `menu-open  ${timeout}s 1 forwards`;
        setTimeout(() => {
            menu.innerHTML = menuHtml;
        }, 300);
        isOpen = true;
    }
    else {
        //close the menu
        setTimeout(() => {
            menu.innerHTML = "";
        }, 100);
        if (isDesktop)
            menu.style.animation = `desk-menu-close ${timeout}s 1 forwards`;
        else
            menu.style.animation = `menu-close ${timeout}s 1 forwards`;
        isOpen = false;
    }
});
