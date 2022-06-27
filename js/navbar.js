/**
 * i am using width to open or close the menu.
 * i dont find display none method useful for this case as there is some animations also. 
 */
const trigger = document.getElementById("hamburger-trigger");
let isOpen = false;// ! dont temper this it refers to the state of hamburger-menu...
let menu = document.getElementById("hidden-list");
menu.innerHTML = "";

const timeout = .7;//! this is used to change the time taken to open the hamburger menu

trigger.addEventListener("click", function () {

    let isDesktop = (window.innerWidth >= 1150);
    let triggerImage = document.getElementById("ham-trigger-img");
    //function to show or hide the hamburger-menu
    if (isOpen === false) {
        //open the menu
        // *change menu size-animation and HTML according to the current viewport width

        triggerImage.src = "media/close_menu.svg";
        if (isDesktop) {
            menu.style.animation = `desk-menu-open  ${timeout}s 1 forwards`;
            setTimeout(() => {
                menu.innerHTML = desktopHiddenNavHtml;
            }, 300);
        }
        else {

            menu.style.animation = `menu-open  ${timeout}s 1 forwards`;
            setTimeout(() => {
                menu.innerHTML = desktopVisibleNavHtml + desktopHiddenNavHtml;
            }, 300);
        }
        isOpen = true;
    }
    else {
        //close the menu
        triggerImage.src = "media/list.svg";
        setTimeout(() => {
            menu.innerHTML = "";
        }, 100);
        if (isDesktop)
            menu.style.animation = `desk-menu-close ${timeout}s 1 forwards`;
        else
            menu.style.animation = `menu-close ${timeout}s 1 forwards`;
        isOpen = false;//! don't temper this. it is reffered as the current state of menu.
    }
});
