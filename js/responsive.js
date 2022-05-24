/**
 * -> for reader: instead of using other cool stuff like cutting first elements from hidden list and pasting them to visible list, i chose the cleaner way to achive the same task.
 */

const desktopVisibleNavHtml = ` 
                <li class="navListItms">
                    <a href="https://www.spacex.com/vehicles/falcon-9/" class="link font-roboto link-animation">Falcon 9</a>
                </li>
                <li class="navListItms">
                    <a href="https://www.spacex.com/vehicles/falcon-heavy/" class="link font-roboto link-animation">Falcon Heavy</a>
                </li>
                <li class="navListItms">
                    <a href="https://www.spacex.com/vehicles/dragon/" class="link font-roboto link-animation">Dragon</a>
                </li>
                <li class="navListItms">
                    <a href="https://www.spacex.com/vehicles/starship/" class="link font-roboto link-animation">starship</a>
                </li>
                <li class="navListItms">
                    <a href="https://www.spacex.com/human-spaceflight/" class="link font-roboto link-animation">human spaceflight</a>
                </li>
                <li class="navListItms">
                    <a href="https://www.spacex.com/rideshare/" class="link font-roboto link-animation">rideshare</a>
                </li>
                <li class="navListItms">
                    <a href="https://www.starlink.com/" class="link font-roboto link-animation">starlink</a>
                </li>`;
const desktopHiddenNavHtml = ` 
                <li class="navListItms">
                    <a href="https://www.spacex.com/mission/" class="link font-roboto link-animation">mission</a>
                </li>
                <li class="navListItms">
                    <a href="https://www.spacex.com/launches/" class="link font-roboto link-animation">launches</a>
                </li>
                <li class="navListItms">
                    <a href="https://www.spacex.com/careers/" class="link font-roboto link-animation">careers</a>
                </li>
                <li class="navListItms">
                    <a href="https://www.spacex.com/updates/" class="link font-roboto link-animation">updates</a>
                </li>
                <li class="navListItms">
                    <a href="https://shop.spacex.com/" class="link font-roboto link-animation">shop</a>
                </li>`;

function setupNavbar() {
    let width = window.innerWidth;
    let visibleList = document.getElementById("visible-list");
    let hiddenList = document.getElementById("hidden-list");
    if (width >= 1150) {
        visibleList.innerHTML = desktopVisibleNavHtml;
        hiddenList.innerHTML = desktopHiddenNavHtml;
    }
    if (width < 1150) {
        visibleList.innerHTML = "";
        hiddenList.innerHTML = desktopVisibleNavHtml + desktopHiddenNavHtml;
    }
}
setupNavbar();
window.addEventListener("resize", setupNavbar);
