
//In questo array di città ogni oggetto ha il nome e la regione
var cities = [

    {name:'TORINO',reg:'PIE'},
    {name:'ASTI',reg:'PIE'},
    {name:'MILANO',reg:'LOM'},
    {name:'COMO',reg:'LOM'}
];


//Per mostrare solo le città del Piemonte:
var cittaDelPiemonte = cities.filter(v => v.reg=='PIE');



//ci da il riferimento all'id city
var city = document.getElementById('city');

//Unordered List (Lista non ordinata)
var ul = document.createElement('ul');

//ciclo con la funz foreach che riceve gli stessi param della funzione filter
//ciclando cittaDelPiemonte vedrò solo le citta con REG ==='PIE' 
cittaDelPiemonte.forEach(function (elemento) {
    //per ogni città mi creo un elemento 'li'
    var li = document.createElement('li');

    //metto all'interno il nome della città
    li.innerHTML = elemento.name;

    //appiccico l'elemento alla lista
    ul.appendChild(li);
});

city.appendChild(ul);