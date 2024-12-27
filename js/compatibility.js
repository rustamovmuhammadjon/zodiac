import { data } from "../js/data.js";
console.log(data);


let select = document.querySelectorAll("#select");


select.forEach(selected_el => {
    data.forEach(e => {
        let option = document.createElement('option');
        option.textContent = e.name;
        option.value = e.name;
        selected_el.appendChild(option);
    });
});
