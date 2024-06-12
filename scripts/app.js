const myFullName = 'Ananthu Nair';
const myStudentNumber = '1147798';

console.log(`${myFullName} - ${myStudentNumber}`);

const headerContent = document.querySelector('h1');
headerContent.innerHTML = `${myFullName} - ${myStudentNumber}`;
headerContent.classList.add('headingPrimary');
