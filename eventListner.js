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
checkMobile(inputBox)

})
    cancelBtn.addEventListener('click', () => {
        hideTheInputPage(inputBox)



    })
let isTrue = false
downBtn.addEventListener('click', () => {
    if (isTrue == false) {

        sectionList.style.display = 'block'

        downBtn.style.transform = 'rotate(180deg)'

        isTrue = true
    } else {
        downBtn.style.transform = 'rotate(0deg)'
        sectionList.style.display = 'none'
        isTrue = false

    }

})
newSectionButton.addEventListener('click', () => {
    downBtn.style.transform = 'rotate(0deg)'
    sectionList.style.display = 'none'
    isTrue = false

    navLinks.classList.remove('show')
    if (isMobileDevice()) {
        // Code for mobile devices
        sectionName.value = '';
        sectioninputBox.style.width = '79%'
        sectioninputBox.style.top='100px'
        sectioninputBox.style.height = '300px'
        sectioninputBox.style.left = '40px'
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
    
  