
function maximum(){
    let nbr;
    let max = 0;

    do {
        
        nbr = prompt("Veuillez entrez un chiffre");
        if(max == "" || parseInt(nbr) > max){
            max = parseInt(nbr);
        }

    } while(nbr != "")

    alert("le nombre le plus grand est : " + max);

}



