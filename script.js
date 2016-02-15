
var gameElements = ["T", "N", "L", "R", "M", "H", "Q", "V", "M", "R", "Q", "N", "T", "L", "V", "H"];
var matches = [];
var boxIds = [];
var flipped = 0;
var divBox = [];
var boardDiv = document.getElementById('board');
for (var i = 0; i < gameElements.length; i++) {
    boardDiv.innerHTML += '<div id="box'+i+'" onclick="flipBox(this)"><span id="innerBox'+i+'" class="hidden">'+gameElements[i]+'</span></div>';
    matches = [];
    boxIds = [];
    divBox = [];
}
function flipBox(box){
    if (box.childNodes[0].className == "hidden" && matches.length < 2) {
        var span = box.childNodes[0];
        box.style.backgroundColor = "white";
        span.className = "visible";
        if (matches.length == 0) {
            matches.push(span.innerText);
            boxIds.push(span.id);
            divBox.push(box.id);
        }
        else if (matches.length == 1) {
            matches.push(span.innerText);
            boxIds.push(span.id);
            divBox.push(box.id);
            if (matches[0] == matches[1]) {
                flipped += 2;
                matches = [];
                boxIds = [];
                divBox = [];
            } 
            else {
                function reset(){
                    var box1 = document.getElementById(boxIds[0]);
                    var box2 = document.getElementById(boxIds[1]);
                    box1.className = "hidden";
                    box2.className = "hidden";
                    document.getElementById(divBox[0]).style.backgroundColor = "#333333";
                    document.getElementById(divBox[1]).style.backgroundColor = "#333333";
                    matches = [];
                    boxIds = [];
                    divBox = [];
                }
                setTimeout(reset, 700);
            } 
        }
    }
}