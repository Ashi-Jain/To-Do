var myList = document.getElementsByTagName("li");
var i;
for (i = 0; i < myList.length; i++) {
    var span = document.createElement("span");
    var txt = document.createTextNode('\u00D7');
    span.className = 'close'
    span.appendChild(txt);
    myList[i].appendChild(span);
}

var close = document.getElementsByClassName("close");

var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none"
    }
}