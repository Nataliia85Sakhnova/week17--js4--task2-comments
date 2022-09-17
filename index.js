// Сделайте интерфейс для анонимных комментариев со спамфильтром. Необходимо реализовать отображение и добавление сообщений,
// а также функцию `checkSpam(str)`, заменяющую `'viagra'` или `'XXX'` на `***` Функция должна быть нечувствительна к регистру:

// Доработать сохранение комментариев из прошлого домашнего задания через веб-хранилище,
// дать возможность пользователю сохранять свое имя и аватарку при вводе и запоминать их.
// Аватарку задаем в виде ссылки на картинку в интернете. Работу с файлами тут использовать не нужно.*


checkSpam = () => {

    const name = document.getElementById('name').value
    console.log(name)


    const ava = document.getElementById('ava').value
    console.log(ava);
    const img = document.createElement('div').classList.add("img");

    // console.log(document.querySelector(".img").style.backgroundImage)
    // block.style.backgroundImage = "url

    const reg = /viagra|XXX/gi; //заменить на "***" i - замены без учета регистра, g - заменить все совпадения
    const comment = document.getElementById('comment').value.replace(reg, "***"); //готовый и проверенный комментарий
    const p = document.createElement("p");
    p.appendChild(document.createTextNode(comment));
    p.classList.add("p");
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