"use strict";

let credits = 23500;
const pricePerDroid = 3000;
let totalPrice;

const ordered = Number(
  prompt("Какое количество дроидов Вы хотите приобрести?")
);

if (ordered !== null) {
  totalPrice = ordered * pricePerDroid;
  if (totalPrice > credits) {
    console.log("Недостаточно средств на счету!");
  } else {
    alert(
      `Вы купили ${ordered} дроидов, на счету осталось ${(credits =
        credits - totalPrice)} кредитов.`
    );
  }
} else {
  console.log("Отменено пользователем!");
}
