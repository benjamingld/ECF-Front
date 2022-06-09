// Variables
let moyenne1
let resultat
let note
let i


//Pour l'itération, soit i=0  et (i>5) pour commencé de 0 a 4.
//                , soit i=1  et (i>=5) pour commencé de 1 a 5.


//Fonction version Normal
    // function moyenne(nbNote){
    //     i=1;
    //     resultat=0;
    //     nbNote = parseInt(prompt("Saisir le nombre de notes"));

    //     while (i<=nbNote){
    //         note = parseInt(prompt("Saisir la note n° " + i));

    //         if (note<0 || note>20 || isNaN(note) == true){
    //             alert("Note incorrect")
    //         }else {
    //         resultat = resultat + note;
    //         i++;
    //         }
            
    //     }

    //     moyenne1 = resultat/nbNote

    //     alert("La moyenne de la classe est : " + moyenne1)
    // }



    
//fonction version anonyme



// isNaN () veut dire si pas de note entrer.
// On peut nommer une variable pareil que la fonction si seulement la variable est a l'interieur de la fonction.


let moyenne = function(nbNote){
    i=1;
    resultat=0;
    nbNote = parseInt(prompt("Saisir le nombre de notes"));

    while (i<=nbNote){
        note = parseInt(prompt("Saisir la note n° " + i ));

        // if (note<0 || note>20 || isNaN(note) == true ){
        //     alert("Note incorrect")
        // }else {
        resultat = resultat + note;
        i++;
        }

    moyenne1 = resultat/nbNote;

    alert("La moyenne de la classe est : " + moyenne1);
}