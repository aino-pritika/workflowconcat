$(document).ready(function () {
    $('.btn-action').on('click', function () {
        console.log(wfs.action.name);
        $("div").html("Third String is:" + wfs.todo["bt.text"]);
    });
});



$("bt").on("click", function () { $("div").html("Result String is" + wfs.todo) })


function myFunction() {
    var firstname = $("#txt1").val();
    var lastname = $("#txt2").val();

    console.log(firstname);
    console.log(lastname);
    // myFunc(firstname,lastname);


    var jsonObj = [];
    jsonObj.push(wfs.todo["bt.text"]);
    var jsonString = JSON.stringify(jsonObj);
    console.log(jsonString);
    $("#l1").html("FirstName  and LastName is " + wfs.todo["bt.text"]);


}

