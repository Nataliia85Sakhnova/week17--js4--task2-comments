// пишу функцию, где создаю контейнер, имя, аву и коммент
// присваиваю им всем стили и чо там еще надо
// присваиваю им всем значения из полей ввода
// пишу функцию, где контейнер удочеряет имя, аву и коммент


// задаем значение будущих аргументов:
const name1 = document.getElementById("name").value;
const url = document.getElementById("ava").value;
const comment = document.getElementById("comment").value;

const new_comment = (a, b, c) => {
    //создаем контейнер:
    const user_container = document.createElement("div");
    user_container.classList.add("user");

    //создаем внутренние элементы:
    name_container = document.createElement("p");
    url_container = document.createElement("img");
    comment_container = document.createElement("p");

    //задаем всем стили:
    url_container.classList.add("img");
    url_container.alt = "avatar";

    const adopt = (a) => {
        const child = user_container.appendChild(a);
        console.log(child);
    }

    adopt(name_container);
    adopt(url_container);
    adopt(comment_container);

    // console.dir(user_container);
    return;
}

new_comment(name1, url, comment);




const adopt_arguments = (a, b) => {
    // a удочеряет b;
    return;
}

adopt_arguments(name_container, name1);
adopt_arguments(url_container, url);
adopt_arguments(comment_container, comment);


// добиться, что бы в консоль попадали все элементы с нужными значениями.
// два выводятся правильно, осталось поле с именем и поле с комментарием.
// Задание на звездочку, удочерить все элементы родительскому comment_container

checkSpam = () => {
    const name = document.getElementById('name').value
    console.log(name);
    const checkSpam = () => {

        const name = document.getElementById('name').value;
        const cont = document.getElementById('cont');

        const ava = document.getElementById('ava').value;
        console.log(ava);
        const img = document.createElement('div').classList.add("img");

        const reg = /viagra|XXX/gi; //заменить на "***" i - замены без учета регистра, g - заменить все совпадения
        const comment = document.getElementById('comment').value.replace(reg, "***"); //готовый и проверенный комментарий
        const p = document.createElement("p");
        button_send.addEventListener(`click`, checkSpam);
    }
}





//создаем переменную аватарка:
// const ava = document.getElementById('ava').value;
// ava.classList.add("ava");
// ava.src = document.getElementById('ava').value;
// ava.alt = "avatar";
// console.log(ava.alt);

// console.log(document.querySelector(".img").style.backgroundImage)
// block.style.backgroundImage = "url
// 1 взять значение инпута (ссылка на картинку) https://thispersondoesnotexist.com/
// 2 создать элемент картинка (img)
// 3 сделать свойство картинки .src ссылкой на картинку (из первого пункта)
// 4 сделать свойство .alt равное чему-то (у тебя это строка avatar)
// 5 добавить элемент (пункт2) куда-то (так же как ты добавляешь ниже текст)

// "use strict" - высшее общество

// Сделайте интерфейс для анонимных комментариев со спамфильтром. Необходимо реализовать отображение и добавление сообщений,
// а также функцию `checkSpam(str)`, заменяющую `'viagra'` или `'XXX'` на `***` Функция должна быть нечувствительна к регистру:
// Доработать сохранение комментариев из прошлого домашнего задания через веб-хранилище,
// дать возможность пользователю сохранять свое имя и аватарку при вводе и запоминать их.
// Аватарку задаем в виде ссылки на картинку в интернете. Работу с файлами тут использовать не нужно.*