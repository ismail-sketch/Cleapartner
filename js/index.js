
window.addEventListener('DOMContentLoaded', () => {
    'use strict'

    //burger===========================
    const icons = document.querySelectorAll('.icon');
            icons.forEach (icon => {
            icon.addEventListener('click', (event) => {
            icon.classList.toggle("open");
        });
    });

    //menu=============================

    const menuList = document.querySelector('.menu__list');
    const navIcon = document.querySelector('.nav-icon-7');
    const navIconSpan = document.querySelectorAll('.nav-icon-7 span');
    const underlay = document.querySelector('.underlay');

    navIcon.addEventListener('click', () => {
        underlay.classList.toggle('active');
        menuList.classList.toggle('active');
        navIcon.classList.toggle('active');
       document.querySelector('body').classList.toggle('active');
        //document.body.style.overflow = 'hidden';


        navIconSpan.forEach(span => {
            span.classList.toggle('active');
            //document.body.style.overflow = '';
        })
    })

    window.addEventListener('click', (e) => {
        if(e.target.classList.contains('underlay')) {
            underlay.classList.remove('active');
            menuList.classList.remove('active');
            navIcon.classList.remove('active');

            document.body.style.overflow = '';

            navIconSpan.forEach(span => {
                span.classList.remove('active');
            })

            icons.forEach (icon => {
                icon.classList.remove("open");
        });

        }
    })

// анимация хедера ===============================================
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if(scrollY > 50) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
})

//slider swiper ===================================================
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });


//адаптив контактов - перенос лого==================================================

const contactsLogoWrp = document.querySelector('.contacts__logo-wrp');
const contactsImgLogo = document.querySelector('.contacts__img-logo');
const contactsContentTopWrp =  document.querySelector('.contacts__content-top-wrp');
const contactsContentTop =  document.querySelector('.contacts__content-top');

window.addEventListener('resize', () => {
  if(document.body.clientWidth <= 910) {
    contactsLogoWrp.insertAdjacentElement('beforeend', contactsImgLogo);
    contactsContentTopWrp.classList.add('active');
    contactsContentTop.classList.add('active');
  } else {
    contactsContentTop.insertAdjacentElement('beforeend', contactsImgLogo);
    contactsContentTopWrp.classList.remove('active');
    contactsContentTop.classList.remove('active');
  }

})

if(document.body.clientWidth <= 910) {
  contactsLogoWrp.insertAdjacentElement('beforeend', contactsImgLogo);
  contactsContentTopWrp.classList.add('active');
  contactsContentTop.classList.add('active');
}

//Дата для футера=========================================

const date = document.querySelector('.date');
date.textContent = new Date().getFullYear();









});// edn domcontent


