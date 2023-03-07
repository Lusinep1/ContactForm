const button = document.querySelector('#button');
const container = document.querySelector('#container');



function thankYou() {
    container.innerHTML = `<h2>Thank you for submitting your email.<button onclick="location.reload()">return</button></h2>`
}

button.addEventListener('click', thankYou);