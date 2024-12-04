
let move_zeros = function(numbers) {

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == 0){
      for (let j = i; j < numbers.length; j++) {
        numbers[j] = numbers[j+1]
      }
      numbers[numbers.length-1] = 0
    }
  }
  return numbers
}

list = [3, 0, 1, 2, 0, 6, 7]
console.log(move_zeros(list))


