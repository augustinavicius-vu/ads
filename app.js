// Tinginio pavyzdys
function easyConvert(number, m, n)
{
    if (m ==  n) return number.toString();              // Sistemos sutampa
    /*
        Skaičių kovertuojam į string'ą, kurį vėliau su parseInt() funkcija ir m kintamuoju
        nurodome kelintainis tai skaičius ir galiausiai vėl visą turimą rezultatą konvertuojam
        su toString() funkcija į n-tainę sistemą.
    */
    else return parseInt(number.toString(), m).toString(n);    

}

console.log(easyConvert(10, 10, 2));