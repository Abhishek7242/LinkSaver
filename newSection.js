let sectiondoneBtn = document.getElementById('sectiondoneBtn')
let sectionName = document.getElementById('sectionName')
let sectionValue
let addBtnDivId
let parent
let addBtnDiv
let newSectionContainer = document.getElementById('newSectionContainer')
let mainNavbar = document.getElementById('mainNavbar')
let divClasses = ['position-absolute', 'top-0', 'w-100', 'd-flex', 'addPage', 'align-items-center']
let sectionInputBoxClasses=['inputBox','shadow-lg', 'flex-column', 'justify-content-cente', 'p-3', 'mb-5', 'bg-white', 'rounded', 'addBtn', 'col-3', 'bg-light', 'text-light', 'd-flex', 'my-3', 'pt-5']
let addImgBoxClasses = ['shadow-lg',  'p-3', 'mb-5',  'rounded', 'addBtn', 'col-3', 'text-light', 'd-flex', 'justify-content-center', 'align-items-center', 'm-3', 'my-3']
let sectionList = document.getElementById('sectionList')

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
    // if (isMobileDevice()) {
    //     // Code for mobile devices
    //     urlinput.value = '';
    //     nameinput.value = '';
    //     inputBox.style.width = '90%'
    //     inputBox.style.height = '400px'
    //     inputBox.style.left = '20px'
    //     inputBox.style.zIndex = 1
    //     inputBox.style.top = '100px'
    //     inputBox.style.margin = '0px!important'
    //     inputBox.style.opacity = 1
    //     // Add/remove classes or apply styles specific to mobile devices
    // } else {
    //     // Code for non-mobile devices
    //     // Add/remove classes or apply styles specific to non-mobile devices
    //     urlinput.value = '';
    //     nameinput.value = '';
    //     inputBox.style.width = '35%'
    //     inputBox.style.top = '100px'
    //     inputBox.style.height = '360px'
    //     inputBox.style.left = '30vw'
    //     inputBox.style.zIndex = 1
    //     inputBox.style.opacity = 1
    // }
}
sectiondoneBtn.addEventListener('click', (e) => {
    sectionList.style.display = 'none'
    
    // Function to simulate a double click on a given element
    e.preventDefault()
    
    
    if (sectionName.value == '') {
        return
    }
    else {
        sectionValue = sectionName.value
        sectionName.value = ''
        sectioninputBox.style.width = '12%'
        sectioninputBox.style.top = '-15px'
        sectioninputBox.style.height = '30px'
        sectioninputBox.style.right = '200px'
        sectioninputBox.style.zIndex = '-1'
        sectioninputBox.style.opacity = 0
        let sectionListH5 = document.createElement('h5')
        // sectionListH5.classList.add('mx-5')
        sectionListH5.innerText = sectionValue
        sectionList.appendChild(sectionListH5)

        // let h2 = document.createElement('h2')
        // h2.classList.add('mx-5')
        // h2.innerText = sectionValue
        // let div = document.createElement('div')
        // div.classList.add('w-100')
        // console.log(sectionValue)
        // div.id = sectionValue
        // addBtnDiv = document.createElement('div')
        // addBtnDiv.id = sectionValue + 'addBtn'
        
        // addBtnDiv.classList.add(...addImgBoxClasses);
        // let addBtnImg = document.createElement('img')
        // addBtnImg.src = 'add.png'
        
        // newSectionContainer.appendChild(div)
        // div.appendChild(h2)
        // div.appendChild(addBtnDiv)
        // addBtnDiv.appendChild(addBtnImg)
        // addBtnDivId = document.getElementById(addBtnDiv.id)
        // parent = document.getElementById(sectionValue)
        // console.log(addBtnDivId)
        sectioncancelBtn.addEventListener('click', () => {

            form.style.width = '20%'
            form.style.top = '0px'
            form.style.height = '300px'
            form.style.right = '200px'
            form.style.zIndex = '-1'
            form.style.opacity = 0
            
            })
        // addBtnDivId.addEventListener('click', () => {
        //     checkMobile(inputBox)

        //     doneBtn.addEventListener('click', (e) => {
        //         console.log('done button running from SECTION without refresh box')
        //         e.preventDefault()

        //         // Function to simulate a double click on a given element


        //         if (nameinput.value == '' || urlinput.value == '') {
        //             return
        //         }
        //         else {
        //             let h1 = document.createElement('h1')
        //             h1.innerText = nameinput.value + urlinput.value
        //             console.log(h1.innerText)
        //             parent.appendChild(h1)

        //         }
        //     })
        // })
        console.log(index)
        localStorage.setItem('sect'+index, sectionList.outerHTML)
        localStorage.setItem('sectionName' + index, sectionValue)
        
        
    }
})





 
    
    if (localStorage.length > 0) {
        let storedKeys = Object.keys(localStorage).filter((key) => key.startsWith('sect'));
        
        // Sort the stored keys based on index
        storedKeys.sort((a, b) => {
            let indexA = parseInt(a.slice(4));
            let indexB = parseInt(b.slice(4));
            return indexA - indexB;
        });
        storedKeys.forEach((key) => {
            let formHTML = localStorage.getItem(key);
            let sectionName = localStorage.getItem('sectionName' + key.slice(4));
            console.log(sectionName)
            let sectionListH5 = document.createElement('h5')
            // sectionListH5.classList.add('mx-5')
            sectionListH5.innerText = sectionName
            let h2 = document.createElement('h2')
            h2.classList.add('mx-5')
            h2.innerText = sectionName
            let div = document.createElement('div')
            div.classList.add('w-100')
            div.id = sectionName
            let addBtnDiv = document.createElement('div')
            addBtnDiv.id = sectionName + 'addBtn'
            
            addBtnDiv.classList.add(...addImgBoxClasses);
            let addBtnImg = document.createElement('img')
            addBtnImg.src = 'add.png'
            if (sectionName === null) {
                return
            }
            else if (sectionName == 'undefined') {
                return
            }
            else {
            sectionList.appendChild(sectionListH5)
            
            // newSectionContainer.appendChild(div)
            // div.appendChild(h2)
            // div.appendChild(addBtnDiv)
            // addBtnDiv.appendChild(addBtnImg)
        }
//         let addBtnDivId = document.getElementById(addBtnDiv.id)
//         let parent = document.getElementById(sectionName)
//             console.log(addBtnDivId)
//             addBtnDivId.addEventListener('click', () => {
// sectionList.style.display='block'
       

//             checkMobile(inputBox)
//             doneBtn.addEventListener('click', (e) => {
//                 console.log('done button running from SECTION box')
//             })
//             })
        
    })
}



