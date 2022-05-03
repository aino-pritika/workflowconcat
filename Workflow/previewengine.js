$(document).ready(function () {
    $('.btn-action').on('click', function () {
        // console.log(wfs.action.name);
        $("div").html("Third String is:" +(wfs.todo["bt.value"]));
    });
});



$("bt").on("click", function () { $("div").html("Result String is" + wfs.todo) })



