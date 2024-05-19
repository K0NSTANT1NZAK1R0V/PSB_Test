document.addEventListener('DOMContentLoaded', function () {
    // Получаем ссылку на дисплей калькулятора
    var display = document.getElementById('display');
  
    // Получаем все кнопки калькулятора
    var buttons = document.querySelectorAll('.button');
  
    // Обходим все кнопки и добавляем обработчик клика
    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        // Получаем значение кнопки
        var value = this.value;
  
        // Если нажата кнопка "="
        if (value === '=') {
          // Выполняем вычисление и выводим результат на дисплей
          display.value = eval(display.value);
        } else if (value === 'C') {
          // Если нажата кнопка "C", очищаем дисплей
          display.value = '';
        } else if (value === '⌫') {
          // Если нажата кнопка "⌫", удаляем последний символ
          display.value = display.value.slice(0, -1);
        } else {
          // Добавляем значение кнопки к содержимому дисплея
          display.value += value;
        }
      });
    });

    // Добавляем обработчик для кнопки "="
    var equallyButton = document.getElementById('ButtonEqually');
    equallyButton.addEventListener('click', function () {
      // Выполняем вычисление и выводим результат на дисплей
      display.value = eval(display.value);
    });
  });
