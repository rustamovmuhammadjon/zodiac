import { data } from "../js/data.js";


let select = document.querySelectorAll("#select");
let sign1 = document.querySelector(".sign_1");
let sign2 = document.querySelector(".sign_2");
let calculateBtn = document.querySelector(".calculate-compatibility");
let result = document.querySelector('.result');
let chartLabel = document.querySelectorAll('.chart-label');
let chartImg = document.querySelectorAll('.chartImage');



function getSigns() {
    select.forEach(el => {
        data.forEach(e => {
            let options = document.createElement('option');
            options.textContent = e.name;
            options.value = e.id;
            options.classList.add('options');
            el.appendChild(options);
        });
    });
};

getSigns();

function Birxillik() {
    let resSign1;
    let resSign2;
    calculateBtn.addEventListener('click', () => {
        if (sign1.value==sign2.value) {
            data.forEach(e => {
                if (sign1.value==e.id) {
                    resSign1 = e.name;
                    resSign2 = e.name;
                    return resSign1, resSign2;
                };
                result.textContent = "Совместимость: " + resSign1 + " и " + resSign2;
            });
        } else{
            data.forEach(e => {
                if (sign1.value==e.id) {
                    resSign1 = e.name;
                    return resSign1;
                };
                if (sign2.value==e.id) {
                    resSign2 = e.name;
                    return resSign2;
                };
                result.textContent = "Совместимость: " + resSign1 + " и " + resSign2;
            });
        }
    });
};
Birxillik();


function graph() {
    let count = 0;
    chartImg.forEach(img => {
        count = count + 1;
        data.forEach(e => {
            if (count == e.id) {
                img.src = e.image;
            }
        });
    });
}
graph();