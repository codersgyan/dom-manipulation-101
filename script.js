// DOM manipulation (Document object model)

// 1. getElementById
// const heading = document.getElementById('heading');
// console.log(heading);
//2. getElementsByTagName
// const heading = document.getElementsByTagName('h1');
// 3. getElementsByClassName
// const heading = document.getElementsByClassName('heading');
// 4. querySelector
// const heading = document.querySelector('.heading');
// 5. querySelectorAll
// const heading = document.querySelectorAll('.heading');
// console.log(heading);

// Traverse DOM
// 1. parentNode

// const heading = document.querySelector('.heading');
// const parent = heading.parentNode;
// console.log(parent);

// 2. childNodes
// const parent = document.querySelector('.parent');
// console.log(parent.childNodes);

// 3. nextElementSibling
// const heading = document.querySelector('.heading');
// console.log(heading.nextElementSibling);

// 3. previousElementSibling
// const subHeading = document.querySelector('h3');
// console.log(subHeading.previousElementSibling);

// Manipulation
// const heading = document.querySelector('.heading');
// heading.innerHTML = 'Web dev is awesome!';
// heading.style.color = 'red';
// heading.style.fontSize = '100px';
// heading.classList.add('title');
// heading.classList.remove('heading');

// Create elements
// const heading = document.createElement('h1');
// heading.innerHTML = 'Javascript is awesome!';
// heading.classList.add('title');
// const parent = document.querySelector('.parent');
// parent.appendChild(heading);

// const subHeading = document.createElement('h3');
// subHeading.innerHTML = 'Web dev is awesome!';
// heading.insertAdjacentElement('afterend', subHeading);

// console.log(heading);

// DOM events
// const button = document.querySelector('#btn');
// const heading = document.querySelector('#heading');

// button.addEventListener('click', function (event) {
//     heading.style.color = 'purple';
//     heading.style.fontSize = '60px';
//     console.log('button clicked', event);
// });

// const bulbSwitch = document.querySelector('#bulbSwitch');
// const bulb = document.querySelector('#bulb');

// bulbSwitch.addEventListener('click', function () {
//     console.log(bulb.src);
//     if (bulb.src.match('off')) {
//         bulb.src = './bulb-on.gif';
//         bulbSwitch.innerHTML = 'Turn OFF';
//     } else {
//         bulb.src = './bulb-off.gif';
//         bulbSwitch.innerHTML = 'Turn ON';
//     }
// });

const root = document.querySelector('#root');
const button = document.querySelector('button');

function createItem(item) {
    // Card
    const card = document.createElement('div');
    card.classList.add('card');

    // Photo
    const photo = document.createElement('img');
    photo.src = item.thumbnailUrl;

    // title
    const title = document.createElement('h4');
    title.innerHTML = item.title;
    card.appendChild(photo);
    card.appendChild(title);
    root.appendChild(card);
}

function displayImages(items) {
    items.forEach(function (item) {
        createItem(item);
    });
}

button.addEventListener('click', function () {
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
        .then((res) => res.json())
        .then((items) => {
            displayImages(items);
        });
});
