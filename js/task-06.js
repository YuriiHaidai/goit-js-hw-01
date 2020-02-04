let input;
let total = 0;

while (input !== null) {
  input = prompt('Введите число');

  if (input === null) {
    break;
  }
  total += Number(input);
}

alert(`Общая сумма чисел равна ${total}`);
