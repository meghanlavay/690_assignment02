let score = prompt('Enter a number between 1 and 100');
if (score >= 90) {
    console.log('You received an A')
} else if (score >= 80) {
    console.log('You received an B')
} else if (score >= 70) {
    console.log('You received an C')
} else if (score >= 60) {
    console.log('You received an D')
} else if (score >= 50) {
    console.log('You received an F')
} else {
    console.log('Only numbers between 1 and 100 are accepted')
}
