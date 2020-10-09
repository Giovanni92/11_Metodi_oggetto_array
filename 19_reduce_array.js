//Filter - filtra array

var numbers = [2, 3 ,45 , 6 ,7 , 8 ,88, 6];
//Creo array di numeri solo pari


var evens = numbers.filter(function (elementiArray, indexParametroArray, ArrayVeroEpROPRIO) {
    //Qui metto la condixzione per cui il numero mi tornerà evens, pari
    return elementiArray%2===0;    //*deve essere pari

});

var odds = numbers.filter( function (elementiArray, indexParametroArray, ArrayVeroEpROPRIO) {
    //Qui metto la condixzione per cui il numero mi tornerà evens, pari
    return elementiArray%2!==0;    //*deve essere pari

});

// console.log(evens);
// console.log(odds);


//se volessimo usare le arrow function per snellire codice

var odds2 = numbers.filter( (elementiArray) => elementiArray%2!==0);
// console.log(odds2);


var allEvens = numbers.every(v => v%2==0);
// console.log('tutti pari ='+allEvens);   //*ritorna false, confronta ogni val se è pari

var tuttiPari = evens.every(v => v%2==0);
// console.log('tutti pari ='+tuttiPari);   

//----------------------------------------------------------------------


//Se vogliamo sommare tutti i valpori di un array
var sum = numbers.reduce(function( precedente, successivo) {
    return precedente + successivo;
})
console.log(sum);   //*165


//facendolo con arrow function
var sum2 = numbers.reduce( (precedente, successivo) =>
     precedente+successivo );

console.log(sum);   //*165



