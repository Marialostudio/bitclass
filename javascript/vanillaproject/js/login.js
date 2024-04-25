'use strict'
/* IMPORTS */
/* VARIABLES */
const d = document;

const $logIn = d.getElementById('logIn');

const credentials = {
    email: null,
    emailValid: null,
    password: null,
    passwordValid: null,
};

let allowSubmit = false;

/* EVENTS */
d.addEventListener('DOMContentLoaded', () => {
    eventListeners()
});

/* FUNCTIONS */
function eventListeners() {
    $logIn.email.addEventListener('input', () => {
        checkInput('email');
    });
    $logIn.email.addEventListener('blur', () => {
        checkInput('email');
    });

    $logIn.password.addEventListener('input', () => {
        checkInput('password');
    });
    $logIn.password.addEventListener('blur', () => {
        checkInput('password');
    });

    $logIn.addEventListener('submit', handleSubmit);

}

function checkInput(inputName) {
    if (inputName === 'email') {
        const regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const $emailWarning = d.getElementById('emailWarning');
        credentials.email = $logIn.email.value.trim();
        credentials.emailValid = false;
        if (credentials.email == '') {
            $emailWarning.textContent = 'Please, enter your email address';
        } else if (!regExp.test(credentials.email)) {
            $emailWarning.textContent = 'Please, enter a valid email address';
        } else {
            $emailWarning.textContent = '';
            credentials.emailValid = true;
        }
    }
    if (inputName === 'password') {
        const $passwordWarning = d.getElementById('passwordWarning');
        credentials.password = $logIn.password.value.trim();
        credentials.passwordValid = false;
        if (credentials.password == '') {
            $passwordWarning.textContent = 'Please, enter your password';      
        } else {
            $passwordWarning.textContent = '';
            credentials.passwordValid = true;
        }
    }
    
    setAllowSubmit();
}

function setAllowSubmit() {
    allowSubmit =
    credentials.emailValid &&
    credentials.passwordValid;
    if (allowSubmit) {
        $logIn.submitButton.removeAttribute('disabled');
        $logIn.submitButton.classList.add('button-active');
        $logIn.submitButton.classList.remove('button-disabled');
    } else {
        $logIn.submitButton.setAttribute('disabled', true);
        $logIn.submitButton.classList.add('button-disabled');
        $logIn.submitButton.classList.remove('button-active');
    }
}



function handleSubmit(event) {
    event.preventDefault();
    if (allowSubmit) {
        console.log('submit: ', {
            email: credentials.email,
            password: credentials.password,
        });
        console.log('send data to the backend for log in');
        $logIn.reset();
        window.location.replace('http://127.0.0.1:5500/javascript/vanillaproject/private.html');
        } else {
            console.log('notify the user and do not allow sending data');
        }
}
/* CODE */