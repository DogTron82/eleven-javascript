// Gustavs lifpath nummer kod

function numerologyValues() {
	
//deklarerar input fields från html doc
    
   let lifepathmanad = parseInt(document.getElementById("maned").value);
   let lifepathdag = parseInt(document.getElementById("dag").value);
   let lifepathyear = parseInt(document.getElementById("year").value);

//Nu måste vi  bryta ut de olika delarna i de inputsen som kommit inn från formen.

// bryter upp førsta stringen 
//kontrollerar om dagar är fler än 9
//deklarerar variabel vardag til 0 
let vardag = 0;
const dag = (""+lifepathdag).split("");

if (lifepathdag >= 10) {

   
         vardag = +dag[0] + +dag[1];
   

   }

if(lifepathdag <= 9) {
      vardag = dag[0];
                     }



   //om dagar inte är mer än 9 behåller vi førsta antalet utan att bryta ut den i en sträng. Do nothing ;) 

   let varmanad = 0;
   const manad =  (""+lifepathmanad).split("");

   if (lifepathmanad >= 10) {
         varmanad = +manad[0] + +manad[1];
                            }

   if (lifepathmanad <= 9) {
      varmanad = manad[0];

   }
 

//om månader inte är mer än 9 så gör vi inget här, do nothing ;)
   


//här räknar vi ut år, det är alltid 4 värden i denna array oavsettt så här behøvs inga kontroller.
let year1 = 0;
const year = (""+lifepathyear).split("");  
   let simplyfyyear=  +year[0] + +year[1] + +year[2] + +year[3];

const year2 = (""+simplyfyyear).split("");  // här deklarear vi de årtal så att det blir en till array

if (simplyfyyear >= 10 ) {
  
   year1  = +year2[0] + +year2[1];
   console.log(year1);

}
if (simplyfyyear <= 9 ) { 

year1 = simplyfyyear;
console.log(year1);

}

//Korrekt beregning




let masternr = 0; //deklarerar vi master nr som vi kommer att skicka totalens värde till og sortera efter utfall i if kørning


const totalen = +vardag + +varmanad + +year1; //räknar ut totalen med innbyggada fel, check av fel kontrolleras nedan
const kontrollslutet = (""+totalen).split("");  // bygger en array for att korrigera om ett fel uppstått med för stort nr. 

if (totalen <= 9) {
   masternr = totalen

}

if (totalen > 10 ) {

   let kontrollnr = +kontrollslutet[0] + +kontrollslutet[1];
   masternr = kontrollnr;
}




if (totalen == 11 ) { // check på 11

    window.location.href = 'https://elevenjewelry.com/numerology/11-3';
   return  //avslutar funktionen


}

if (totalen == 22  ) { // check på 22

    console.log(masternr);
   window.location.href = 'https://elevenjewelry.com/numerology/22-3';
   return //avslutar funktionen
   
   
   }



//Kontrollerar så att ett nr alltid är hanterbart och kan justeras vid behov.    använder arrayen som skapats vid kontrollslutet och adderar ihop dem till en ny total så att nummerserier blir korrekt. 
   

                    
   






    



   






   

   

   
//segment för redirects baserat på nr. 

if (masternr == 1) {
   console.log(masternr);
   window.location.href = 'https://elevenjewelry.com/numerology/1-3';
   
   return
}

if (masternr == 2) {
   console.log(masternr);
   window.location.href = 'https://elevenjewelry.com/numerology/2-3';
   return
}

if (masternr == 3) {
   console.log(masternr);
   window.location.href = 'https://elevenjewelry.com/numerology/3-3';
   return
}
if (masternr == 4) {
   console.log(masternr);
   window.location.href = 'https://elevenjewelry.com/numerology/4-3';
   return
}


if (masternr == 5) {
      console.log(masternr);
      window.location.href = 'https://elevenjewelry.com/numerology/5-3';
      return
}
if (masternr == 6) {
   console.log(masternr);
   window.location.href = 'https://elevenjewelry.com/numerology/6-3';
   return
   
}
if (masternr == 7) {
   console.log(masternr);
   window.location.href = 'https://elevenjewelry.com/numerology/7-3';
   
}
if (masternr == 8) {
   console.log(masternr);   
   window.location.href = 'https://elevenjewelry.com/numerology/8-3';
   return
   
}

if (masternr == 9) {
   
   console.log(masternr);
   window.location.href = 'https://elevenjewelry.com/numerology/9-3';
   return
   
}


}



       

   
       

       
       


