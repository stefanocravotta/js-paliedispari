

/* 
1 - Palindromo
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Bonus: L’inserimento avviene tramite un campo input 

2 - Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
Bonus: L’inserimento avviene tramite un campo input
*/

// 1 Palindromo
const btnPalindromo = document.getElementById("btn-palindromo");
let output = document.getElementById("risultato");


btnPalindromo.addEventListener('click', function() {

    const parolaUtente = document.getElementById("input-palindromo").value ;

    reverse(parolaUtente);

    let parolaReverse = reverse(parolaUtente);

    if(isNaN(parolaUtente)){
            if(parolaUtente === parolaReverse){
            output.innerHTML = `La parola ${parolaUtente} è un palindromo`;
        }else{
            output.innerHTML = `La parola ${parolaUtente} non è un palindromo`;
        }
    }else{
        alert("Inserire una parola !")

    }
    
    
    
})



// 2 PARI E DISPARI

const btnPariDispari = document.getElementById("btn-pari-dispari");
let outputPariDispari = document.getElementById("risultato-pari-dispari");
const numeroMin = 1;
const numeroMax = 5;
let verifica = false;
let scelta = "pari";
let error = false;

btnPariDispari.addEventListener('click', function(){
    
    const numeroUtente = document.getElementById("pari-dispari").value ;
    const numeroPc = getRandomNumber(numeroMin, numeroMax);
    const sceltaPariDispari = document.getElementById("scelta").value;

    pariDispari(numeroPc, parseInt(numeroUtente));

    if(numeroUtente > numeroMax || numeroUtente < 1){
        alert("Inserire un numero da 1 a 5 !")

    }else{
        if(verifica && sceltaPariDispari === "pari"){
                outputPariDispari.innerHTML = `La somma del numero scelto da te "${numeroUtente}" <br> e il numero random scelto dal computer "${numeroPc}" <br> è = ${pariDispari(numeroPc, parseInt(numeroUtente))} <br> quindi HAI VINTO!!!!`;
                console.log(verifica, scelta);
            }else if(verifica && sceltaPariDispari === "dispari"){
                outputPariDispari.innerHTML = `La somma del numero scelto da te "${numeroUtente}" <br> e il numero random scelto dal computer "${numeroPc}" <br> è = ${pariDispari(numeroPc, parseInt(numeroUtente))} <br> quindi HAI PERSO!!!!`;
                console.log(verifica, scelta);
            }else if(!(verifica) && sceltaPariDispari === "dispari"){
                outputPariDispari.innerHTML = `La somma del numero scelto da te "${numeroUtente}" <br> e il numero random scelto dal computer "${numeroPc}" <br> è = ${pariDispari(numeroPc, parseInt(numeroUtente))} <br> quindi HAI VINTO!!!!`;
                console.log(verifica, scelta);
            }else if(!(verifica) && sceltaPariDispari === "pari"){
                outputPariDispari.innerHTML = `La somma del numero scelto da te "${numeroUtente}" <br> e il numero random scelto dal computer "${numeroPc}" <br> è = ${pariDispari(numeroPc, parseInt(numeroUtente))} <br> quindi HAI PERSO!!!!`;
                console.log(verifica, scelta);
            }else{
                outputPariDispari.innerHTML = "Inserisci i dati corretti !"
            }

    }


    

})

/* FUNCTIONS */

// 1 Palindromo

function reverse(word) {
    
    return word.split("").reverse().join("");

 }

// 2 PARI E DISPARI

function getRandomNumber(min, max){

    return  Math.floor(Math.random() * (max - min +1) + min );
  
  }

function pariDispari(num1,num2) {
    
    let sum = num1 + num2;

    console.log(sum);

    if(sum % 2){
        verifica = false;
        scelta = "dispari";
    }else{
        verifica = true; 
        scelta = "pari";
       }

    return sum;

  }