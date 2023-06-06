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

function getNonEmptyArrayIndexes(array) {
    return array
        .map((subArray, index) => (subArray.length > 0 ? index + 1: null))
        .filter(index => index !== null);
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

        var skaicius = getNonEmptyArrayIndexes(medis);
        if (skaicius.length == 1 || skaicius.length == 2) return skaicius;

        for (var i = 0; i < medis.length; i++) {
            medis[i] = medis[i].filter(medzioLapas => !laipsniai.includes(medzioLapas));
        }
    }
}

console.log(rastiCentra(medis));