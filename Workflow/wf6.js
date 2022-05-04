

 function myFunc(a,b)
{
var wfs={
    "action":
    {
        "name":"updatelabel",
        "on":".btn-action"
    }    ,
   
    "todo":{
      "bt.val":"a+b"
    
}

}
let string=wfs.todo["bt.val"];
console.log(eval(string));
display(wfs);

}

function add()
{
 a = $('#Text1').val();
 b = $('#Text2').val();
myFunc(a,b);
console.log(a);
console.log(b);
}




