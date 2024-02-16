//vars
const input = document.getElementById('number');
const output = document.getElementById('output');
const btn = document.getElementById('convert-btn');
const romanNumeral = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
};

//functions
function convertToRoman(num) {
    if(num === '' || num === null || num === undefined || isNaN(num)){
        return 'Please enter a valid number';
    }
    if(num <= 0){
        return 'Please enter a number greater than or equal to 1';
    }
    if(num > 3999){
        return 'Please enter a number less than or equal to 3999';
    }
    
    let roman = '';
    for (let key in romanNumeral) {
        while (num >= romanNumeral[key]) {
            roman += key;
            num -= romanNumeral[key];
        }
    }
    return roman;
}

//events
btn.addEventListener('click', () => {
    const roman = convertToRoman(input.value);
    output.innerHTML = roman;        
});


