const test = document.getElementById("test");
var randomColor = Math.floor(Math.random()*16777215).toString(16);
const codecademi = document.getElementById("codecademy")

test.addEventListener('mouseenter', () => {
    test.style.color = "#882d2d";
});

test.addEventListener('mouseleave', () => {
    test.style.color = "#f1d8c1";
});

codecademy.addEventListener('mouseenter', () => {
    test.style.color = rgb(61, 21, 21);
});

codecademy.addEventListener('mouseleave', () => {
    test.style.color = "#882d2d";
});