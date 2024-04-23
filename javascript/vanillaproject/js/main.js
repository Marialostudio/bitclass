'use strict'
/* IMPORTS */
/* VARIABLES */
const d = document;

const $signUp = d.getElementById('signUp');

/* EVENTS */
d.addEventListener('DOMContentLoaded', () => {
    eventListeners()
});

/* FUNCTIONS */
function eventListeners() {
    $signUp.addEventListener('submit', handleSubmit);
}

function handleSubmit(event) {
    event.preventDefault();

    const credentials = {
        id: 'fakeID1',
        name: $signUp.name.value,
        email: $signUp.email.value,
        password: $signUp.password.value,
    };
    console.log(credentials)
}
/* CODE */