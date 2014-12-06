function changeColor(item) {
  item.style = "color: red";    
}

var el = document.getElementsByTagName("h4");
for (var i = 0; i < el.length; i++){
    el[i].addEventListener("click", function(){changeColor(el[i])}, false);
}