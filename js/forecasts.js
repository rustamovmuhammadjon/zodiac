import { data } from "./data.js";

let todayBtn = document.querySelector('.today-btn');
let weekBtn = document.querySelector('.week-btn');
let monthBtn = document.querySelector('.month-btn');
let yearBtn = document.querySelector('.year-btn');
let previousBtn = document.querySelector('.previous-btn');
let nextBtn = document.querySelector('.next-btn');

let nameText = document.querySelector('.zodiac-name');
let changeImg = document.querySelector('.change-img');
let changeText = document.querySelectorAll('.zodiac-section__text');
let changeBtn = document.querySelectorAll('.zodiac-section__btn');

let count = 0;
let arrayData;

function newData() {
    arrayData = data[count];

    nameText.textContent = arrayData.name;
    changeImg.src = arrayData.image;
    changeText[0].textContent = arrayData.weekInfo[0];
    changeText[1].textContent = arrayData.weekInfo[1];
    
    changeBtn.forEach(btn => {
        if (btn.id == 'active-btn') {
            changeBtn.forEach(e => {
                if (!e == btn) {
                    e.removeAttribute('id');
                }
            });
        }
    });

    todayBtn.addEventListener('click', ()=> {
        changeBtn.forEach(btn => {
            btn.removeAttribute('id');
        });
        todayBtn.setAttribute('id', 'active-btn');
        changeText[0].textContent = arrayData.dayInfo[0];
        changeText[1].textContent = arrayData.dayInfo[1];
    });

    weekBtn.addEventListener('click', ()=> {
        changeBtn.forEach(btn => {
            btn.removeAttribute('id');
        });
        weekBtn.setAttribute('id', 'active-btn');
        changeText[0].textContent = arrayData.weekInfo[0];
        changeText[1].textContent = arrayData.weekInfo[1];
    });

    monthBtn.addEventListener('click', ()=> {
        changeBtn.forEach(btn => {
            btn.removeAttribute('id');
        });
        monthBtn.setAttribute('id', 'active-btn');
        changeText[0].textContent = arrayData.monthInfo[0];
        changeText[1].textContent = arrayData.monthInfo[1];
    });

    yearBtn.addEventListener('click', ()=> {
        changeBtn.forEach(btn => {
            btn.removeAttribute('id');
        });
        yearBtn.setAttribute('id', 'active-btn');
        changeText[0].textContent = arrayData.yearInfo[0];
        changeText[1].textContent = arrayData.yearInfo[1];
    });

}

nextBtn.addEventListener('click', ()=> {
    count++;
    if (count >= data.length) {
        count = 0;
    }
    newData();
});

previousBtn.addEventListener('click', ()=> {
    if (count < 1) {
        count = data.length;
    }
    count--;
    newData();
});
console.log(data.length);

newData();