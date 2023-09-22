/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Mausham Bista';
let currentYear = new Date().getFullYear();
let profilePicture = './images/bihe.jpg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
let yearElement = document.querySelector('#year');
let imageElement = document.querySelector('img');

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */

let food = ['Thakali', 'Momo', 'Keema Noodles', 'Chick Fil A'];

foodElement.textContent = food;

let single_fav = 'Biryani';

food.push(single_fav);
foodElement.innerHTML += `<br>${food}`;
let firstFood = food.shift();
foodElement.innerHTML += `<br>${food}`;
food.pop();
foodElement.innerHTML += `<br>${food}`;