function changeCss(){
let left = document.getElementById("left").value;
let top = document.getElementById("top").value;
    document.getElementById("main").style.left=`${left}px`;
    document.getElementById("main").style.top=`${top}px`;
}
