function updateCss(params) {

const newMargin = document.getElementById('margin').value;

const newPadding = document.getElementById('padding').value;

console.log(newMargin);

console.log(newPadding);

document.getElementById('main').style.margin = `${newMargin}px`;

document.getElementById('main').style.padding = `${newPadding}px`;

}
