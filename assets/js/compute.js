document.forms["computeform"].onsubmit = function(){
    var c = document.getElementById("age").value;
    var f = c+10;
    alert(f);
    return false;
}
