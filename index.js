// identify if a character is a vowel
let isVowel = function(char) {
    let vowels = "aeiou";
    for (let i = 0; i < vowels.length; i++) {
        if (vowels[i] === char) {
            return true;
        }
    }

    return false;
}

//identify if a word contains a vowel
let hasVowel = function(word) {
    let vowels = "aeiou";
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            return true;
        }
    }

    return false;
}

// *** main function ***
//remove the last vowel of a word
let removeLastVowel = function(word) {
    if (!hasVowel(word)) {
        return word;
    }

    let newWord = "word";
    let vowelCount = 0;
    for (let j = word.length - 1; j >= 0; j--) {
        if (isVowel(word[j]) && vowelCount < 1 ) {
            vowelCount++;
            newWord = word.slice(0, j) + word.slice(j + 1, word.length);

        }
    }

    return newWord;
}

//tests
console.log(removeLastVowel('bootcamp')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'
