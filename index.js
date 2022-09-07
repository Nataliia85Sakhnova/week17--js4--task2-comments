// Сделайте интерфейс для анонимных комментариев со спамфильтром. Необходимо реализовать отображение и добавление сообщений,
// а также функцию `checkSpam(str)`, заменяющую `'viagra'` или `'XXX'` на `***` Функция должна быть нечувствительна к регистру:
// let comment1 = checkSpam('buy ViAgRA now'); //результат buy *** now
// let comment2 = checkSpam('free xxx'); //результат free ***
// let comment3 = checkSpam("innocent rabbit"); //результат innocent rabbit

checkSpam = (str) => {
    // проверяем есть ли в заметке 'viagra'или 'XXX'
    // если нету, то вызываем функцию sendComment
    // если есть, то заменяем  'viagra' или 'XXX' на `***` и вызываем функцию sendComment
    // функция sendComment: клик - создание div - подключение классов - внутрь добавляем содержание инпута;
}

button_send.addEventListener(`click`, checkSpam(str)); //вызываем функцию по клику на кнопку Send