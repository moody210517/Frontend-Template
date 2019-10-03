/**
Custom module for you to write your own javascript functions
**/
var Custom = function () {

    // private functions & variables

    var myFunc = function(text) {
        alert(text);
    }

    // public functions
    return {

        //main function
        init: function () {
            //initialize here something.            
        },

        //some helper function
        doSomeStuff: function () {
            myFunc();
        }
    };
}();


var init = function(){ 
    var input = document.getElementById("search");
  
    $("#search").on('keyup', function (e) {
        if (e.keyCode == 13) {
            //alert("ok");
        }
    });

    // jQuery(this).closest("tr").css('background-color', 'gray');     
    $('.bell').on("click",function(){                
        //document.getElementById("red_bell").innerHTML="&nbsp;";
        document.getElementById("red_bell").innerHTML="";      
    })
    
}





/***
Usage
***/
//Custom.init();
//Custom.doSomeStuff();