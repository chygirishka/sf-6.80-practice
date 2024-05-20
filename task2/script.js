const consoleLog = document.querySelector("#consoleLog");

consoleLog.addEventListener("click", () => {
  alert("Метод нужен для вывода информации в консоль веб браузера.");
});

const alerT = document.querySelector("#alert");

alerT.addEventListener("click", () => {
  alert(
    "Метод нужен для вывода информации пользователю в виде диалогового окна с сообщением и кнопкой OK."
  );
});

const prompT = document.querySelector("#prompt");

prompT.addEventListener("click", () => {
  alert(
    "Метод нужен для вывода приглашения пользователю в виде диалогового окна с запросом на ввод текста."
  );
});
