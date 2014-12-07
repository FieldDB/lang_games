var chosenName = null;
var chosenColor = null;
addColorChange("name", "red");
addColorChange("color", "blue");

function checkMatch() {
    if ((chosenName !== null) && (chosenColor !== null) && (chosenName.id === chosenColor.id)) {
    chosenName.style.color = "green";
    chosenColor.style.color = "green";
    }
}

function changeColor(item, color) {
    var tag = item.className;
    var el = document.getElementsByClassName(tag);
    console.log(el);
    for (var i = 0; i < el.length; i++){
        console.log(el[i]);
        if (el[i].style.color === color){
            el[i].style.color = "black";
        }
    }
    if (tag === "name") {
        if (item === chosenName) {
            chosenName = null;
        } else {
            item.style.color = color;
            chosenName = item;
        }
    } else {
        if (item === chosenColor) {
            chosenColor = null;
        } else {
            item.style.color = color;
            chosenColor = item;
        }
    }
    checkMatch();
}

function addColorChange(tag, color) {
    var el = document.getElementsByClassName(tag);
    for (var i = 0; i < el.length; i++){
         el[i].addEventListener("click", function(event) {changeColor(event.currentTarget, color); }, false);
     }
 }
