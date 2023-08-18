let checkMobile = (inputBox) => {
    if (isMobileDevice()) {
        // Code for mobile devices
        urlinput.value = '';
        nameinput.value = '';
        inputBox.style.width = '79%'
        inputBox.style.height = '340px'
        inputBox.style.left = '40px'
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
function hideChildElements(parentDivId) {
    let parentDiv = document.getElementById(parentDivId);

    if (parentDiv) {
        let childElements = parentDiv.children;

        for (let i = 0; i < childElements.length; i++) {
            let child = childElements[i];
            child.style.display = 'none'; // Hide the child element
            child.style.setProperty('display', 'none', 'important');
            sessionStorage.setItem(child.id, 'none')
            
            console.log("Hiding child with ID:", child.id);
        }
    } else {
        console.error("Parent div not found.");
    }
}

// Example usage:


// Example usage:

// Example usage:

