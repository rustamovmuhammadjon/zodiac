

let dark_mode = document.querySelector('.dropdown__dark');
let light_mode = document.querySelector('.dropdown__light');
let change_img_color = document.querySelectorAll('.change-color');
let body = document.querySelector('body');

dark_mode.addEventListener('click', ()=>{
    light_mode.style.display = 'block';

    dark_mode.style.display = 'none';
    light_mode.style.top = '0';

    change_img_color.forEach( e => {
        e.style.filter = 'invert(1)';
    });

    body.style.backgroundColor = '#050505';

    document.documentElement.style.setProperty("--black", "white");
    document.documentElement.style.setProperty("--white", "black");
});

light_mode.addEventListener('click', ()=>{
    dark_mode.style.display = 'block';
    light_mode.style.display = 'none'

    change_img_color.forEach( e => {
        e.style.filter = 'invert(0)';
    });

    body.style.backgroundColor = 'white';

    document.documentElement.style.setProperty("--black", "black");
    document.documentElement.style.setProperty("--white", "white");
});
