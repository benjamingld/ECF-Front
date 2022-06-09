function calcul (a,b,op) {

    let result=0;


    //VERSION SI


    // if(op == "+"){
    //     result = a+b;
    
    // }else if(op == "-"){
    //     result = a-b;

    // }else if(op == "*"){
    //     result = a*b;

    // }else if(op == "/"){
    //     if(b == 0){
    //         alert("impossible de diviser par 0");
    //     }else {
    //         result = a/b;   
    //     }


    // }   
    // alert(result);



    //VERSION SWITCH


    switch (op){
        case "+":
            result = a+b;
            break;
        case "-":
            result = a-b;
            break;
        case "*":
            result = a*b;
            break;
        case "/":
            if(b == 0){
                alert("impossible de diviser par 0");
            }else {
                result = a/b;
            break;
            }
        
    }
    return result;

  
}
