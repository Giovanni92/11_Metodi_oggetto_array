
fruits = ['Apples', 'Apricots', 'Avocados','Bananas', 
'Boysenberries', 'Blueberries', 'Cherry'];

var fruttoTolto = fruits.splice(5,1);
console.log(fruits);    //* da array fruits senza Blueberries
console.log(fruttoTolto);  //*Blueberries

//----------------------------------------------------------------------

//Se volessi trovare un indice e rimuoverlo

var indexBananas = fruits.indexOf('Bananas');
console.log(indexBananas);  // 3

var fruttoTolto2 = fruits.splice(indexBananas,1);
console.log(fruits);    //array di fruits ma senza Bananas
console.log(fruttoTolto2);  //*[ 'Bananas' ]