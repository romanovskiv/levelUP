document.addEventListener('DOMContentLoaded', function () {
  var splide = new Splide('.splide');
  splide.mount();
  var sec = 1800,
    countDiv = document.getElementById('timer'),
    secpass,
    countDown = setInterval(function () {
      'use strict';

      secpass();
    }, 1000);

  function secpass() {
    'use strict';

    var min = Math.floor(sec / 60),
      remSec = sec % 60;

    if (remSec < 10) {
      remSec = '0' + remSec;
    }
    if (min < 10) {
      min = '0' + min;
    }
    countDiv.innerHTML = min + ':' + remSec;

    if (sec > 0) {
      sec = sec - 1;
    } else {
      clearInterval(countDown);

      countDiv.innerHTML = 'Время вышло 😢';
    }
  }

  let menuBtn = document.querySelector('.menu-btn');
  let menu = document.querySelector('.menu');
  menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
  });

  const usernamePrompt = document.querySelector('.username-prompt');
  const telPrompt = document.querySelector('.tel-prompt');
  const inputName = document.querySelector('.username-input');
  const inputTel = document.querySelector('.username-tel');

  inputName.addEventListener('focusin', (event) => {
    usernamePrompt.style.display = 'block';
  });

  inputName.addEventListener('focusout', (event) => {
    usernamePrompt.style.display = 'none';
  });

  inputTel.addEventListener('focusin', (event) => {
    telPrompt.style.display = 'block';
  });

  inputTel.addEventListener('focusout', (event) => {
    telPrompt.style.display = 'none';
  });
});
