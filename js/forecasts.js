let todayBtn = document.querySelector('.today-btn');
let weekBtn = document.querySelector('.week-btn');
let monthBtn = document.querySelector('.month-btn');
let yearBtn = document.querySelector('.year-btn');
let changeText = document.querySelectorAll('.zodiac-section__text');
let changeBtn = document.querySelectorAll('.zodiac-section__btn');

let ariesDayText1 = 'Сегодня ощутите прилив энергии и вдохновения, что поможет в достижении целей. Сосредоточьтесь на важных задачах и избегайте отвлечений. В личной жизни вас ожидает приятный сюрприз — не стесняйтесь проявлять инициативу.';
let ariesDayText2 = 'На работе возможен интересный проект, так что будьте открыты к новым предложениям. Обратите внимание на здоровье — выделите время для отдыха и расслабления. Вечером проведите время с близкими или займитесь хобби.';
let ariesWeekText1 = 'У Овнов первая половина недели будет напряженной, с возможными трудностями во взаимоотношениях с властями и законом. Если вы водите автомобиль, увеличивается вероятность нарушений ПДД и штрафов. Не лучшее время для судебных разбирательств, также могут возникнуть проблемы в учебе и турпоездках.';
let ariesWeekText2 = 'Во второй половине недели ситуация значительно улучшится. Поставленные планы будут выполняться с уверенностью. Вы можете почувствовать интуитивное предвидение, и многие идеи окажутся верными. Особенно успешно будут действовать те, кто умеет избегать лишнего внимания и использовать тайную поддержку влиятельных лиц.';
let ariesMonthText1 = 'Этот месяц будет динамичным и энергичным. Овны ощутят прилив уверенности и могут добиться успехов в работе, участвуя в новых проектах и проявляя инициативу.';
let ariesMonthText2 = 'Финансовая ситуация будет стабильной, но стоит избегать крупных трат. В личных отношениях повысится понимание и теплота, что создаст возможность для откровенных разговоров. Следите за здоровьем: физическая активность и правильное питание помогут поддержать энергию. Это хорошее время для обучения и саморазвития.';
let ariesYearText1 = 'Год будет динамичным и полным возможностей. Овны ощутят прилив энергии и стремление к целям. Ожидаются изменения на работе — новые проекты и повышения. Финансовая ситуация стабильна, но действуйте осмотрительно с тратами. В личных отношениях укрепятся связи благодаря откровенным разговорам. Уделяйте внимание здоровью через физическую активность и правильное питание.';
let ariesYearText2 = 'Этот год подходит для обучения и нового опыта. Будьте гибкими и открытыми к переменам.';




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

    changeText[0].textContent = ariesDayText1;
    changeText[1].textContent = ariesDayText2;
});

weekBtn.addEventListener('click', ()=> {
    changeBtn.forEach(btn => {
        btn.removeAttribute('id');
    });
    weekBtn.setAttribute('id', 'active-btn');

    changeText[0].textContent = ariesWeekText1;
    changeText[1].textContent = ariesWeekText2;
});

monthBtn.addEventListener('click', ()=> {
    changeBtn.forEach(btn => {
        btn.removeAttribute('id');
    });
    monthBtn.setAttribute('id', 'active-btn');

    changeText[0].textContent = ariesMonthText1;
    changeText[1].textContent = ariesMonthText2;
});

yearBtn.addEventListener('click', ()=> {
    changeBtn.forEach(btn => {
        btn.removeAttribute('id');
    });
    yearBtn.setAttribute('id', 'active-btn');

    changeText[0].textContent = ariesYearText1;
    changeText[1].textContent = ariesYearText2;
});

