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

    