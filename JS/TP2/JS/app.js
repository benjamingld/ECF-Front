// POUR TRIER LES CARTE
function initGame(){
       for(let i=0;i<100;i++){


    //generer 2 nombres dans des constantes
        const i1=Math.ceil(16*Math.random());
        const i2=Math.ceil(16*Math.random());

        //MELANGER 
    //selectionner les image
        let img1 = document.querySelector("div#n" + i1 + " img");
        let img2 = document.querySelector("div#n" + i2 + " img");

    //variable pour les src des images
    const SRC1 = img1.src;
    const SRC2 = img2.src;

    //les inverser
    img1.src = SRC2;
    img2.src = SRC1;


    }
}


let img,imgp;
let precedente = -1;
let attente = 0;
//RECUPERATION DE L'ENSEMBLE DES CARTES
//console.log(document.querySelectorAll("div.cellule"));
document.querySelectorAll("div.cellule").forEach(function(elm,index){
    elm.addEventListener('click',function(e){

        //le attente permet de ne pas pouvoire selectionné plus de 2 images
        if(attente !=1 && this.firstElementChild.dataset.affichage !="true" && this!=document.querySelector("div#n" + precedente)){
            //this = la cellule en cours ; firstelementchild c'est l'image
            console.log(this);
            img = this.firstElementChild;
            img.style.visibility = "visible";
            if(precedente<0){
                //SLICE PERMET DE SEGMENTER UNE CHAINE
                precedente = (this.id);
                console.log("Valeur précedente : " + precedente);
            }else{
                //PERMET DE RECUPERER L'IMAGE PRECEDENTE
                imgp = document.querySelector("div#"+precedente+" img");
                console.log(imgp.src,img.src);
                
                if(imgp.src == img.src){
                    //LES DEUX IMAGES SONT IDENTIQUES
                    console.log("image trouvé");
                    img.dataset.affichage = true;
                    imgp.dataset.affichage = true;
                } else{
                    attente = 1;
                    // IMAGE NON IDENTIQUE
                    setTimeout(cachePhotos,1500);
                    console.log('salut');

                }
                //REMETTRE PRECEDENTE A -1 ME PERMET DE RE-INITIALISER LE COUPLE IMGP IMG CAR SINON
                //IL CONSIDERE QUE IMGP C'EST TOUJOURS LA 1er IMAGE
                precedente = -1;
            }
        } else {
            console.log("ATTENTE = 1 ou image déjà trouvée ou meme case cliquée");
        }
    })
})



//PERMET DE CACHER LES IMAGES 
function cachePhotos(){
    img.style.visibility = "hidden";
    imgp.style.visibility = "hidden";
    attente = 0;
}
