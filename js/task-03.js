"use strict";

const ADMIN_PASSWORD = "jqueryismyjam";
let message;

const Entered_password = prompt("Введите пароль");

if (Entered_password === null) {
  message = "Отменено пользователем!";
} else if (Entered_password === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}

alert(message);
