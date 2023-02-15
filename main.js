'use strict';

const button1 = document.querySelector('.button-1');
const button2 = document.querySelector('.button-2');

function goTo(e) {
    const buttonUrl = e.target.getAttribute('data-url');
    
    if ( buttonUrl.indexOf('https://') !== -1) {
        document.location.assign(`${buttonUrl}`);
    } if ( buttonUrl.indexOf('http://') !== -1) {
        document.location.assign(`${buttonUrl}`);
    } else {
        document.location.assign('https://' + `${buttonUrl}`);
    }
};

button1.addEventListener('click', goTo);
button2.addEventListener('click', goTo);