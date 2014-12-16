createItems(window.data);

function createItems(itemArray){
    var place = document.getElementsByClassName("insert")[0];
    var indexList = [];
    var addedList = [];
    var leftList = [];
    for (var item = 0; item < itemArray.length; item++) {
        addedList.push(item);
    }
    for (var i = 0; i < (itemArray.length - 0); i++){
        var addedIndex = Math.floor(Math.random() * addedList.length);
        var itemNum = addedList[addedIndex];
        var pair = itemArray[itemNum];
        var button = createButton(pair[0][0], pair[0][1], "name", itemNum);
        var text = createText(pair[0][0], "name", itemNum);
        var left = addID([button, text], itemNum, "left");
        leftList.push(left);
        addedList.splice(addedIndex, 1);
        indexList.push(itemNum);
    }
    while (indexList.length > 0){
        var num = Math.floor(Math.random() * indexList.length);
        var index = indexList[num]
        var item = itemArray[index][1]
        var right = createPicture(item[0], "color", index);
        indexList.splice(num, 1);  
        var l = leftList.pop();
        right = addID([right], index, "right");
        createRows(place, right, l);
    }
}