createItems(window.list);

function createItems(itemArray){
    var rightPlace = document.getElementsByClassName("rightPlace")[0];
    var leftPlace = document.getElementsByClassName("leftPlace")[0];
    var indexList = [];
    var addedList = []
    for (var item = 0; item < itemArray.length; item++) {
        addedList.push(item);
    }
    for (var i = 0; i < (itemArray.length - 0); i++){
        var addedIndex = Math.floor(Math.random() * addedList.length);
        var itemNum = addedList[addedIndex];
        console.log("itemNum should match index");
        console.log(itemNum);
        console.log("itemArray[itemNum] should be a pair");
        console.log(itemArray[itemNum]);
        var pair = itemArray[itemNum];
        var button = createButton(pair[0][1]);
        var text = createText(pair[0][0], "name");
        var right = addID([button, text], itemNum, "right");
        rightPlace.appendChild(right);
        addSpace(rightPlace);
        addedList.splice(addedIndex, 1);
        indexList.push(itemNum);
    }
    console.log("indexList:");
    console.log(indexList);
    while (indexList.length > 0){
        var num = Math.floor(Math.random() * indexList.length);
        var index = indexList[num]
        console.log("index should match itemNum");
        console.log(index);
        var item = itemArray[index][1]
        var button = createButton(item[1]);
        var text = createText(item[0], "color");
        var left = addID([button, text], index, "left");
        console.log("left's id:");
        console.log(left.id);
        leftPlace.appendChild(left);
        addSpace(leftPlace);
        indexList.splice(num, 1);
    }
}