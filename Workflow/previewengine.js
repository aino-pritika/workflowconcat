

$(document).ready(function(){
    $("#button").click(function(){
     var string=eval(wfPageRules.click["id#bt"]["var#temp"]["expr#init"]);
     
        console.log((wfPageRules.click["id#bt"]["var#temp"]["expr#init"]));
        $("#lb").html("Third STring is"+string);
            });
});
