function pirminis(skaicius) {
    if (skaicius < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(skaicius); i++) {
        if (skaicius % i === 0) {
            return false;
        }
    }

    return true;
}

function palindromas(skaicius) {
    const skaiciusString = String(skaicius);
    const apverstasString = skaiciusString.split('').reverse().join('');
    return skaiciusString === apverstasString;
}

function rastiPalindromus(nuo, iki) {
    var palindromai = [];

    for (var i = nuo; i < iki; i++) {
        if (pirminis(i)) {
            if (palindromas(i)) {
                palindromai.push(i);
            }
        }
    }

    return palindromai;
}

var nuo = 1;
var iki = 10000000;

console.dir(rastiPalindromus(nuo, iki), {'maxArrayLength': iki});

