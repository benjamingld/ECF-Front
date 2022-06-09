let lancer
let total
let i
let max = 0
let nbLancer

function des(nbLancer) {
    
    
    total=0
    lancer = new Array()
    nbLancer = parseInt(prompt("Nombre de lancée ?")); 
    for (i=0;i<nbLancer; i++){

        lancer = (Math.ceil(Math.random()*6));
        total = total + lancer;
        
    console.log("Lancer "+ i + ": " + lancer );

        // if(lancer(i)>max){
        //     max= lancer(i);

        // }



    }
console.log("total :" + total);
console.log("Le lancer le plus grand est : " + max);

}



