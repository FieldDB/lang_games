var names = [[["img/01%20Cats%20And%20Dogs.mp3", "golden"], ["img/01%20Cats%20And%20Dogs.mp3", "yellow"]], [["img/01%20Cats%20And%20Dogs.mp3", "honey"], ["img/01%20Cats%20And%20Dogs.mp3", "brown"]]]
createItems(names);

function createItems(itemArray){
    var buttonPlace = document.getElementsByClassName("insert_buttons")[0];
    var labelPlace = document.getElementsByClassName("insert_labels")[0];
        
    console.log(buttonPlace);
    console.log(labelPlace);
    
    for (var i = 0; i < itemArray.length; i++){
        var pair = itemArray[i];
        console.log(pair);
        createButton(pair[0][0], pair[0][1], labelPlace, "name", i);
        createButton(pair[1][0], pair[1][1], buttonPlace, "color", i);
    }
}

/*function createLabel(label, place, id) {
    var newA = document.createElement("a");
    
    //Create new h4 and add attributes
    var newH = document.createElement("h4");
    newH.classList.add("name");
    newH.setAttribute("id", id);
    //Add item from triple as text
    newT = document.createTextNode(label);
        
    //Build up section through appends
    newH.appendChild(newT);
    newA.appendChild(newH);
    place.appendChild(newA);    
    addSpace(place);
}*/

function createButton(link, name, place, option, id) {
    var newA = document.createElement("a");
    
    //Create a new button and add features    
    var newB = document.createElement("button");
    newB.classList.add("btn");
    newB.classList.add("btn-default");
    newB.setAttribute("type", "button");    
        
    //Create new span and add features
    var newSp = document.createElement("span");
    newSp.classList.add("glyphicon");
    newSp.classList.add("glyphicon-play");
    newSp.setAttribute("aria-hidden", "true");
    
    //Create new audio
    var newAd = document.createElement("audio");
    
    //Create new source and add url from triple
    var newSo = document.createElement("source"); 
    newSo.setAttribute("src", link);
    newSo.setAttribute("type", "audio/mpeg");
    
    //Create new h4 and add features
    var newH = document.createElement("h4");
    newH.classList.add(option);
    newH.setAttribute("id", id);
    
    //Add item from pair as text
    newT = document.createTextNode(name);
    //Build up section through appends
    newH.appendChild(newT);
    newAd.appendChild(newSo);
    newSp.appendChild(newAd);
    newB.appendChild(newSp);
    newA.appendChild(newB);
    newA.appendChild(newH);
    place.appendChild(newA);
    addSpace(place);
}

function addSpace(node) {
    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    node.appendChild(br1);
    node.appendChild(br2);
}