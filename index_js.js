
var close_best1 = document.getElementById("item1container1");
var close_best2 = document.getElementById("item2container1");
var close_best3 = document.getElementById("item3container1");
window.onclick = function(event){

    if(event.target==close_best1 || event.target==close_best2 || event.target==close_best3){
        close_best1.style.display = "none";
        close_best2.style.display = "none";
        close_best3.style.display = "none";

    }



}


