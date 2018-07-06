window.onload =perpareLinks;
function perpareLinks(){
    var links = document.getElementsByTagName("a");
    for (var i=0;i<link.length;i++){
        if(links[i].getAttribute("class") == "popup"){
            links[i].onclick =function(){
                popUp(this.getAttribute("href"));
                return false;
            }
        }
    }
}