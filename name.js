function changeColor(item, color) {
    var tag = item.className;
    var el = document.getElementsByClassName(tag);
    var i;
    console.log(el);
    if (item.style.color === color) {
        for (i = 0; i < el.length; i++){
            console.log(el[i]);
            el[i].style.color = "black";
        }
    } else {
        for (var i = 0; i < el.length; i++){
            console.log(el[i]);
            el[i].style.color = "black";
        }
        item.style.color = color;
    }
    //this.addEventListener("click", function () {changeColor(this); }, false);
}

function addColorChange(tag, color) {
    var el = document.getElementsByClassName(tag);
    for (var i = 0; i < el.length; i++){
         el[i].addEventListener("click", function () {changeColor(this, color); }, false);
     }
 }

addColorChange("name", "red");
addColorChange("color", "blue");