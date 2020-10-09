

//array propz and methods

var days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY','FRIDAY', 'SUNDAY'];
 console.log(days.toString());

var arrayCopy = days.slice(0, 2);
console.log(arrayCopy); //*[ 'MONDAY', 'TUESDAY' ]

var arrayCopy2 = days.slice();
arrayCopy2[1]='Martedì';
console.log(arrayCopy2);    //La copia viene mod da Martedi in pos. 1, l'originale rimane invariato
console.log(days);

//join ritorna una copia dell'array, NON modifica quekllo originale
var giorni =days.join(';');    ////Trasforma array in stringa
console.log(giorni);
console.log(days);  //days non viene modificato da join

//----------------------------------------------------------------------


//push ci permette di aggiungere un elemento alla fine dell'array

days.push('pushato');
console.log(days);

//unshift ci '' '' all'inizio dell'array
days.unshift('unshiftato');
console.log(days);