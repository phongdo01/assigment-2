function countAlphabet(str) {
    let count = 0;
    for (let i=0; i< str.length; i++) {
        const c = str[i]
        if (('a' <= c && c <= 'z') || ('A' <= c && c <= 'Z') || ('0' <= c && c <= '9')) {
            count++;
        }
    }
    return count;
}
function addStar(str, numberOfStar) {
    let starString = '';
    for (let i=0; i < numberOfStar; i++) {
        starString+='*';
    }
    return starString + str + starString;
}
function changeCharacter(str, c) {
    const lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let index = -1;
    for (let i=0; i < lower.length; i++) {
        if (lower[i] === c) {
            index = i;
        }
    }
    for (let i=0; i < upper.length; i++) {
        if (upper[i] === c) {
            index = i;
        }
    }
    if (index === -1) {
        return str;
    }
    const lowerCharacter = lower[index];
    const upperCharacter = upper[index];
    let tempString = '';
    for (let i=0; i<str.length; i++) {
        let character = str[i];
        if (character === lowerCharacter) {
            tempString+=upperCharacter;
        } else if (character === upperCharacter) {
            tempString+=lowerCharacter;
        } else {
            tempString+=character;
        }
    }
    return tempString;
}
function filterOddOrEven(array, oddOrEvent) {
    // if a number is odd, the surplus of it dividual 2 will be 1
    const surplus = (oddOrEvent === 'odd' || oddOrEvent === 'Odd') ? 1:0
    let newString = '';
    const length = array.length;
    for (let i=0; i < length; i++) {
        if (!isNaN(array[i]) && (array[i]%2 === surplus)) {
            continue;
        }
        //add " - " after each element except firt item
        if (newString.length > 0) {
            newString+='-'
        }
        newString += array[i];
    }
    return newString;
}
console.log(filterOddOrEven([1, 2, 'abc', 3, '4', 5], 'even'))