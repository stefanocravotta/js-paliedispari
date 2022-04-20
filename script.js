

/* 
1 - Palidroma
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


const btnPalindromo = document.getElementById("btn-palindromo");
let output = document.getElementById("risultato");


btnPalindromo.addEventListener('click', function() {

    const parolaUtente = document.getElementById("input-palindromo").value ;

    reverse(parolaUtente);

    let parolaReverse = reverse(parolaUtente);
    
    if(parolaUtente === parolaReverse){
        output.innerHTML = `La parola ${parolaUtente} è un palindromo`;
    }else{
        output.innerHTML = `La parola ${parolaUtente} non è un palindromo`;
    }
    
})


/* FUNCTIONS */

function reverse(word) {
    
    return word.split("").reverse().join("");

 }
