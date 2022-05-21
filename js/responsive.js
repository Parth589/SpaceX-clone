let width = window.innerWidth;
if (width >= 1150) {
}
if (width <= 600) {
    let visibleList = document.getElementById("visible-list");
    let hiddenList = document.getElementById("hidden-list");
    hiddenList.innerHTML = visibleList.innerHTML + hiddenList.innerHTML;
    visibleList.innerHTML = "";
}
let alertBox = this.document.querySelector(".alertContainer");
if (alertBox.style.display === "flex" || alertBox.style.display === "") {
    alertBox.style.display = "none";
}
window.addEventListener("resize", function () {
    console.log("window changed...");
    alertBox.style.display = "flex";
    setTimeout(() => {
        alertBox.style.display = "none";
    }, 3000);
});
