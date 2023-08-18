
let moonStarFill = document.querySelector('.bi-brightness-high-fill')
let moonStar = document.querySelector('.bi-moon-stars')
let box = document.querySelector('.box')
let markedContainer = document.getElementById('markedContainer')
let nightMode = document.getElementById('nightMode')
let nightModeText = document.getElementById('nightModeText')
let mode = sessionStorage.getItem('mode')
// console.log(mode)
// if (mode === 'nightMode') {
//     moonStar.style.display = 'inline'
//     moonStarFill.style.display = 'none'
//     mainContainer.style.background = 'white'
//     markedContainer.style.background = 'white'
//     section1.style.background = 'white'
//     nightMode.style.color = 'black'
moonStarFill.style.display = 'none'
// }
if (mode === 'lightmode') {
    moonStar.style.display = 'inline'
    moonStarFill.style.display = 'none'
    mainContainer.style.background = '#FBFBE3'
    markedContainer.style.background = '#FBFBE3'
    section1.style.background = '#FBFBE3'
    nightMode.style.color = 'black'
    // nightModeText.innerText = 'Night mode'
    navAddImg.style.background = 'none'

    // box.style.backgroundColor = 'none'

    let container = document.getElementById('container');
    let addBtns = container.querySelectorAll('.addBtn');
    let markcontainer = document.getElementById('markcontainer');
    let addBtns2 = markcontainer.querySelectorAll('.addBtn');

    // Convert NodeList to an array and then use forEach
    Array.from(addBtns).forEach(function (addBtn) {
        // addBtn.classList.add('bS')
        addBtn.classList.remove('nightMode')
        addBtn.classList.add('lightMode')


        // addBtn.classList.remove('bSl')
    });

    Array.from(addBtns2).forEach(function (addBtn) {
        // addBtn.classList.add('bS')
        addBtn.classList.remove('nightMode')
        addBtn.classList.add('lightMode')

        // addBtn.classList.remove('bSl')
    });


} else if (mode === 'nightmode') {
    moonStar.style.display = 'none'
    moonStarFill.style.display = 'inline'
    mainContainer.style.background = '#010026'
    markedContainer.style.background = '#010026'
    section1.style.background = '#010026'


    nightMode.style.color = '#fed494'
    navAddImg.style.background = '#fed494'

    // box.style.backgroundColor = 'white'
    // nightModeText.innerText = 'Light mode'

    let container = document.getElementById('container');
    let addBtns = container.querySelectorAll('.addBtn');
    let markcontainer = document.getElementById('markcontainer');
    let addBtns2 = markcontainer.querySelectorAll('.addBtn');

    // Convert NodeList to an array and then use forEach
    Array.from(addBtns).forEach(function (addBtn) {
        // addBtn.classList.add('bSl')
        addBtn.classList.add('nightMode')
        addBtn.classList.remove('lightMode')

        // addBtn.classList.remove('bS')
    });

    Array.from(addBtns2).forEach(function (addBtn) {
        // addBtn.classList.add('bSl')
        addBtn.classList.add('nightMode')
        addBtn.classList.remove('lightMode')

        // addBtn.classList.remove('bS')
    });




}


nightMode.addEventListener('click', () => {
    let mainContainer = document.getElementById('mainContainer')

    let tag = document.querySelector('#nightMode svg')
    console.log(tag)
    let moonStarFill = document.querySelector('.bi-brightness-high-fill')
    let moonStar = document.querySelector('.bi-moon-stars')
    if (window.getComputedStyle(moonStar).display !== 'none' || mode === 'lightmode') {
        // moonStar.style.display ='none'
        // moonStarFill.style.display = 'inline'
        // mainContainer.style.background = '#010026'
        // markedContainer.style.background = '#010026'
        // section1.style.background = '#010026'

        // nightMode.style.color = '#fed494'
        // navAddImg.style.background = '#fed494'

        // // nightModeText.innerText='Light mode'
        // // box.style.backgroundColor = 'white'

        // let container = document.getElementById('container');
        // let addBtns = container.querySelectorAll('.addBtn');
        // let markcontainer = document.getElementById('markcontainer');
        // let addBtns2 = markcontainer.querySelectorAll('.addBtn');

        // // Convert NodeList to an array and then use forEach
        // Array.from(addBtns).forEach(function (addBtn) {
        //     // addBtn.classList.add('bSl')
        //     addBtn.classList.add('nightMode')
        //     addBtn.classList.remove('lightMode')

        //     // addBtn.classList.remove('bS')
        // });

        // Array.from(addBtns2).forEach(function (addBtn) {
        //     // addBtn.classList.add('bSl')
        //     addBtn.classList.add('nightMode')
        //     addBtn.classList.remove('lightMode')

        //     // addBtn.classList.remove('bS')
        // });

        sessionStorage.setItem('mode', 'nightmode')
    } else {

        // moonStar.style.display ='inline'
        // moonStarFill.style.display = 'none'
        // mainContainer.style.background = 'white'
        // markedContainer.style.background = 'white'
        // section1.style.background = 'white'
        // nightMode.style.color = 'black'
        // navAddImg.style.background = 'none'

        // // nightModeText.innerText = 'Night mode'
        // // box.style.backgroundColor = 'none'

        // let container = document.getElementById('container');
        // let addBtns = container.querySelectorAll('.addBtn');
        // let markcontainer = document.getElementById('markcontainer');
        // let addBtns2 = markcontainer.querySelectorAll('.addBtn');

        // // Convert NodeList to an array and then use forEach
        // Array.from(addBtns).forEach(function (addBtn) {
        //     // addBtn.classList.add('bS')
        //     addBtn.classList.add('lightMode')
        //     addBtn.classList.remove('nightMode')

        //     // addBtn.classList.remove('bSl')
        // });

        // Array.from(addBtns2).forEach(function (addBtn) {
        //     // addBtn.classList.add('bS')
        //     addBtn.classList.add('lightMode')
        //     addBtn.classList.remove('nightMode')


        //     // addBtn.classList.remove('bSl')
        // });
        sessionStorage.setItem('mode', 'lightmode')

    }
    location.reload()

})