function createRows(start, right, left) {
    var row = document.createElement("div");
    var leftD = document.createElement("div");
    var rightD = document.createElement("div");
    
    //Format rows
    row.classList.add("row");
    leftD.classList.add("col-md-6");
    leftD.classList.add("buttons");
    rightD.classList.add("col-md-6");
    rightD.classList.add("buttons");
 
    //Build through appends
    leftD.appendChild(left);
    rightD.appendChild(right);
    row.appendChild(leftD);
    row.appendChild(rightD);
    start.appendChild(row);
}

function wrapA(nodeList) {
    var newA = document.createElement("a");
    for (var i = 0; i < nodeList.length; i++){
        newA.appendChild(nodeList[i]);
    }
    return newA;    
}

function createPicture(src, tag) {
    var newI = document.createElement("img");
    
    //Add img attributes
    newI.classList.add("img-responsive");
    newI.classList.add("thumbnail");
    newI.classList.add("img_option");
    newI.setAttribute("src", src);
        
    return newI;
}

function createButton(link) {
    
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
    
    newAd.appendChild(newSo);
    newSp.appendChild(newAd);
    newB.appendChild(newSp);
    return newB;
}

function createText(name, option) {
    var newH = document.createElement("h4");
    newH.classList.add(option);
    newT = document.createTextNode(name);
    newH.appendChild(newT);
    return newH;
}

function addSpace(node) {
    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    node.appendChild(br1);
    node.appendChild(br2);
}

function addID(side, ID, tag) {
    side = wrapA(side);
    side.classList.add(tag);
    side.id = ID;
    return side;    
}