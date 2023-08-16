let checkMobile = (inputBox) => {
    if (isMobileDevice()) {
        // Code for mobile devices
        urlinput.value = '';
        nameinput.value = '';
        inputBox.style.width = '90%'
        inputBox.style.height = '400px'
        inputBox.style.left = '20px'
        inputBox.style.zIndex = 1
        inputBox.style.top = '100px'

        inputBox.style.margin = '0px!important'

        inputBox.style.opacity = 1
        // Add/remove classes or apply styles specific to mobile devices
    } else {
        // Code for non-mobile devices
        // Add/remove classes or apply styles specific to non-mobile devices
        urlinput.value = '';
        nameinput.value = '';
        inputBox.style.width = '35%'
        inputBox.style.top = '100px'

        inputBox.style.height = '360px'
        inputBox.style.left = '30vw'
        inputBox.style.zIndex = 1
        inputBox.style.opacity = 1
    }
}

function hideTheInputPage(inputBox) {
    inputBox.style.width = '20%';
    // inputBox.style.top = '0px';

    inputBox.style.height = '300px';
    // inputBox.style.right = '200px';
    inputBox.style.left = '-100px';
    inputBox.style.zIndex = '-1';
    inputBox.style.opacity = 0;
}

// Example usage:

