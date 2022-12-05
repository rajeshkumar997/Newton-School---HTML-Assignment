let power = false;

function display(number) {
    if (power == true) {
        let present = document.getElementsByClassName('tv-container')[0].innerHTML;
        present += '<center> <span style="margin-left:10px; display:inline-block;"></span> <center>' + number;
        document.getElementById(number).classList.add('active-channel');
        setTimeout(function () { document.getElementById(number).classList.remove('active-channel') }, 500);
        document.getElementsByClassName('tv-container')[0].innerHTML = present;

    }


}

function reset() {
    power = !power;

    if (power == false) {
        document.getElementsByClassName('tv-container')[0].innerHTML = '<center>Power Off<center>';
        document.getElementById('container').style.backgroundColor = 'black';
    }
    else {
        document.getElementsByClassName('tv-container')[0].innerHTML = '';
        document.getElementById('container').style.backgroundColor = 'dark-grey';
    }

}

function colorchange() {
    document.getElementsByClassName('dot')[0].classList.add('clicked');
    document.getElementsByClassName('dot')[1].classList.add('clicked');

    setTimeout(function () { document.getElementsByClassName('dot clicked')[0].classList.remove('clicked') }, 500);
    setTimeout(function () { document.getElementsByClassName('dot clicked')[0].classList.remove('clicked') }, 500);
}
