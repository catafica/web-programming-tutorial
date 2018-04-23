
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
// function numereprime(n) {
//     var i = 2;
//     for (; i < n; i++) {
//         if (n % i == 0) {
//             return false;
//         }
//     } return true;
// }
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
};

function aduna() {
    total = 0;
    for (var i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

function divide3(n) {
    var i = 3;
    for (; i <= n; i = (i + 3)) {
        if (n % i == 0) {
            // console.info('i', i);
            return true;
        }
    }
    return false;
};

function divide5(n) {
    if  ( n % 5 == 0) {
        return true;
    }
    return false;
};

function shownumbers(m) {
    var i = 1;
    for (;i <= m; i++) {
        if (divide3(i) && divide5(i)) {
            console.log('buzzfeed'); }
            else if (divide3(i)) { console.log('buzz'); }
            else if (divide5(i)) { console.log('feed'); }
            else { console.log(i); }
    }
};

