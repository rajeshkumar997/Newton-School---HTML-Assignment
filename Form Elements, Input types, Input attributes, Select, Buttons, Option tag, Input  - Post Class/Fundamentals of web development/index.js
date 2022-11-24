let n = 0;
function clicked() {

    document.getElementById("text").innerHTML = `You have clicked the button ${++n} times.`;
    if (n % 2 != 0) {
        document.getElementById("btn").style.color = "red";
    }
    else {
        document.getElementById("btn").style.color = "blue";
    }
}
