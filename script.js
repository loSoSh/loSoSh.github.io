const test = document.getElementById("test");
var randomColor = Math.floor(Math.random()*16777215).toString(16);

test.onclick = function() {
    test.style.color = "#" + randomColor;
}