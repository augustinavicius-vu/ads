// Tinginio pavyzdys
function easyConvert(number, m, n)
{
    if (m ==  n) return number.toString(); // Sistemos sutampa
    /*
        Skaičių kovertuojam į string'ą, kurį vėliau su parseInt() funkcija ir m kintamuoju
        nurodome kelintainis tai skaičius ir galiausiai vėl visą turimą rezultatą konvertuojam
        su toString() funkcija į n-tainę sistemą.
    */
    else return parseInt(number.toString(), m).toString(n);    

}

// Normalus pavyzdys
function convert(number, m, n)
{
    var numberToNumbers = num => Number(num);                   // Funkcija konvertuoji string'ą į skaičių
    var numbers = Array.from(String(number), numberToNumbers);  // Skaičius suskaldomas į iš eilės einančius masyvo elementus

    // Skaičio konvertavimas iš m-tainės į 10-tainę
    var numberDec = 0;                          // Dešimtainės sistemos skaičius
    var inverseCount = numbers.length - 1;      // Skaičiaus skaitmenų skaičiavimas nuo galo
    for (var i = 0; i < numbers.length; i++)    // Ciklas pereinantis per visus "numbers" masyvo elementus iš eilės nuo pradžios
    {
        numberDec += parseInt(numbers[i] * Math.pow(m, inverseCount));  // Sumuojama prie dešimtainės skaičiaus kintamojo (numbers[i] * (m ^ inverseCount))
        inverseCount--;                                                 // Pereinama prie kito skaitmens
    }
    
    // Skaičio konvertavimas iš 10-tainės į n-tainę
    if (numberDec === 0) {
        return '0'; // Nulis jei nulis
    }

    let result = '';
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 

    while (numberDec > 0) {
        const remainder = numberDec % n;
        result = digits[remainder] + result;
        numberDec = Math.floor(numberDec / n);
    }

    return result;
}