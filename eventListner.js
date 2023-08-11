let cancelBtn = document.getElementById('cancelBtn')
let addNewBox = document.getElementById('addNewBox')
let inputBox = document.getElementById('inputBox')
let sectioninputBox = document.getElementById('sectioninputBox')
let newSectionBtn = document.getElementById('newSectionBtn')
let sectioncancelBtn = document.getElementById('sectioncancelBtn')
let navLinks = document.getElementById('navLinks')
let navAddImg = document.getElementById('navaddImg')
function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

// Usage


addNewBox.addEventListener('click', () => {
    if (isMobileDevice()) {
        // Code for mobile devices
        urlinput.value = '';
        nameinput.value = '';
        inputBox.style.width = '90%'
        inputBox.style.height = '400px'
        inputBox.style.left = '20px'
        inputBox.style.zIndex = 1
        inputBox.style.top = '100px'

        inputBox.style.margin='0px!important'
        
        inputBox.style.opacity = 1
        // Add/remove classes or apply styles specific to mobile devices
    } else {
        // Code for non-mobile devices
        // Add/remove classes or apply styles specific to non-mobile devices
        urlinput.value = '';
        nameinput.value = '';
        inputBox.style.width = '35%'
        inputBox.style.top = '100px'

        inputBox.style.height='360px'
        inputBox.style.left='30vw'
        inputBox.style.zIndex=1
        inputBox.style.opacity=1
    }

})
    cancelBtn.addEventListener('click', () => {
        inputBox.style.width = '20%'
        inputBox.style.top = '0px'

        inputBox.style.height = '300px'
        inputBox.style.right = '200px'
        inputBox.style.zIndex = '-1'
        inputBox.style.opacity = 0

    })

newSectionBtn.addEventListener('click', () => {
    navLinks.classList.remove('show')
    if (isMobileDevice()) {
        // Code for mobile devices
        sectionName.value = '';
        sectioninputBox.style.width = '90%'
        sectioninputBox.style.top='100px'
        sectioninputBox.style.height = '400px'
        sectioninputBox.style.left = '22px'
        sectioninputBox.style.zIndex = 1
        sectioninputBox.style.margin='0px!important'
        
        sectioninputBox.style.opacity = 1
        // Add/remove classes or apply styles specific to mobile devices
    } else {
        // Code for non-mobile devices
        // Add/remove classes or apply styles specific to non-mobile devices
        sectionName.value = '';
        sectioninputBox.style.top = '100px'

        sectioninputBox.style.width='30%'
        sectioninputBox.style.height='300px'
        sectioninputBox.style.right='31vw'
        sectioninputBox.style.zIndex=1
        sectioninputBox.style.opacity=1
    }

})
    sectioncancelBtn.addEventListener('click', () => {
        sectioninputBox.style.width = '12%'
        sectioninputBox.style.top = '-15px'

        sectioninputBox.style.height = '30px'
        sectioninputBox.style.right = '200px'
        sectioninputBox.style.zIndex = '-1'
        sectioninputBox.style.opacity = 0

    })
let moonStarFill = document.querySelector('.bi-brightness-high-fill')
let moonStar = document.querySelector('.bi-moon-stars')
let box = document.querySelector('.box')

let nightMode = document.getElementById('nightMode')
let nightModeText = document.getElementById('nightModeText')
let mode = sessionStorage.getItem('mode')
console.log(mode)
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
    mainContainer.style.background = 'white'
    markedContainer.style.background = 'white'
    section1.style.background = 'white'
    nightMode.style.color = 'black'
    nightModeText.innerText = 'Night mode'
    navAddImg.style.background = 'none'

    // box.style.backgroundColor = 'none'

    let container = document.getElementById('container');
    let addBtns = container.querySelectorAll('.addBtn');
    let markcontainer = document.getElementById('markcontainer');
    let addBtns2 = markcontainer.querySelectorAll('.addBtn');

    // Convert NodeList to an array and then use forEach
    Array.from(addBtns).forEach(function (addBtn) {
        addBtn.classList.add('bS')
        addBtn.classList.remove('bSl')
    });
    
    Array.from(addBtns2).forEach(function (addBtn) {
        addBtn.classList.add('bS')
        addBtn.classList.remove('bSl')
    });
    
    
} else if(mode==='nightmode') {
    moonStar.style.display = 'none'
    moonStarFill.style.display = 'inline'
    mainContainer.style.background = 'black'
    markedContainer.style.background = 'black'
    section1.style.background = 'black'
    nightMode.style.color = '#fed494'
    navAddImg.style.background = '#fed494'

    // box.style.backgroundColor = 'white'
    nightModeText.innerText = 'Light mode'

    let container = document.getElementById('container');
    let addBtns = container.querySelectorAll('.addBtn');
    let markcontainer = document.getElementById('markcontainer');
    let addBtns2 = markcontainer.querySelectorAll('.addBtn');

    // Convert NodeList to an array and then use forEach
    Array.from(addBtns).forEach(function (addBtn) {
        addBtn.classList.add('bSl')
        addBtn.classList.remove('bS')
    });
    
    Array.from(addBtns2).forEach(function (addBtn) {
        addBtn.classList.add('bSl')
        addBtn.classList.remove('bS')
    });


    
    
}


nightMode.addEventListener('click', () => {
    let mainContainer=document.getElementById('mainContainer')
    
    let tag = document.querySelector('#nightMode svg')
    console.log(tag)
    let moonStarFill = document.querySelector('.bi-brightness-high-fill')
    let moonStar = document.querySelector('.bi-moon-stars')
    if (window.getComputedStyle(moonStar).display !== 'none'||mode==='lightmode') {
        moonStar.style.display ='none'
        moonStarFill.style.display = 'inline'
        mainContainer.style.background = 'black'
        markedContainer.style.background = 'black'
        section1.style.background = 'black'
        nightMode.style.color = '#fed494'
        navAddImg.style.background = '#fed494'

        nightModeText.innerText='Light mode'
        // box.style.backgroundColor = 'white'

        let container = document.getElementById('container');
        let addBtns = container.querySelectorAll('.addBtn');
        let markcontainer = document.getElementById('markcontainer');
        let addBtns2 = markcontainer.querySelectorAll('.addBtn');

        // Convert NodeList to an array and then use forEach
        Array.from(addBtns).forEach(function (addBtn) {
            addBtn.classList.add('bSl')
            addBtn.classList.remove('bS')
        });

        Array.from(addBtns2).forEach(function (addBtn) {
            addBtn.classList.add('bSl')
            addBtn.classList.remove('bS')
        });

        sessionStorage.setItem('mode','nightmode')
    } else {
        
        moonStar.style.display ='inline'
        moonStarFill.style.display = 'none'
        mainContainer.style.background = 'white'
        markedContainer.style.background = 'white'
        section1.style.background = 'white'
        nightMode.style.color = 'black'
        navAddImg.style.background = 'none'

        nightModeText.innerText = 'Night mode'
        // box.style.backgroundColor = 'none'

        let container = document.getElementById('container');
        let addBtns = container.querySelectorAll('.addBtn');
        let markcontainer = document.getElementById('markcontainer');
        let addBtns2 = markcontainer.querySelectorAll('.addBtn');

        // Convert NodeList to an array and then use forEach
        Array.from(addBtns).forEach(function (addBtn) {
            addBtn.classList.add('bS')
            addBtn.classList.remove('bSl')
        });

        Array.from(addBtns2).forEach(function (addBtn) {
            addBtn.classList.add('bS')
            addBtn.classList.remove('bSl')
        });
        sessionStorage.setItem('mode', 'lightmode')

    }
    

    })