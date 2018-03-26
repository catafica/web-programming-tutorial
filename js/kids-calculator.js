function countTo(n) {
    for (var i=1; i<=n;) {
       console.info(i);
       i++;
    }
}

function addNumbers(a,b) {
    console.info('primul numar este ' + a);
    console.info('al doilea numar este ' + b);
    for (; b>0 ;) {
        a++;
        b--;
        console.info(a + ' - au mai ramas ' + b + ' degetele')
    }
    console.info('suma este: ' + a);
}

var count = addNumbers(6,8);