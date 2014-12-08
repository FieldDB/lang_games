var chosenName = null;
var chosenColor = null;
var displayText = document.getElementById("intro_text");
var matched = [];
var numItems = addColorChange("red");
numItems = numItems + addBorderChange("blue");

function checkMatch() {
    if ((chosenName !== null) && (chosenColor !== null)) {
        if (chosenName.id === chosenColor.id) {
            chosenName.style.color = "green";
            chosenColor.style.borderColor = "green";
            changeText("You found a matching pair!");
            matched.push(chosenName.id);
            if (matched.push(chosenColor.id) === numItems) {
                changeText("You've matched all the items! Good job!");
            }
        } else {
            chosenName.style.color = "black";
            chosenColor.style.borderColor = "black";
            changeText("Sorry, those don't match. Try again!");
        }
        chosenName = null;
        chosenColor = null;
    } else {
        changeText(" ");
    }
}

function changeText(newText) {
    if (displayText.firstChild) {
        displayText.firstChild.nodeValue = newText;
    }
}

function changeColor(item, color) {
    var tag = item.className;
    var el = document.getElementsByClassName(tag);
    if (matched.indexOf(item.id) === -1) {
        if (item === chosenName) {
            chosenName = null;
        } else {
            if (chosenName !== null) {
                chosenName.style.color = "black";
            }
            item.style.color = color;
            chosenName = item;
        }
        checkMatch();
    }
}

function changeBorder(item, color) {
    var tag = item.className;
    var el = document.getElementsByClassName(tag);
    if (matched.indexOf(item.id) === -1) {
        if (item === chosenColor) {
            chosenColor = null;
        } else {
            if (chosenColor !== null) {
                chosenColor.style.borderColor = "black";
            }
            item.style.borderColor = color;
            chosenColor = item;
        }
        checkMatch();
    }
}

function addColorChange(color) {
    var el = document.getElementsByClassName("name");
    for (var i = 0; i < el.length; i++){
         el[i].addEventListener("click", function(event) {changeColor(event.currentTarget, color); }, false);
     }
    return el.length;
 }

function addBorderChange(color) {
    var el = document.getElementsByClassName("img_option");
    for (var i = 0; i < el.length; i++){
         el[i].addEventListener("click", function(event) {changeBorder(event.currentTarget, color); }, false);
     }
    return el.length;
 }
