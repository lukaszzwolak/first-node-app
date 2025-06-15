const fs = require('fs');

const genders = ['M', 'F'];
const maleNames = ['John', 'Michael', 'David', 'James', 'Robert'];
const femaleNames = ['Mary', 'Patricia', 'Jennifer', 'Linda', 'Elizabeth'];
const lastNames = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown'];

function randChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

const people = [];
for (let i = 0; i < 20; i++) {
    const gender = randChoice(genders);
    const firstName = gender === 'M' ? randChoice(maleNames) : randChoice(femaleNames);
    const lastName = randChoice(lastNames);
    const age = Math.floor(Math.random() * (78 - 18 + 1)) + 18;

    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`;

    const phone = `+48 5${randDigit()}${randDigit()}-${randDigit()}${randDigit()}${randDigit()}-${randDigit()}${randDigit()}${randDigit()}`;

    people.push({
        gender,
        firstName,
        lastName,
        age,
        email,
        phone
    });

    function randDigit() {
        return Math.floor(Math.random() * 10);
    }

    const data = JSON.stringify(people, null, 2);
    
    fs.writeFile('people.json', data, (err) => {
        if (err) {
            console.error('Something went wrong');
            throw err;
        }

        console.log('File has been successfully generated!');
    });
}