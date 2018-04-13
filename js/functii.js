
function countTo(n) {
    var i = 1;
        while (i < n) {
            console.log(i);
            i++;
        }
}


function show_prime_numbers(n) {
     var i = 1;
     for (;i <= n;) {
         if (numereprime(i)) {
             console.log(i);
         }
         i++;
     }
}
function numereprime(n) {
    var i = 2;
    for (; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    } return true;
}
function numereprime(n) {
    var i = 2;
    for (; i < n; i++) {
        console.debug('i', i);
        if (n % i == 0) {
            console.info('found i', i);
            return false;
        }
    }
    console.warn('not found');
    return true;
}