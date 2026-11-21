const dashboardOpen = document.getElementById("dashboardOpen");
const dashboardClose = document.getElementById("dashboardClose");
const dashboardOverlay = document.getElementById("dashboardOverlay");

dashboardOpen.addEventListener("click", function() {
    dashboardOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
});

dashboardClose.addEventListener("click", function() {
    dashboardOverlay.classList.remove("active");
    document.body.style.overflow = "";
});