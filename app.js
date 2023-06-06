var medis = [
    [4],
    [4],
    [4],
    [1,2,3],
    [4,6],
    [5]
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