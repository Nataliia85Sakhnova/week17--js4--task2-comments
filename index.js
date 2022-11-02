// пишу функцию, где создаю контейнер, имя, аву и коммент
// присваиваю им всем стили и чо там еще надо
// присваиваю им всем значения из полей ввода
// пишу функцию, где контейнер удочеряет имя, аву и коммент


// видео про сохранение данных в локальное хранилище
// подумать как можно примерить это к задаче, которую мы делали вчера (отредактировано) 
// В идеале составить план на русском


// проверяем знает ли уже система наше имя:
document.addEventListener("DOMContentLoaded", function (event) {
    if (localStorage.getItem("nameFromInput") != null) {
        document.getElementById("name").value = nameFromInput;
    }
});

// задаем значение будущих аргументов:
const nameFromInput = document.getElementById("name");
const urlFromInput = document.getElementById("ava");
const commentFromInput = document.getElementById("comment");

// сохраняем имя в локальное хранилище
if (localStorage.getItem('name') == null) {
    localStorage.setItem('name', nameFromInput)
}

const containerHTML = document.getElementById("cont");

const button = document.getElementById("button_send");

const adopt = (element, container) => {
    container.appendChild(element);
}

const new_comment = (name, url, comment) => {
    //создаем контейнер:
    const user_container = document.createElement("div");
    user_container.classList.add("user");

    //создаем внутренние элементы:
    const name_container = document.createElement("p");
    name_container.textContent = name;
    const url_container = document.createElement("img");
    url_container.src = url.value;
    const comment_container = document.createElement("p");
    comment_container.textContent = checkSpam(comment);



    //задаем всем стили:
    url_container.classList.add("img");
    url_container.alt = "avatar";

    adopt(name_container, user_container);
    adopt(url_container, user_container);
    adopt(comment_container, user_container);

    return user_container;
}

checkSpam = (item) => {
    const reg = /viagra|XXX/gi; //заменить на "***" i - замены без учета регистра, g - заменить все совпадения
    const comment = item.replace(reg, "***"); //готовый и проверенный комментарий
    return comment;
}

button.addEventListener("click", () => {
    const mustGoOn = new_comment(nameFromInput.value, urlFromInput, commentFromInput.value);
    adopt(mustGoOn, containerHTML);
})




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


// добиться, что бы в консоль попадали все элементы с нужными значениями.
// два выводятся правильно, осталось поле с именем и поле с комментарием.
// Задание на звездочку, удочерить все элементы родительскому comment_container