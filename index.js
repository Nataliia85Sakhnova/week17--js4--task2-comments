// Сделайте интерфейс для анонимных комментариев со спамфильтром. Необходимо реализовать отображение и добавление сообщений,
// а также функцию `checkSpam(str)`, заменяющую `'viagra'` или `'XXX'` на `***` Функция должна быть нечувствительна к регистру:

checkSpam = () => {
    const reg = /viagra|XXX/gi; //заменить на "***" i - замены без учета регистра, g - заменить все совпадения
    const comment = input.value.replace(reg, "***"); //готовый и проверенный комментарий
    const p = document.createElement("p");
    p.appendChild(document.createTextNode(input.value));
    p.classList.add("cont");
    cont.appendChild(p); //создание div - подключение классов - внутрь добавляем содержание инпута;
}

button_send.addEventListener(`click`, checkSpam); //вызываем функцию по клику на кнопку Send

// "2019 год подходит в конце концов"
// /конц.*/
// .+
// .*
// /конц[eао]+/
// /конц(е|ов)/
// /конце|концов/