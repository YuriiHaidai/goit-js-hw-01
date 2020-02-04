const CHINA = 100;
const CHILI = 250;
const AUSTRALIA = 170;
const INDIA = 80;
const YAMAYKA = 120;

let userChoise = prompt('Укажите страну');

if (userChoise === null) {
  alert('Доставка не оформлена');
} else {
  switch (userChoise.toUpperCase()) {
    case 'CHINA':
      alert(`Доставка в ${userChoise} будет стоить ${CHINA} кредитов`);
      break;

    case 'CHILI':
      alert(`Доставка в ${userChoise} будет стоить ${CHILI} кредитов`);
      break;

    case 'AUSTRALIA':
      alert(`Доставка в ${userChoise} будет стоить ${AUSTRALIA} кредитов`);
      break;

    case 'INDIA':
      alert(`Доставка в ${userChoise} будет стоить ${INDIA} кредитов`);
      break;

    case 'YAMAYKA':
      alert(`Доставка в ${userChoise} будет стоить ${YAMAYKA} кредитов`);
      break;

    default:
      alert('В вашей стране доставка не доступна');
  }
}
