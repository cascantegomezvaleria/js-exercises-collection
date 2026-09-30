/*broken detector*/

function findSmallest(numbers) {
  let smallest = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > smallest) {
      smallest = numbers[i];
    }

    return smallest;
  }
}
