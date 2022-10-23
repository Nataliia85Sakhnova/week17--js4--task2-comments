// "use strict" - высшее общество

// Сделайте интерфейс для анонимных комментариев со спамфильтром. Необходимо реализовать отображение и добавление сообщений,
// а также функцию `checkSpam(str)`, заменяющую `'viagra'` или `'XXX'` на `***` Функция должна быть нечувствительна к регистру:
// Доработать сохранение комментариев из прошлого домашнего задания через веб-хранилище,
// дать возможность пользователю сохранять свое имя и аватарку при вводе и запоминать их.
// Аватарку задаем в виде ссылки на картинку в интернете. Работу с файлами тут использовать не нужно.*













const new_comment = (name, url, comment) => {
    const comments_container = document.createElement("div"); //создали контейнер для комментария
    comments_container.classList.add("user"); //присвоили ему класс

    const img = document.createElement("img");
    img.classList.add("img");
    img.alt = "avatar";
    img.src = url;

    const name_user = document.createElement("p");
    // name_user.textContent = "name_user.textContent";

    const comment_user = document.createElement("p");
    // comment_user.textContent = "comment_user.textContent";

    const adopt = (a) => {
        const child = comments_container.appendChild(a);
        console.log(child);
    }
    adopt(img);
    adopt(name_user);
    adopt(comment_user);

    console.dir(comments_container);

}

new_comment('Diana', "https://thispersondoesnotexist.com/image", "наконец-то правильно выводится");










// добиться, что бы в консоль попадали все элементы с нужными значениями.
// два выводятся правильно, осталось поле с именем и поле с комментарием.
// Задание на звездочку, удочерить все элементы родительскому comment_container

checkSpam = () => {
    const name = document.getElementById('name').value
    console.log(name)
    const checkSpam = () => {

        const name = document.getElementById('name').value;
        const cont = document.getElementById('cont')

        const ava = document.getElementById('ava').value
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