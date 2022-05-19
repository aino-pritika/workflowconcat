


var wfPageRules = {
    'click' : {
        'id#bt' : {
            'var#temp' : { 'expr#init' : "text1.value + text2.value "},
            'set#l1.value' : "var#temp"
       }
    },
    'ondblclick' :{
        'set#l1.value':"var#temp"
    }
    };
   