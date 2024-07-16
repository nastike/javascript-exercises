const reverseString = function(text) {
    const arrayOfStringGiven = text.split('');
    let newReversedString = '';
    for (let i = (arrayOfStringGiven.length-1); i >= 0; i-- )
        {
        newReversedString+= arrayOfStringGiven[i];
        
    }
    return newReversedString
};
// reverseString('hello')
// Do not edit below this line
module.exports = reverseString;
