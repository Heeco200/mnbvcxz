window.addEventListener('DOMContentLoaded', () => {
    // Loader
    const loader = document.querySelector(".loader");
    setTimeout(()=> {
        setTimeout(()=> {
            loader.style.display = "none";
        }, 1500)
        loader.style.opacity = "0"
    },2000)
    // Categori of Series JS
    const button_group = document.querySelector('.tabheader__items'),
        buttons = document.querySelectorAll('.tabheader__item'),
        contenetList = document.querySelectorAll('.tabcontent');

    function hideTabContent() {
        contenetList.forEach((item) => {
            item.style.display = "none"
        })

        buttons.forEach((item)=> {
            item.classList.remove("tabheader__item_active")
        })
    };

    function showTabContent(i=0) {
        contenetList[i].style.display = "block";
        contenetList[i].classList.add("fade")
        buttons[i].classList.add('tabheader__item_active')
    };

    button_group.addEventListener('click', (e)=>{
        if(e.target.classList.contains('tabheader__item')) {
            buttons.forEach((item, idx)=> {
                if(item === e.target) {
                    hideTabContent();
                    showTabContent(idx)
                }
            })
        } 
    });

    hideTabContent();
    showTabContent();

    const deadline = '2022-09-01';

    function getTimeRemaining(endtime) {
        const timer = Date.parse(endtime) - new Date(),
            days = Math.floor(timer/(1000 * 60 * 60 * 24)),
                hours = Math.floor(timer/(1000 * 60 * 60) % 24),
                    minutes = Math.floor(timer/(1000 * 60) % 60),
                        seconds = Math.floor(timer/(1000) % 60);

        return {timer, days, hours, minutes, seconds}
    }

    function getZero(num) {
        if (num<10&&num>0) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const htmlElem = document.querySelector(selector),
            d = htmlElem.querySelector('#days'),
                h = htmlElem.querySelector('#hours'),
                    m = htmlElem.querySelector('#minutes'),
                        s = htmlElem.querySelector('#seconds');
        let timerInterval = setInterval(updateClock, 1000);
        updateClock()
        function updateClock() {
            const date = getTimeRemaining(endtime);
            if (date.timer < 0) {
                d.innerHTML = 0;
                h.innerHTML = 0;
                m.innerHTML = 0;
                s.innerHTML = 0;
            } else {
                d.innerHTML = getZero(date.days);
                h.innerHTML = getZero(date.hours);
                m.innerHTML = getZero(date.minutes);
                s.innerHTML = getZero(date.seconds);
            }
            if (date.timer <= 0) {
                clearInterval(timerInterval)
            }
        }
    }

    setClock(".timer", deadline);
});