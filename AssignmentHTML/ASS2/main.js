 // Function random
 function random(){
    var num = parseInt(Math.random() * 10 + 1);
    var TapNumber = prompt(" tap a guess number betwn 1 to 10");
    if(isNaN(TapNumber)) {
    alert("Please, write a Number");
    
    } else {
        if(num == TapNumber){
            alert("Good Work");
        } else {
            alert("Not matched Number is = " + num);
        }
    }
}