//Доступаємся до елементів DOM-дерева
let getSel = x =>  document.querySelector(x);
//Створюємо масив із зображень 
let slider = document.getElementsByClassName('img');
// Порядковий номер слайда для перемикань
let numSlides = 0;
// Швидкість перемикань
let time;
// змінна яка визначає чи нажата кнопка "Play"/"Stop"
let playing = true;
//доступ до кнопки "Play"/"Stop" в DOM
let play = getSel('#control');

//Визначаємо наступний слайдер при автоматичному перемиканні
function nextSlides() {
    slider[numSlides].className = 'img';
    numSlides = (numSlides + 1) % slider.length;
    slider[numSlides].className = 'img show';
    radioB[numSlides].checked = true;
}

//починаємо показ слайдів
function goShow() {
    play.innerHTML = 'Pause';
    playing = true;
    time = setInterval(nextSlides, 2000);
}

//зупиняємо показ слайдів
function stopShow() {
    play.innerHTML = 'Play';
    playing = false;
    clearInterval(time);
}

//функція зміни режимів кнопки "Play"/"Stop"
play.onclick = function () {
    if (playing) {
        stopShow();
    } else {
        goShow();

    }
};

//створюємо масив radiobutton
let radioB = document.getElementsByClassName('im1');

//здійснюємо довільне перемикання слайдів з допомогою radiobutton
for (let i = 0; i < radioB.length; i++) {
    radioB[i].onclick = () => {
       slider[i].className = 'img show';
        if (i < radioB.length - 1) {
            slider[i + 1].className = 'img';
        }
        if (i >= 1) {
            slider[i - 1].className = 'img';
        }
    };
}

//здійснюємо почергове перемикання вправо
getSel('.right').onclick = () => {
    slider[numSlides].className = 'img';
    if (numSlides >= slider.length - 1) {
        numSlides = 0;
        slider[numSlides].className = 'img show';
    } else {
        numSlides++;
        slider[numSlides].className = 'img show';
        radioB[numSlides].checked = true; 
    }
};
//здійснюємо почергове перемикання вліво
getSel('.left').onclick = () => {
    slider[numSlides].className = 'img';
    if (numSlides <= 0) {
        numSlides = slider.length - 1;
        slider[numSlides].className = 'img show';
    } else {
        numSlides--;
        slider[numSlides].className = 'img show';
        radioB[numSlides].checked = true;
    }
};