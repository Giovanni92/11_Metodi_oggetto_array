

//array propz and methods

var days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY','FRIDAY', 'SUNDAY'];
 console.log(days.toString());

var arrayCopy = days.slice(0, 2);
// console.log(arrayCopy); //*[ 'MONDAY', 'TUESDAY' ]

var arrayCopy2 = days.slice();
arrayCopy2[1]='Martedì';
// console.log(arrayCopy2);    //La copia viene mod da Martedi in pos. 1, l'originale rimane invariato
// console.log(days);

//join ritorna una copia dell'array, NON modifica quekllo originale
var giorni =days.join(';');    ////Trasforma array in stringa
// console.log(giorni);
// console.log(days);  //days non viene modificato da join


//PUSH ci permette di aggiungere un elemento alla fine dell'array

days.push('pushato');
// console.log(days);

//UNSHIFT ci '' '' all'inizio dell'array
days.unshift('unshiftato');
// console.log(days);

//----------------------------------------------------------------------


//Per aggiungere un elemento alla N posizione
//SPLICE (indice, numeriElementiDaTogliere,elementiDaAggiungere)
//Primo param è indice dove voglio inserire primo elemento,
//Secondo param quanti elementi voglio togliere da quella posizione

days.splice(5, 0, 'SATURDAY');
console.log(days);


//Ora se voglio rimuovere un elemento dall'array, e salvarlo in una var nuova

fruits = ['Apples', 'Apricots', 'Avocados','Bananas', 
'Boysenberries', 'Blueberries', 'Cherry'];

var fruttoTolto = fruits.splice(5,1);
console.log(fruits);    //* da array fruits senza Blueberries
console.log(fruttoTolto);  //*Blueberries
