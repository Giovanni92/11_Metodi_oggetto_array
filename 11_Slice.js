
//array propz and methods

var days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY','FRIDAY', 'SUNDAY'];
console.log(days.toString());

var arrayCopy = days.slice(0, 2);
console.log(arrayCopy); //*[ 'MONDAY', 'TUESDAY' ]

var arrayCopy2 = days.slice();
arrayCopy2[1]='Martedì';
console.log(arrayCopy2);    //La copia viene mod da Martedi in pos. 1, l'originale rimane invariato
console.log(days);

