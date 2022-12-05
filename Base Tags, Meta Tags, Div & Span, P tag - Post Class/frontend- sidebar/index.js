const mainEl = document.getElementById("main");
const sidebarEl = document.getElementById("sidebar");
const openEl = document.getElementById("open");
const closeEl = document.getElementById("close");

function close1() {
    mainEl.classList.toggle("active");
    sidebarEl.classList.toggle("active-side");
    openEl.style.display = "inline-block";
    //  alert("hello");
}

function open1() {
    mainEl.classList.toggle("active");
    sidebarEl.classList.toggle("active-side");
    openEl.style.display = "none";
    // alert("hello");
}
