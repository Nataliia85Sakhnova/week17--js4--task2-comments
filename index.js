// "use strict" - высшее общество

// Сделайте интерфейс для анонимных комментариев со спамфильтром. Необходимо реализовать отображение и добавление сообщений,
// а также функцию `checkSpam(str)`, заменяющую `'viagra'` или `'XXX'` на `***` Функция должна быть нечувствительна к регистру:

// Доработать сохранение комментариев из прошлого домашнего задания через веб-хранилище,
// дать возможность пользователю сохранять свое имя и аватарку при вводе и запоминать их.
// Аватарку задаем в виде ссылки на картинку в интернете. Работу с файлами тут использовать не нужно.*

const new_comment = (name, url, comment) => {
    const comments_conteiner = document.createElement("div");
    comments_conteiner.classList.add("user");

    const img = document.createElement("img");
    img.classList.add("img");
    img.alt = "avatar";
    img.src = url;

    const name_user = document.createElement("p");
    name_user.textContent = "krakozyabra";

    const comment_user = document.createElement("p");
    comment_user.textContent = ";dkfgjbsd.fkbjnsdfjbn";

    console.log(comments_conteiner);
    console.log(img);
    console.log(name_user);
    console.log(comment_user);
}
// добиться, что бы в консоль попадали все элементы с нужными значениями.
// два выводятся правильно, осталось поле с именем и поле с комментарием.
// Задание на звездочку, удочерить все элементы родительскому comment_container
// и что бы при выводе его в консоль выходило что-то подобное
// <div class="непомню-какой"> 
//   <img class="img" alt="avatar" src="http\\тот адрес какой введн при вызове фукнции">
//   <p>Diana(имя должно быть таким, какое прописано при вызове функции)</p>
//   <p>комментарий, который передан при вызове функции</p>
// </div>
// последовательность расположения атрибутов внутри тегов может быть разная. Это не важно, главное, что бы они там были.

new_comment('Diana', "https://thispersondoesnotexist.com/image", "lskjbndfk;vslgbm;sfgbkn");


// <!-- <div class="user">
// <img src="https://thispersondoesnotexist.com/image" alt="avatar" class="img">
// <p>Name</p>
// <p>Comment</p>
// </div> -->

const checkSpam = () => {

    //создаем переменную имя:
    const name = document.getElementById('name').value;
    const cont = document.getElementById('cont')

    //создаем переменную аватарка:
    // const ava = document.getElementById('ava').value;
    // ava.classList.add("ava");
    // ava.src = document.getElementById('ava').value;
    // ava.alt = "avatar";
    // console.log(ava.alt);

    // 1 взять значение инпута (ссылка на картинку) https://thispersondoesnotexist.com/
    // 2 создать элемент картинка (img)
    // 3 сделать свойство картинки .src ссылкой на картинку (из первого пункта)
    // 4 сделать свойство .alt равное чему-то (у тебя это строка avatar)
    // 5 добавить элемент (пункт2) куда-то (так же как ты добавляешь ниже текст)


    // создаем комментарий:
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



// код Дианы:
// const button = document.querySelector('.button-div');
// const container = document.querySelector('.container');

// button.addEventListener('click', () => {
//   const name = document.querySelector('.name').value;

//   const divImg = document.createElement('div');
//   divImg.classList.add('img-div');
//   // const ull = 'url(https://thispersondoesnotexist.com/image)';
//   console.log(`url(${name})`);
//   divImg.style.backgroundImage = `url(${name})`;
//   container.appendChild(divImg);


//   // document.querySelector('.img-div');
//   // console.dir(divImg);
// })