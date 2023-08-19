let sectiondoneBtn = document.getElementById('sectiondoneBtn')
let newSectionButton  = document.getElementById('newSectionButton')
let sectionName = document.getElementById('sectionName')
let sectionListHome = document.getElementById('sectionListHome')
let downBtn = document.getElementById('downBtn')
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

newSectionButton.addEventListener('click', () => {
   
    // sectionList.style.display = 'none'
    
    // Function to simulate a double click on a given element
    // e.preventDefault()
    
    
    sectiondoneBtn.addEventListener('click', (e) => {
        e.preventDefault()
    if (sectionName.value == '') {
        console.log('error')
        return
    }
    else {
        sectionValue = sectionName.value
        // sectionName.value = ''
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
            console.log(index)
            localStorage.setItem('sect' + index, sectionList.outerHTML)
        localStorage.setItem('sectionName' + index, sectionValue)
        hideChildElements('mainContainer')
        // container.style.display = 'none';
        // container.style.setProperty('display', 'none', 'important');
        sessionStorage.setItem(sectionValue+'Container', 'flex')
            // sectioncancelBtn.addEventListener('click', () => {
                
            //     form.style.width = '20%'
            //     form.style.top = '0px'
            // form.style.height = '300px'
            // form.style.right = '200px'
            // form.style.zIndex = '-1'
            // form.style.opacity = 0
            
            // })
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
   

        
        
        }
        setTimeout(() => {
            location.reload()
        }, 310)
    })
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
        console.log(key)
        let formHTML = localStorage.getItem(key);
        let sectionName = localStorage.getItem('sectionName' + key.slice(4));
        console.log(sectionName)

   

        mode = sessionStorage.getItem('mode')
        let sectionListH5 = document.createElement('h5')
        // sectionListH5.classList.add('mx-5')
        sectionListH5.innerText = sectionName
        sectionListH5.id=sectionName
        let h2 = document.createElement('h2')
        h2.classList.add('mx-5')
        h2.classList.add('sectionListName')
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
                    let container = document.getElementById('container');
           

                        let mainContainer = document.getElementById('mainContainer');
                        // mainContainer.removeChild(mainContainer.lastChild);
                      
                        let container1 = document.createElement('div')
                        container1.id = sectionName + 'Container'
                        container1.classList.add('row')
                        container1.classList.add('d-flex')
                        container1.classList.add('mt-5')
                        container1.classList.add('p-4')
                        container1.classList.add('p-lg-0')
                        container1.classList.add('align-items-start')
                        container1.classList.add('bg-dange')
                        container1.classList.add('d-none')
                        container1.classList.add('justify-content-center')
                        container1.classList.add('col-11')
                        container1.classList.add('col-lg-12')
                        mainContainer.appendChild(container1)
                        // container1.appendChild(div)
                        container1.appendChild(h2)
                        container1.appendChild(addBtnDiv)
                    addBtnDiv.appendChild(addBtnImg)
                    let getTarget
                    let targetId = sectionName + 'Container'
                    let getContainer = sessionStorage.getItem('container')
                    if (getContainer===null) {
                        sessionStorage.setItem('container', 'flex')
                        
                    }
                    let getTargetFronSession = sessionStorage.getItem(targetId)
                    let all= sessionStorage.getItem(sectionName + 'Container')
                    
                    if (getContainer === 'none') {
                        markedContainer.style.display = 'none'
                        markedContainer.style.setProperty('display', 'none', 'important');
                        container.style.display = 'none';
                        container.style.setProperty('display', 'none', 'important');
                        sessionStorage.setItem('container', 'none')
                        
                    }
                    else {
                        hideChildElements('mainContainer')
                        let eTarget = document.getElementById(sectionName)
                        eTarget.style.background = '#949494'
                        sectionListHome.style.background = '#4f4f4f'
                        markedContainer.style.display = 'flex'
                        markedContainer.style.setProperty('display', 'flex', 'important');
                        container.style.display = 'flex';
                        container.style.setProperty('display', 'flex', 'important');
                       sessionStorage.setItem('container', 'flex')
                       
                    }
                    let id 
                    if (getTargetFronSession==='flex'){
                         id = sectionName + 'Container'
                        let eTarget = document.getElementById(sectionName)
                        eTarget.style.background = '#4f4f4f'
                        let getTarget = document.getElementById(id)
                        console.log(getTarget)
                        hideChildElements('mainContainer')
                         getTarget.style.display = 'flex'
                         getTarget.style.setProperty('display', 'flex', 'important');
                         sessionStorage.setItem(id, 'flex')
                    }

                    // hideChildElements('mainContainer')


                    sectionListHome.addEventListener('click', (e) => {
                        let targetId = sectionName + 'Container'
                            let getTarget = document.getElementById(targetId)
                            getTarget.style.display = 'none'
                            getTarget.style.setProperty('display', 'none', 'important');
    
                            markedContainer.style.display = 'flex'
                            markedContainer.style.setProperty('display', 'flex', 'important');
                            container.style.display = 'flex';
                            container.style.setProperty('display', 'flex', 'important');
                            sessionStorage.setItem('container', 'flex')
                            sessionStorage.setItem(targetId, 'none')
                            location.reload()
                            
                        })

                            let click = document.getElementById(sectionName)
                            click.addEventListener('click', (e) => {
                                
                                let targetId = e.target.id + 'Container'
                                console.log(e.target.id)
                            
                                let getTarget = document.getElementById(targetId)
                                markedContainer.style.display = 'none'
                                markedContainer.style.setProperty('display', 'none', 'important');
                                container.style.display = 'none';
                                container.style.setProperty('display', 'none', 'important');
                            
                                hideChildElements('mainContainer')
                                getTarget.style.display = 'flex'
                                getTarget.style.setProperty('display', 'flex', 'important');
                                
                                // sessionStorage.setItem(hideChildElements('mainContainer'),'none')
                                sessionStorage.setItem('container', 'none')
                                sessionStorage.setItem(targetId, 'flex')
                                location.reload()
                            })
                        let storedKeys = Object.keys(localStorage).filter((boxkey) => boxkey.startsWith(sectionName+'box'));

                        // Sort the stored keys based on index
                        let keyValue = sectionName.length + 3
                    console.log(keyValue)
                    



                        storedKeys.sort((a, b) => {
                            let indexA = parseInt(a.slice(keyValue));
                            let indexB = parseInt(b.slice(keyValue));
                            return indexA - indexB;
                        });
                        storedKeys.forEach((boxkey) => {
                            let box
                            console.log(boxkey)
                            let formHTML = localStorage.getItem(boxkey);
                            let inputHTML = localStorage.getItem(sectionName+'url' + boxkey.slice(keyValue));
                            let name = localStorage.getItem(sectionName+'name' + boxkey.slice(keyValue));
                            let background = localStorage.getItem(sectionName+'background' + boxkey.slice(keyValue));
                            let star = localStorage.getItem(sectionName+'star' + boxkey.slice(keyValue));
                            box = document.createElement('div')
                            box.classList.add('box')
                            box.classList.add(...boxClasses)
                            box.dataset.key = boxkey;
                      
                            mode = sessionStorage.getItem('mode')

                        let back
                        if (mode === 'lightmode' || !mode) {
                            back = ''
                        }
                        else {
                            back = '#3d0000'
                        }
                        if (background && background.startsWith('#')) {
                            box.style.background = `${background}`;

                        }
                        else if (background === 'undefined') {
                            box.style.background = `${back}`;

                        }
                        else {

                            box.style.background = `url('${background}') no-repeat center center / cover`;
                            }

                            let boxSpan = document.createElement('span')
                            // boxSpan.id = 'customize'+index
                            boxSpan.classList.add('customize')
                            boxSpan.role = 'button'
                            boxSpan.classList.add('svg')
                            boxSpan.classList.add('position-absolute')
                            boxSpan.classList.add('text-dark')
                            boxSpan.classList.add('align-self-end')
                            boxSpan.classList.add('top-0')
                            boxSpan.classList.add('mt-3')
                            const svgNS = 'http://www.w3.org/2000/svg';
                            const svgElement = document.createElementNS(svgNS, 'svg');
                            svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
                            svgElement.setAttribute('width', '16');
                            svgElement.setAttribute('height', '16');
                            svgElement.setAttribute('fill', 'currentColor');
                            svgElement.classList.add('bi', 'bi-pencil-fill');
                            svgElement.setAttribute('viewBox', '0 0 16 16');
                            const pathElement = document.createElementNS(svgNS, 'path');
                            pathElement.setAttribute('d', 'M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z');
                            svgElement.appendChild(pathElement);
                            let svgElement3

                            let boxSpan3 = document.createElement('span')
                            // boxSpan.3d = 'customize'+index
                            boxSpan3.classList.add('selected')
                            boxSpan3.role = 'button'
                            boxSpan3.dataset.key = key;

                            boxSpan3.classList.add('position-absolute')
                            boxSpan3.classList.add('svg')
                            boxSpan3.classList.add('text-dark')
                            boxSpan3.classList.add('align-self-start')
                            boxSpan3.classList.add('top-0')
                            boxSpan3.classList.add('mt-3')
                            const svgNS3 = 'http://www.w3.org/2000/svg';
                            svgElement3 = document.createElementNS(svgNS3, 'svg');
                            svgElement3.classList.add('text-warning')
                            svgElement3.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
                            svgElement3.setAttribute('width', '16');
                            svgElement3.setAttribute('height', '16');
                            svgElement3.setAttribute('fill', 'currentColor');
                            svgElement3.classList.add('bi', 'bi-star');
                            svgElement3.setAttribute('viewBox', '0 0 16 16');
                            const pathElement3 = document.createElementNS(svgNS3, 'path');
                            pathElement3.setAttribute('d', 'M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z');
                            let boxImg = document.createElement('img')
                            boxImg.classList.add('boxImg')
                            boxImg.classList.add('p-3')
                            // boxImg.src = "https://cutewallpaper.org/24/amazon-png-logo/amazon-icon-png-logo-symbol-black.png"
                            boxImg.setAttribute('height', '70px')
                            boxImg.setAttribute('width', '70px')
                            boxImg.style.background = 'rgba(0,0,0,0.3)'
                            boxImg.style.borderRadius = '7px'
                            let boxA = document.createElement('a')
                            boxA.classList.add('boxA')
                            // boxA.id = 'boxA' + index
                            let str = name
                            let extractedText
                            if (inputHTML.includes('https://') && inputHTML.includes('.com/')) {
                                const url = inputHTML;
                                const startIndex = url.indexOf('.com/') + 5;
                                const endIndex = url.indexOf('/', startIndex);
                                extractedText = url.substring(startIndex, endIndex);
                                boxA.href = url;
                                // console.log(boxA.href = url);
                            } else {
                                let url = 'https://' + encodeURIComponent(inputHTML) + '.com/'; // Encode the inputHTML before appending it to the URL
                                const startIndex = url.indexOf('.com/') + 5;
                                const endIndex = url.indexOf('/', startIndex);
                                extractedText = url.substring(startIndex, endIndex);
                                localStorage.setItem('url' + key.slice(4), url);
                                boxA.href = url;
                            }

                            // console.log(boxA.href)
                            boxA.classList.add('text-dark')
                            boxA.classList.add('bg-info')
                            boxA.classList.add('py-2')
                            boxA.classList.add('px-4')
                            function getWebsiteLogo(websiteUrl) {
                                // Construct the favicon URL based on the website URL
                                const faviconUrl = `${websiteUrl}/favicon.ico`;
                                boxImg.src = faviconUrl;
                                // Handle image load
                                boxImg.addEventListener('load', () => {
                                });
                                // Handle image error
                                boxImg.addEventListener('error', () => {
                                    console.log('The image failed to load, handle the error or use a default logo')
                                    boxImg.src = 'https://www.freepnglogos.com/uploads/logo-website-png/logo-website-website-logo-png-transparent-background-background-15.png'
                                });
                            }

                            // Retrieve logo button click event handler

                            const websiteUrl = extractedText;
                            // console.log(extractedText);
                            getWebsiteLogo(websiteUrl);
                            boxA.innerText = str[0].toUpperCase() + str.slice(1)
                            boxA.setAttribute('role', 'button')

                            let boxSpan2 = document.createElement('span')
                            boxSpan2.classList.add('dotBtn')
                            boxSpan2.classList.add('dotSvg')

                            boxSpan2.role = 'button'
                            boxSpan2.classList.add('svg')
                            boxSpan2.classList.add('position-absolute')
                            boxSpan2.classList.add('align-self-end')
                            boxSpan2.classList.add('bottom-0')
                            boxSpan2.classList.add('mb-3')

                            const svgNS2 = 'http://www.w3.org/2000/svg';
                            const svgElement2 = document.createElementNS(svgNS2, 'svg');
                            svgElement2.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
                            svgElement2.setAttribute('width', '16');
                            svgElement2.setAttribute('height', '16');
                            svgElement2.setAttribute('fill', 'currentColor');
                            svgElement2.classList.add('bi', 'bi-three-dots-vertical');
                            svgElement2.setAttribute('viewBox', '0 0 16 16');

                            const pathElement2 = document.createElementNS(svgNS2, 'path');
                            pathElement2.setAttribute('d', 'M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z');

                            svgElement2.appendChild(pathElement2);

                            let parentDiv = document.getElementById(sectionName+'Container'); // Replace 'parentDiv' with the actual ID of the parent div

                            // Set other properties for the 'box' element

                            let h2Element = parentDiv.querySelector('.sectionListName'); // Query the h2 element within the parent div
                            h2Element.parentNode.insertBefore(box, h2Element.nextSibling);
                        
                            box.appendChild(boxSpan)
                            boxSpan.appendChild(svgElement)
                            svgElement3.appendChild(pathElement3);
                            box.appendChild(boxSpan3)

                            // boxSpan3.appendChild(svgElement3)
                            box.appendChild(boxImg)
                            box.appendChild(boxA)
                            box.appendChild(boxSpan2)
                            boxSpan2.appendChild(svgElement2)

                            Array.from(parentDiv.getElementsByClassName('box')).forEach((element) => {


                                // 



                                element.addEventListener('mouseover', (e) => {
                                    // Assuming you have an event object 'e'
                                    // You want to target a child element with class 'customize' and set its display property to 'inline'

                                    // Get the parent element from the event target
                                    const parentElement = e.target;

                                    // Use querySelector to select the child element with class 'customize'
                                    const customizeElement = parentElement.querySelector('.customize');

                                    // Check if the element with class 'customize' was found
                                    if (customizeElement) {
                                        // Modify the CSS style of the element to set its display property to 'inline'
                                        customizeElement.style.display = 'inline';
                                    }

                                })



                                element.addEventListener('mouseleave', (e) => {
                                    // Assuming you have an event object 'e'
                                    // You want to target a child element with class 'customize' and set its display property to 'inline'

                                    // Get the parent element from the event target
                                    const parentElement = e.target;

                                    // Use querySelector to select the child element with class 'customize'
                                    const customizeElement = parentElement.querySelector('.customize');

                                    // Check if the element with class 'customize' was found
                                    if (customizeElement) {
                                        // Modify the CSS style of the element to set its display property to 'inline'
                                        customizeElement.style.display = 'none';
                                    }

                                })


                            })



                            Array.from(parentDiv.getElementsByClassName('customize')).forEach((element) => {

                                let backgroundBoxSpan = document.getElementById('cancelBackground')

                                // 



                                element.addEventListener('click', (ele) => {

                                    let backgroundBox = document.getElementById('backgroundBox')
                                    const makeAllPlays = () => {
                                        Array.from(document.getElementsByClassName('themeselect')).forEach((element) => {


                                            backgroundBox.remove();

                                        })
                                    }
                                    makeAllPlays()
                                    let mainNavbar = document.getElementById('mainContainer')
                                    let boxElements = document.querySelectorAll('.box');
                                    setTimeout(() => {
                                        boxElements.forEach((box) => {
                                            box.style.cssText = 'display: none !important;';
                                            boxImg.forEach((box) => {

                                                box.style.display = 'none';
                                            });
                                            let boxA = document.querySelectorAll('.boxA');

                                            boxA.forEach((box) => {

                                                box.style.display = 'none';
                                            });
                                        });
                                    }, 1);

                                    let boxImg = document.querySelectorAll('.boxImg');


                                    mainNavbar.style.height = '100vh'


                                    let backgroundBoxClasses = ['shadow-lg', 'justify-content-around', 'align-items-center', 'p-3', 'mb-5', 'bg-white', 'rounded', 'addBtn', 'col-3', 'bg-light', 'text-light', 'd-flex', 'm-3', 'my-3', 'pt-5', 'text-dark']
                                    let backgroundBoxLogoClasses = ['d-flex', 'align-items-center', 'w-100', 'position-absolute', 'top-0', 'justify-content-between', 'bg-info', 'w-100', 'px-2']
                                    let colorBoxClasses = ['d-flex', 'justify-content-start', 'align-items-start', 'mb-5']
                                    // console.log('runiiing')

                                    backgroundBox = document.createElement('div')
                                    backgroundBox.id = 'backgroundBox'
                                    backgroundBox.classList.add(...backgroundBoxClasses); // Add the classes to the 'div' element
                                    setTimeout(() => {
                                    if (isMobileDevice()) {
                                        // Code for mobile devices
                                        backgroundBox.style.alignSelf = 'center'
                                        backgroundBox.style.width = '90%'
                                        backgroundBox.style.height = '400px'
                                        backgroundBox.classList.add('mt-4')
                                        backgroundBox.style.left = '0px'
                                        backgroundBox.style.opacity = 1
                                        backgroundBox.style.zIndex = 1
                                        // Add/remove classes or apply styles specific to mobile devices
                                    } else {
                                        // Code for non-mobile devices
                                        // Add/remove classes or apply styles specific to non-mobile devices
                                        backgroundBox.style.alignSelf = 'start'
                                        backgroundBox.style.width = '50%'
                                        backgroundBox.style.height = '420px'
                                        backgroundBox.style.left = '400px'
                                        // backgroundBox.style.opacity = 1
                                        backgroundBox.style.zIndex = 1
                                    }
                                    }, 200)

                                    let backgroundBoxLogo = document.createElement('div')
                                    backgroundBoxLogo.classList.add(...backgroundBoxLogoClasses); // Add the classes to the 'div' element

                                    let backgroundBoxH4 = document.createElement('h4')
                                    backgroundBoxH4.innerText = 'Choose Background'
                                    backgroundBoxH4.classList.add('d-inline'); // Add the classes to the 'div' element

                                    let backgroundBoxSpan = document.createElement('span')
                                    backgroundBoxSpan.id = 'cancelBackground'
                                    backgroundBoxSpan.role = 'button'
                                    const svgMarkup = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
`;

                                    const svgNS = 'http://www.w3.org/2000/svg';
                                    const svgElement = document.createElementNS(svgNS, 'svg');
                                    svgElement.innerHTML = svgMarkup.trim();

                                    svgElement.setAttribute('width', '16');
                                    svgElement.setAttribute('height', '16');
                                    svgElement.setAttribute('viewBox', '0 0 16 16');

                                    const pathElement = svgElement.querySelector('path');

                                    // Now you can append the svgElement and pathElement to the desired container
                                    // For example:

                                    let colorAndThemeBox = document.createElement('div')
                                    colorAndThemeBox.classList.add('w-100')

                                    let colorBox = document.createElement('div')
                                    colorBox.classList.add(...colorBoxClasses); // Add the classes to the 'div' element

                                    let colorPickerLable = document.createElement('lable')
                                    colorPickerLable.setAttribute('for', 'colorPicker')
                                    colorPickerLable.innerText = 'Choose Color'

                                    let colorPicker = document.createElement('input')
                                    colorPicker.setAttribute('type', 'color')
                                    colorPicker.id = 'colorPicker'
                                    colorPicker.classList.add('mx-2')

                                    let themeBox = document.createElement('div')
                                    themeBoxLable = document.createElement('lable')
                                    themeBoxLable.innerText = 'Coose Theme'

                                    let theme1box = document.createElement('div')
                                    theme1box.classList.add('d-flex')
                                    theme1box.classList.add('justify-content-start')
                                    theme1box.classList.add('overflow')


                                    // container.appendChild(backgroundBox)
                                    let parentDiv = document.getElementById(sectionName + 'Container');
                                    // console.log(parentDiv)
                                    parentDiv.appendChild(backgroundBox)
                                    // let h2Element = parentDiv.querySelector('.sectionListName');
                                    // h2Element.parentNode.insertBefore(backgroundBox, h2Element.nextSibling);
                                    backgroundBox.appendChild(backgroundBoxLogo)
                                    backgroundBoxLogo.appendChild(backgroundBoxH4)
                                    backgroundBoxLogo.appendChild(backgroundBoxSpan)
                                    backgroundBoxSpan.appendChild(svgElement);
                                    backgroundBox.appendChild(colorAndThemeBox)
                                    colorAndThemeBox.appendChild(colorBox)
                                    colorBox.appendChild(colorPickerLable)
                                    colorBox.appendChild(colorPicker)
                                    colorAndThemeBox.appendChild(themeBox)
                                    themeBox.appendChild(themeBoxLable)
                                    let themeBoxArray = [
                                        { url: 'https://c4.wallpaperflare.com/wallpaper/987/319/586/windows-11-dark-theme-silk-hd-wallpaper-preview.jpg', name: 'Window' },
                                        { url: 'https://wallpaperaccess.com/full/7053055.jpg', name: 'Cosmic' },
                                        { url: 'https://getwallpapers.com/wallpaper/full/4/1/a/1192720-desktop-wallpaper-space-theme-1920x1080-full-hd.jpg', name: 'Earth' },
                                        { url: 'https://freerangestock.com/sample/51754/blue-background-indicates-swirling-bubble-and-twist.jpg', name: 'Bubble' },
                                        { url: 'https://is2-ssl.mzstatic.com/image/thumb/Purple122/v4/b1/58/26/b15826f6-c8ec-4017-e293-50052d6b00df/AppIcon-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg', name: 'Color' },
                                        { url: 'https://e0.pxfuel.com/wallpapers/239/996/desktop-wallpaper-40-best-finest-apple-for-and-for-your-mobile-tablet-explore-apple-laptop-mac-computer-apple-apple-background-macbook.jpg', name: 'Apple' },
                                        { url: 'https://images.pling.com/cache/400x400/img/00/00/70/79/44/2015869/seaside-resort-01.jpg', name: 'Nature' }
                                    ]

                                    let themeiboxh6
                                    let themeiinnerboxSpanImg
                                    let themeiinnerboxSpan
                                    let themeiinnerbox
                                    for (let i = 0; i < themeBoxArray.length; i++) {
                                        themeiinnerbox = document.createElement('div')
                                        themeiinnerbox.classList.add('d-flex')
                                        themeiinnerbox.classList.add('flex-column')
                                        themeiinnerbox.classList.add('justify-content-center')
                                        themeiinnerbox.classList.add('mx-2')
                                        themeiinnerbox.classList.add('align-items-center')

                                        themeiinnerboxSpan = document.createElement('span')
                                        themeiinnerboxSpan.classList.add('themeselect')
                                        themeiinnerboxSpan.classList.add('rounded-circle')
                                        themeiinnerboxSpan.classList.add('theme')

                                        themeiinnerboxSpanImg = document.createElement('img')
                                        themeiinnerboxSpanImg.src = themeBoxArray[i].url
                                        // console.log(themeBoxArray[i].url)
                                        // console.log(ele.target)

                                        themeiinnerboxSpanImg.setAttribute('height', '90px')
                                        themeiboxh6 = document.createElement('h6')
                                        themeiboxh6.innerText = themeBoxArray[i].name
                                        themeBox.appendChild(theme1box)
                                        theme1box.appendChild(themeiinnerbox)
                                        themeiinnerbox.appendChild(themeiinnerboxSpan)
                                        themeiinnerboxSpan.appendChild(themeiinnerboxSpanImg)
                                        themeiinnerbox.appendChild(themeiboxh6)

                                    }
                                    const makeAllPlays0 = () => {
                                        Array.from(document.getElementsByClassName('themeselect')).forEach((element) => {
                                            element.classList.remove('borderTheme');

                                        })
                                    }
                                    function findParentWithClass(element, className) {
                                        let parent = element.parentNode;
                                        while (parent !== null) {
                                            if (parent.classList && parent.classList.contains(className)) {
                                                console.log(parent)
                                                return parent;
                                            }
                                            parent = parent.parentNode;
                                        }
                                        return null; // If no parent with the class is found
                                    }
                                    function getKey(element, className) {
                                        let parent = element.parentNode;
                                        while (parent !== null) {
                                            if (parent.classList && parent.classList.contains(className)) {
                                                return parent.getAttribute('key');
                                            }
                                            parent = parent.parentNode;
                                        }
                                        return null; // If no parent with the class is found
                                    }
                                    function getLocalStorageKey(element) {
                                        let parent = element.parentNode;
                                        while (parent !== null) {
                                            if (parent.dataset.key) {
                                                return parent.dataset.key;
                                            }
                                            parent = parent.parentNode;
                                        }
                                        return null;
                                    }

                                    Array.from(document.getElementsByClassName('themeselect')).forEach((element) => {
                                        element.addEventListener('click', (e) => {
                                            makeAllPlays0();
                                            e.target.parentNode.classList.add('borderTheme');
                                            let srcValue = e.target.src;
                                            let box = findParentWithClass(ele.target, 'box');
                                            let key = box.getAttribute('data-key');
                                            console.log(key);

                                            box.style.backgroundImage = `url('${srcValue}')`;

                                            // Update the background value in localStorage
                                            if (key) {
                                                const backgroundKey = sectionName+'background' + key.slice(keyValue);
                                                localStorage.setItem(backgroundKey, srcValue);
                                            }

                                            box.style.backgroundRepeat = 'no-repeat';
                                            box.style.backgroundPosition = 'center center';
                                            box.style.backgroundSize = 'cover';
                                        });
                                    });

                                    backgroundBoxSpan.addEventListener('click', () => {
                                        backgroundBox.style.alignSelf = ''
                                        backgroundBox.style.width = ''
                                        backgroundBox.style.height = ''
                                        backgroundBox.style.left = '-400px'
                                        backgroundBox.style.opacity = 0
                                        backgroundBox.style.zIndex = 1
                                        setTimeout(() => {

                                            backgroundBox.remove();
                                            location.reload()
                                        }, 1000)
                                    })
                                    colorPicker = document.getElementById('colorPicker');
                                    console.log(colorPicker)
                                    colorPicker.addEventListener('change', () => {
                                        makeAllPlays0();

                                        // form.style.background = colorPicker.value
                                        let box = findParentWithClass(ele.target, 'box');
                                        let key = box.getAttribute('data-key');

                                        console.log(box);

                                        box.style.background = colorPicker.value;
                                        if (key) {
                                            const backgroundKey = sectionName+'background' + boxkey.slice(keyValue);
                                            localStorage.setItem(backgroundKey, colorPicker.value);
                                        }


                                    });


                                    // else {
                                    // backgroundBox.remove();

                                    // }
                                })
                            })



                            boxSpan2.addEventListener('click', () => {
                                console.log('running')
                                let buttonContainer = boxSpan2.querySelector('.buttonContainer');

                                if (!buttonContainer) {
                                    buttonContainer = document.createElement('div');
                                    buttonContainer.classList.add('buttonContainer');
                                    buttonContainer.style.display = 'flex';
                                    buttonContainer.style.flexDirection = 'column';
                                    buttonContainer.style.borderRadius = '3px';
                                    buttonContainer.style.top = '-28px'
                                    buttonContainer.style.right = '17px'
                                    buttonContainer.style.width = '100px';

                                    buttonContainer.style.border = '1px solid rgb(153, 153, 153)';
                                    buttonContainer.style.boxShadow = '  0 0 3px black'
                                    buttonContainer.style.position = 'absolute';

                                    let editBtn = document.createElement('button');
                                    let spanText = document.createElement('span')
                                    spanText.textContent = 'Edit';
                                    const svgNS = 'http://www.w3.org/2000/svg';
                                    const svgElement = document.createElementNS(svgNS, 'svg');
                                    svgElement.classList.add('bi', 'bi-pencil'); // Add the Bootstrap Icons classes
                                    svgElement.setAttribute('width', '16');
                                    svgElement.setAttribute('height', '16');
                                    svgElement.setAttribute('viewBox', '0 0 16 16');

                                    const pathElement = document.createElementNS(svgNS, 'path');
                                    pathElement.setAttribute('d', 'M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z');

                                    editBtn.classList.add('button');
                                    editBtn.classList.add('editbtn');
                                    editBtn.style.cursor = 'pointer'


                                    let deleteBtn = document.createElement('button');
                                    deleteBtn.classList.add('button');
                                    let spanTextDelete = document.createElement('span')
                                    spanTextDelete.textContent = 'Delete';
                                    deleteBtn.style.cursor = 'pointer'

                                    const svgNSDelete = 'http://www.w3.org/2000/svg';
                                    const svgElementDelete = document.createElementNS(svgNSDelete, 'svg');
                                    svgElementDelete.setAttribute('width', '16');
                                    svgElementDelete.setAttribute('height', '16');
                                    svgElementDelete.setAttribute('fill', 'currentColor');
                                    svgElementDelete.classList.add('bi', 'bi-trash');
                                    svgElementDelete.setAttribute('viewBox', '0 0 16 16');

                                    const pathElementDelete1 = document.createElementNS(svgNSDelete, 'path');
                                    pathElementDelete1.setAttribute('d', 'M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z');
                                    const pathElementDelete2 = document.createElementNS(svgNSDelete, 'path');
                                    pathElementDelete2.setAttribute('d', 'M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z');

                                    svgElementDelete.appendChild(pathElementDelete1);
                                    svgElementDelete.appendChild(pathElementDelete2);

                                    editBtn.appendChild(svgElement);
                                    deleteBtn.appendChild(svgElementDelete);


                                    boxSpan2.appendChild(buttonContainer);
                                    svgElement.appendChild(pathElement);
                                    // editBtn.appendChild(spanText)
                                    deleteBtn.appendChild(spanTextDelete)
                                    // buttonContainer.appendChild(editBtn);
                                    buttonContainer.appendChild(deleteBtn);

                                    deleteBtn.appendChild(svgElementDelete);

                                } else {
                                    buttonContainer.parentNode.removeChild(buttonContainer);
                                    // buttonContainer.classList.toggle('hidden');
                                }

                                let editBtn = buttonContainer.querySelector('.editbtn');
                                let deleteBtn = buttonContainer.querySelector('.button:not(.editbtn)');


                                deleteBtn.addEventListener('click', () => {
                                    box.remove()
                                    // parentDiv.removeChild(fo)
                                    localStorage.removeItem(boxkey);
                                    localStorage.removeItem(sectionName + 'name' + boxkey.slice(4));
                                    localStorage.removeItem(sectionName + 'url' + boxkey.slice(4));
                                    localStorage.removeItem(sectionName + 'background' + boxkey.slice(4));
                                    // localStorage.removeItem('span3' + boxkey.slice(4));

                                    // location.reload()
                                })
                            })
                        })
                 



                        let addBtnDivId = document.getElementById(addBtnDiv.id)
                                    addBtnDivId.addEventListener('click', (e) => {
                                        checkMobile(inputBox)

                                        let boxAppended = false; // Flag to track whether a box has been appended
console.log(boxAppended)
                                        doneBtn.addEventListener('click', (e) => {
                                            e.preventDefault();
                                            
                                            if (!boxAppended) {
                                                console.log('done button running from box', addBtnDivId);
                                                hideTheInputPage(inputBox);
                                                 box = document.createElement('div');
                                                box.classList.add('box');
                                                box.classList.add(...boxClasses);
                                                // let key = box.dataset.key;
                                                const key = box.getAttribute('key');
                                                
                                                // let parentDiv = document.getElementById(sectionName + 'Container');
                                                // let h2Element = parentDiv.querySelector('.sectionListName');
                                                // h2Element.parentNode.insertBefore(box, h2Element.nextSibling);
                                                
                                                boxAppended = true;
                                                index = localStorage.length
                                                // Set the flag to true after appending the box
                                            }
                                            else {
                                                return
                                            }
                                          let  urlSave = urlinput.value;



                                          let  nameSave = nameinput.value
                                            localStorage.setItem(sectionName+'background' + index, 'undefined')
                                            localStorage.setItem(sectionName+'box' + index, box.outerHTML)
                                            // localStorage.setItem('boxSpan' + index, boxSpan.outerHTML)
                                            localStorage.setItem(sectionName+'name' + index, nameSave)
                                            localStorage.setItem(sectionName+'url' + index, urlSave)
                                            localStorage.setItem(sectionName+'background' + index, background)
                                            // localStorage.setItem(sectionName+'span' + index, boxSpan3.outerHTML)
                                            setTimeout(() => {
                                                location.reload()
                                            }, 310)
                                        });


                                        cancelBtn.addEventListener('click', () => {
                                            hideTheInputPage(inputBox)
                                        })
                   console.log(e.target.id)
                              
                                    })

                      
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


