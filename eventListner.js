let cancelBtn = document.getElementById('cancelBtn')
let addNewBox = document.getElementById('addNewBox')
let inputBox = document.getElementById('inputBox')
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
        inputBox.style.margin='0px!important'
        
        inputBox.style.opacity = 1
        // Add/remove classes or apply styles specific to mobile devices
    } else {
        // Code for non-mobile devices
        // Add/remove classes or apply styles specific to non-mobile devices
        urlinput.value = '';
        nameinput.value = '';
        inputBox.style.width='35%'
        inputBox.style.height='360px'
        inputBox.style.left='30vw'
        inputBox.style.zIndex=1
        inputBox.style.opacity=1
    }

})
    cancelBtn.addEventListener('click', () => {
        inputBox.style.width = '20%'
        inputBox.style.height = '300px'
        inputBox.style.left = '-100px'
        inputBox.style.zIndex = '-1'
        inputBox.style.opacity = 0

    })
let nightMode=document.getElementById('nightMode')
nightMode.addEventListener('click', () => {


    let tag = document.querySelector('#nightMode svg')
    console.log(tag)
    let moonStarFill = document.querySelector('.bi-moon-stars-fill')
    let moonStar = document.querySelector('.bi-moon-stars')
    if (window.getComputedStyle(moonStar).display !== 'none') {
        moonStar.style.display ='none'
        moonStarFill.style.display = 'inline'
        mainContainer.style.background = 'black'
        markedContainer.style.background = 'black'
        section1.style.background = 'black'
        nightMode.style.color = 'white'
        
    } else {
        
        moonStar.style.display ='inline'
        moonStarFill.style.display = 'none'
        mainContainer.style.background = 'white'
        markedContainer.style.background = 'white'
        section1.style.background = 'white'
        nightMode.style.color = 'black'
    }
    

    })