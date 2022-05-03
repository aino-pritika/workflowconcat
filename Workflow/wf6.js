
var Text1=document.getElementsByName("Text1").value;
var Text2=document.getElementsByName("Text2").value;
var wfs={
    "action":
    {
        "name":"updatelabel",
        "on":".btn-action"
    }    ,
   
    "todo":{
      "bt.value":"Text1.value+Text2.value"
    
}
}
console.log(Text1);
console.log(Text2);
let string=Text1+Text2;
console.log(eval(string));
