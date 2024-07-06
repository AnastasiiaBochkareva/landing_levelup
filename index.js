function initScroll() {
    document.querySelectorAll('.btn__order').forEach(function(button) {
        button.addEventListener('click', function() {
            document.querySelector('.order').scrollIntoView({ behavior: 'smooth' });
        });
    });
}

function changeTextLength() {
    let cardTexts = document.querySelectorAll('.review__text');
    const maxLength = 200;
    cardTexts.forEach(function(cardText) {
        const text = cardText.textContent.trim();
        if (text.length > maxLength) {
            const trimmedText = text.substring(0, maxLength) + '...';
            cardText.textContent = trimmedText;
        }
    });
}

function checkPhoneInput() {
    document.getElementById('phone').addEventListener('input', function(e) {
        const validChars = '0123456789';
        let input = e.target.value;
        let filteredInput = '';
        for (let i = 0; i < input.length; i++) {
            if (validChars.indexOf(input[i]) > -1) {
                filteredInput += input[i];
            }
        }
        e.target.value = filteredInput;
    });
}

document.addEventListener('DOMContentLoaded', function() {
    initScroll();
    changeTextLength();
    checkPhoneInput();

    const timer = document.getElementById('timer');
    let time = 30 * 60; 
    const countdownInterval = setInterval(function() {
        if (time <= 0) {
            clearInterval(countdownInterval);
            return;
        }
        time = time - 1;
        const hours = Math.floor(time / 3600).toString().padStart(2, '0');
        const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
        const seconds = (time % 60).toString().padStart(2, '0');
        timer.textContent = hours + ":" + minutes + ":" + seconds;
    }, 1000);

    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            1270: { 
                slidesPerView: 3 
            },
            1120: { 
                slidesPerView: 2.5 
            },
            950: { 
                slidesPerView: 2.1 
            },
            700: { 
                slidesPerView: 1.3 
            },
            480: { 
                slidesPerView: 1.1 
            },
            320: { 
                slidesPerView: 1 
            },
        },
    });
});
