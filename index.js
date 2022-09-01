// Una variable que contenga tu altura en centímetros (entero).
let alturaCm = 180;

console.log(alturaCm);

// Una variable que contenga tu altura en metros (número de coma flotante).
let alturaMt = 1.83;

console.log(alturaMt);

// Una variable que contenga tu peso en kilogramos (número de coma flotante).
let PesoKg = 58.90;

console.log(PesoKg );

// Una variable que contenga tu altura en metros redondeada hacia arriba.
let arriba = Math.round(alturaMt, 1);
console.log(arriba)


// Una variable que contenga tu peso en kilogramos redondeado hacia abajo..
let abajo = Math.floor(PesoKg);
console.log(abajo);



/*Una variable que contenga si "el máximo valor que se puede obtener
en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript*/
let max1 = "el máximo valor que se puede obtener en Javascript + 1 = "
let max = Number.MAX_VALUE;
let maxm = max1 + max; 
console.log(maxm);