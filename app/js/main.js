console.log('Hi from console!');

// =====================================================================
// fixed menu
const header = document.querySelector('.header');

if (header) {
  window.onscroll = function () {
    fixedHeader();
  };
}

function fixedHeader() {
  if (window.pageYOffset >= 50) {
    header.classList.add('header_fixed');
  } else {
    header.classList.remove('header_fixed');
  }
}

// ==============================================================
// burger js

const burger = document.querySelector('.burger');

if (burger) {
  burger.addEventListener('click', toggleMenu);
}

function toggleMenu() {
  const icon = document.querySelector('.icon-burger');
  const menu = document.querySelector('.menu-burger__list');
  const bodyLock = document.querySelector('body');
  icon.classList.toggle('active');
  menu.classList.toggle('active');
  bodyLock.classList.toggle('locked');
}

// =====================================================================
// form
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#signUp');
  if (form) {
    const input = document.querySelectorAll('input');
    form.addEventListener('submit', formSend);
  }

  async function formSend(e) {
    e.preventDefault();
    let error = formValidate(form);

    let formData = new FormData();
    formData.append('image', formImage.files[0]);

    if (error === 0) {
      let response = await fetch('sendmail.php', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        let result = await response.json();
        alert(result.message);
        form.reset();
      } else {
        alert('Error');
      }
    } else {
      alert('Fill in required fields');
    }
  }

  function formValidate(form) {
    let err = 0;
    let formReq = document.querySelectorAll('.req');

    for (let i = 0; i < formReq.length; i++) {
      const elem = formReq[i];
      formRemoveError(elem);

      if (elem.classList.contains('_email')) {
        if (emailTest(elem)) {
          formAddError(elem);
          err++;
        }
      } else if (elem.getAttribute('type') === 'ckeckbox' && elem.checked === false) {
        formAddError(elem);
        err++;
      } else {
        if (elem.value === '') {
          formAddError(elem);
          err++;
        }
      }
    }
    return err;
  }

  function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }

  function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }

  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }
});

// ====================================================================
// upTo

const toTop = document.querySelector('.toTop');

if (toTop) {
  window.onscroll = function () {
    scrollFunction();
    fixedHeader();
  };

  toTop.addEventListener('click', onTheTop);
}

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    toTop.classList.add('show');
  } else {
    toTop.classList.remove('show');
  }
}

function onTheTop() {
  let position = document.body.scrollTop !== 0 || document.documentElement.scrollTop !== 0;
  if (position) {
    window.scrollBy(0, -40);
    requestAnimationFrame(onTheTop);
  }
}
