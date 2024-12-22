let dark_mode = document.querySelector('.dropdown__dark');
let light_mode = document.querySelector('.dropdown__light');
let logo = document.querySelector('.logo');
let body = document.querySelector('body');

dark_mode.addEventListener('click', ()=>{
    light_mode.style.display = 'block';

    dark_mode.style.display = 'none';
    light_mode.style.top = '0';

    logo.style.filter = 'hue-rotate(180deg)';

    body.style.backgroundColor = '#050505';

    document.documentElement.style.setProperty("--black", "white");
    document.documentElement.style.setProperty("--white", "black");
});

light_mode.addEventListener('click', ()=>{
    dark_mode.style.display = 'block';
    light_mode.style.display = 'none'

    body.style.backgroundColor = 'white';

    document.documentElement.style.setProperty("--black", "black");
    document.documentElement.style.setProperty("--white", "white");
});
