var chosenName = null;
var chosenColor = null;
var displayText = document.getElementById("intro_text");
var matched = [];
var numItems = addColorChange("name", "red");
numItems = numItems + addColorChange("color", "blue");

function checkMatch() {
    if ((chosenName !== null) && (chosenColor !== null)) {
        if (chosenName.id === chosenColor.id) {
            chosenName.style.color = "green";
            chosenColor.style.color = "green";
            changeText("You found a matching pair!");
            matched.push(chosenName.id);
            if (matched.push(chosenColor.id) === numItems) {
                changeText("You've matched all the items! Good job!");
            }
        } else {
            chosenName.style.color = "black";
            chosenColor.style.color = "black";
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
        if (tag === "name") {
            if (item === chosenName) {
                chosenName = null;
            } else {
                if (chosenName !== null) {
                    chosenName.style.color = "black";
                }
                item.style.color = color;
                chosenName = item;
            }
        } else {
            if (item === chosenColor) {
                chosenColor = null;
            } else {
                if (chosenColor !== null) {
                    chosenColor.style.color = "black";
                }
                item.style.color = color;
                chosenColor = item;
            }
        }
        checkMatch();
    }
}

function addColorChange(tag, color) {
    var el = document.getElementsByClassName(tag);
    for (var i = 0; i < el.length; i++){
         el[i].addEventListener("click", function(event) {changeColor(event.currentTarget, color); }, false);
     }
    return el.length;
 }
