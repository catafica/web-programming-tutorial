function countTo(n) {
    for (var i=1; i<=n;) {
       console.info(i);
       i++;
    }
}

function addNumbers(a,b) {
    console.info('primul numar este ' + a);
    console.info('al doilea numar este ' + b);

    var suma = a; // numarul cel mai mare
    var degete = b; // min

    if(a<b) {
        suma = b;
        degete = a;
    }

    for (; degete>0 ;) {
        suma++;
        degete--;
        console.info(suma + ' - au mai ramas ' + degete + ' degetele')
    }
    console.info('suma este: ' + a);
}

var count = addNumbers(2,6);