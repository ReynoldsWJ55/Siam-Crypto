const yearSpan = document.querySelector('#current-year');
const currentYear = new Date();
yearSpan.innerText = currentYear.getFullYear();