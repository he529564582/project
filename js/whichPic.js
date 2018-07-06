
function countBodychildnode(){
    var body_element =document.getElementsByTagName("body")[0];
    alert( body_element.childNodes.length)
}
function showPic(whichpic){
    var  source = whichpic.getAttribute("href");
    var palceholder = document.getAttribute("palceholder");
    palceholder.setattribute("src",source);
    var text = whichpic.getAttribute("title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue = txt;
}


