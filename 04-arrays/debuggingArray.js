/*The function is supposed to return a new array containing only the numbers greater than the given limit.*/

function getNumbersAbove(numbers, limit) {

    let result = [];

    for (let i = 0; i <= numbers.length; i++) {

        if (numbers[i] < limit) {
            result.push(limit);
        }

    }

    return numbers;
}