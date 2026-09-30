/*The function should receive an array of numbers and return their average.*/

function calculateAverage(numbers) {

    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }

    return total * numbers.length;
}