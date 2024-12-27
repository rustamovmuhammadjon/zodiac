import { data } from "../js/data.js";


let select = document.querySelectorAll("#select");

select.forEach(el => {
    data.forEach(e => {
        let options = document.createElement('option');
        options.textContent = e.name;
        options.classList.add('options');
        el.appendChild(options);
        
    });
    console.log(select);
});
