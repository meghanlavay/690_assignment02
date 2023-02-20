let num1  = parseInt(prompt('Please enter an integer'));
let num2 = parseInt(prompt('Please enter a second integer'));

if (num1 > num2) {
    document.write('The larger integer is ' + num1 +'.');
} else if (num2 > num1) {
    document.write('The larger integer is ' + num2 +'.');
} else if (num1 === num2) {
    document.write('The integers are equal.');
} else {
    document.write('You did not enter two integers.');
}