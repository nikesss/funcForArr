function sortWords(wordsArr) {
    wordsArr.sort();
    console.log(wordsArr);
}

function showArr(num, lenght) {
    let numbersArr = [3, 4, 51, 2345, 4132, 35, 54, -45, 1, 54, 333, 5454]
    let newNumbersArr = [];
    newNumbersArr = numbersArr.filter(elem => !(elem % num) && lenght-- > 0)
    console.log(newNumbersArr);
}

function summArr(numbersArr2) {

    let result = numbersArr2.reduce((num, elem) => num + Math.abs(elem), 0)
    console.log(result)
}

sortWords(['Apple', 'Windows', 'Add']);
showArr(2, 3);
summArr([3, -1, 5, -2, 34, -6, 8]);