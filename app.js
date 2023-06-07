var medis = [
    [2,3],
    [4,5,1],
    [1,6,7],
    [2,8,9],
    [2,10,11],
    [3,12],
    [3,13],
    [4],
    [4],
    [5],
    [5],
    [6],
    [7]
]

function netusciuMasyvuIndeksai(masyvas) {
    return masyvas
        .map((vidinisMasyvas, indeksas) => (vidinisMasyvas.length > 0 ? indeksas + 1: null))
        .filter(indeksas => indeksas !== null);
}

function rastiCentra(medis) {
    while (true) {
        var laipsniai = [];
        for (var i = 0; i < medis.length; i++) {
            if (medis[i].length == 1) laipsniai.push(i + 1);
        }

        for (var i = 0; i < medis.length; i++) {
            if (laipsniai.includes(i + 1)) medis[i] = [];
        }

        var netustiMasyvai = netusciuMasyvuIndeksai(medis);
        if (netustiMasyvai.length == 1 || netustiMasyvai.length == 2) return netustiMasyvai;

        for (var i = 0; i < medis.length; i++) {
            medis[i] = medis[i].filter(medzioLapas => !laipsniai.includes(medzioLapas));
        }
    }
}

console.log(rastiCentra(medis));