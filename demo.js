
   function setitem(){
        localStorage.setItem("venkat", "venkatReddy");
    }
    function getitem(){
        var x=localStorage.getItem("venkat");
        document.getElementById("num1").innerHTML=x;
    }
    function removeitem(){
        localStorage.removeItem("venkat");
        document.getElementById("num1").innerHTML=null;
    }