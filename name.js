function changeColor(item) {
    console.log(item);
  item.style = "color:red";    
}

var el = document.getElementsByClassName("name");
for (var i = 0; i < el.length; i++){
    console.log(el);
    console.log(el[i]);
    el[i].addEventListener("click", function(){changeColor(el[i])}, false);
}