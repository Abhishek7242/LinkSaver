let boxClasses = ['position-relative', 'flex-column', 'shadow-lg', 'p-3', 'mb-5', 'rounded', 'addBtn', 'col-3', 'text-light', 'd-flex', 'justify-content-around', 'align-items-center', 'm-3', 'my-3']
let nameinput = document.getElementById('nameInput')
let urlinput = document.getElementById('urlInput')
doneBtn = document.getElementById('doneBtn')
let index = localStorage.length
let srcValue
let customize
let nameSave
let parentDiv
let background
inputBox.style.opacity = 1
doneBtn.addEventListener('click', (e) => {
    if (nameinput.value == '' || urlinput.value == '') {
        return
    }
    else {

        let box = document.createElement('div')

        box.classList.add('box')
        box.classList.add(...boxClasses)
        // let key = box.dataset.key;
        const key = box.getAttribute('key');

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

        let boxImg = document.createElement('img')
        boxImg.setAttribute('height', '100px')
        boxImg.setAttribute('width', '100px')
        let boxA = document.createElement('a')
        boxA.id = 'boxA' + index
        boxA.href = urlinput.value
        boxA.classList.add('text-dark')
        boxA.classList.add('bg-info')
        boxA.classList.add('py-2')
        boxA.classList.add('px-4')
        let str = nameinput.value
        boxA.innerText = str[0].toUpperCase() + str.slice(1)
        boxA.setAttribute('role', 'button')

        const url = urlinput.value;
        const startIndex = url.indexOf('.com/') + 5;
        const endIndex = url.indexOf('/', startIndex);
        const extractedText = url.substring(startIndex, endIndex);

        console.log(extractedText);

        function getWebsiteLogo(websiteUrl) {
            // Construct the favicon URL based on the website URL
            const faviconUrl = `${websiteUrl}/favicon.ico`;
            boxImg.src = faviconUrl;

            // Handle image load
            boxImg.addEventListener('load', () => {
                // Favicon loaded successfully
            });

            // Handle image error
            boxImg.addEventListener('error', () => {
                console.log('The image failed to load, handle the error or use a default logo');
                boxImg.src = 'https://www.freepnglogos.com/uploads/logo-website-png/logo-website-website-logo-png-transparent-background-background-15.png';
            });
        }

        // Call the getWebsiteLogo function with the extracted website URL
        getWebsiteLogo(extractedText);

        // Retrieve logo button click event handler



        let boxSpan2 = document.createElement('span')
        boxSpan2.classList.add('dotBtn')

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





        container.appendChild(box)
        box.appendChild(boxSpan)
        boxSpan.appendChild(svgElement)
        box.appendChild(boxImg)
        box.appendChild(boxA)
        box.appendChild(boxSpan2)
        boxSpan2.appendChild(svgElement2)

        inputBox.style.width = '20%'
        inputBox.style.height = '300px'
        inputBox.style.left = '-100px'
        inputBox.style.zIndex = '-1'
        inputBox.style.opacity = 0


        // customize = document.getElementById('customize' + index)
        Array.from(document.getElementsByClassName('customize')).forEach((element) => {

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


                let backgroundBoxClasses = ['shadow-lg', 'justify-content-around', 'align-items-center', 'p-3', 'mb-5', 'bg-white', 'rounded', 'addBtn', 'col-3', 'bg-light', 'text-light', 'd-flex', 'm-3', 'my-3', 'pt-5', 'text-dark']
                let backgroundBoxLogoClasses = ['d-flex', 'align-items-center', 'w-100', 'position-absolute', 'top-0', 'justify-content-between', 'bg-info', 'w-100', 'px-2']
                let colorBoxClasses = ['d-flex', 'justify-content-start', 'align-items-start', 'mb-5']
                console.log('runiiing')

                backgroundBox = document.createElement('div')
                backgroundBox.id = 'backgroundBox'
                backgroundBox.classList.add(...backgroundBoxClasses); // Add the classes to the 'div' element
                setTimeout(() => {
                    if (isMobileDevice()) {
                        // Code for mobile devices
                        backgroundBox.style.alignSelf = 'center'
                        backgroundBox.style.width = '90%'
                        backgroundBox.style.height = '400px'
                        backgroundBox.style.left = '0px'
                        backgroundBox.style.opacity = 1
                        backgroundBox.style.zIndex = 1
                        // Add/remove classes or apply styles specific to mobile devices
                    } else {
                        // Code for non-mobile devices
                        // Add/remove classes or apply styles specific to non-mobile devices
                        backgroundBox.style.alignSelf = 'center'
                        backgroundBox.style.width = '50%'
                        backgroundBox.style.height = '50vh'
                        backgroundBox.style.left = '40px'
                        backgroundBox.style.opacity = 1
                        backgroundBox.style.zIndex = 1
                    }

                }, 50)

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
                theme1box.classList.add('justify-content-center')
                theme1box.classList.add('overflow')

                container.appendChild(backgroundBox)
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
                            return parent;
                        }
                        parent = parent.parentNode;
                    }
                    return null; // If no parent with the class is found
                }

                Array.from(document.getElementsByClassName('themeselect')).forEach((element) => {
                    element.addEventListener('click', (e) => {
                        makeAllPlays0();
                        e.target.parentNode.classList.add('borderTheme');
                        srcValue = e.target.src;
                        let box = findParentWithClass(ele.target, 'box');
                        console.log(box);
                        box.style.backgroundImage = `url('${srcValue}')`;
                        background = srcValue
                        index--
                        localStorage.setItem('background' + index, background)
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
                    }, 1000)

                })
                colorPicker = document.getElementById('colorPicker');
                console.log(colorPicker)
                colorPicker.addEventListener('change', () => {
                    makeAllPlays0();

                    // form.style.background = colorPicker.value
                    let box = findParentWithClass(ele.target, 'box');
                    console.log(box);
                    box.style.background = colorPicker.value;
                    if (index === 0) {
                        localStorage.setItem('background' + index, background)

                    } else {
                        
                        index--
                        localStorage.setItem('background' + index, background)
                    }
                });


                // else {
                // backgroundBox.remove();

                // }
            })
        })
        // let customize =document.getElementById('customize'+index);
        // let form = document.getElementById('box');
        // Array.from(document.getElementsByClassName('dotBtn')).forEach((element) => {


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
                parentDiv.removeChild(form)
                localStorage.removeItem(key);
                localStorage.removeItem('title' + key.slice(4));
                localStorage.removeItem('delete1' + key.slice(4));
                localStorage.removeItem('date1' + key.slice(4));
                localStorage.removeItem('day1' + key.slice(4));
                localStorage.removeItem('year1' + key.slice(4));
                localStorage.removeItem('inputname1' + key.slice(4));
                localStorage.removeItem('task1' + index, form.innerHTML);
                location.reload()
                if (localStorage.length === 0) {

                    add.innerHTML = `    <img src="add.png" alt="" width="80px" height="80px">Add Expense`

                }
                else {
                    add.innerHTML = `    <img src="add.png" alt="" width="80px" height="80px">Add new Expense`


                }


            })
            // User clicked Cancel or closed the dialog box
            // Your code here
        });




        nameSave = nameinput.value
        urlSave = urlinput.value


        localStorage.setItem('boxx' + index, box.outerHTML)
        // localStorage.setItem('boxSpan' + index, boxSpan.outerHTML)
        localStorage.setItem('name' + index, nameSave)
        localStorage.setItem('url' + index, urlSave)
        localStorage.setItem('background' + index, background)
    }
    index++
    setTimeout(() => {

        location.reload()
    }, 310)

    
})


addNewBox = document.getElementById('addNewBox');
parentDiv = document.getElementById('container');

// Check if there are any stored tasks in localStorage
if (localStorage.length > 0) {
    let storedKeys = Object.keys(localStorage).filter((key) => key.startsWith('boxx'));

    // Sort the stored keys based on index
    storedKeys.sort((a, b) => {
        let indexA = parseInt(a.slice(4));
        let indexB = parseInt(b.slice(4));
        return indexA - indexB;
    });
    storedKeys.forEach((key) => {
        let formHTML = localStorage.getItem(key);
        let inputHTML = localStorage.getItem('url' + key.slice(4));
        let name = localStorage.getItem('name' + key.slice(4));
        let background = localStorage.getItem('background' + key.slice(4));
        
        let box = document.createElement('div')
        box.classList.add('box')
        box.classList.add(...boxClasses)
        box.dataset.key = key;
        if (background&&background.startsWith('#')) {
            box.style.background = `${background}`;
            
        } else {

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

        let boxImg = document.createElement('img')
        boxImg.classList.add('boxImg')
        boxImg.src = "https://cutewallpaper.org/24/amazon-png-logo/amazon-icon-png-logo-symbol-black.png"
        boxImg.setAttribute('height', '100px')
        boxImg.setAttribute('width', '100px')
        let boxA = document.createElement('a')
        boxA.classList.add('boxA')
        // boxA.id = 'boxA' + index
        boxA.href = inputHTML
        boxA.classList.add('text-dark')
        boxA.classList.add('bg-info')
        boxA.classList.add('py-2')
        boxA.classList.add('px-4')
        let str = name

        const url = inputHTML;
        const startIndex = url.indexOf('.com/') + 5;
        const endIndex = url.indexOf('/', startIndex);
        const extractedText = url.substring(startIndex, endIndex);

        console.log(extractedText);
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
        getWebsiteLogo(websiteUrl);
        boxA.innerText = str[0].toUpperCase() + str.slice(1)
        boxA.setAttribute('role', 'button')

        let boxSpan2 = document.createElement('span')
        boxSpan2.classList.add('dotBtn')

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





        container.appendChild(box)
        box.appendChild(boxSpan)
        boxSpan.appendChild(svgElement)
        box.appendChild(boxImg)
        box.appendChild(boxA)
        box.appendChild(boxSpan2)
        boxSpan2.appendChild(svgElement2)
        Array.from(document.getElementsByClassName('customize')).forEach((element) => {

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

                boxElements.forEach((box) => {
                    box.style.width = '0px';
                    box.style.height = '0px';
                    box.style.display = 'none';
                });
                let boxImg = document.querySelectorAll('.boxImg');

                boxImg.forEach((box) => {
               
                    box.style.display = 'none';
                });
                let boxA = document.querySelectorAll('.boxA');

                boxA.forEach((box) => {
               
                    box.style.display = 'none';
                });

                mainNavbar.style.height='100vh'
             
                
                let backgroundBoxClasses = ['shadow-lg', 'justify-content-around', 'align-items-center', 'p-3', 'mb-5', 'bg-white', 'rounded', 'addBtn', 'col-3', 'bg-light', 'text-light', 'd-flex', 'm-3', 'my-3', 'pt-5', 'text-dark']
                let backgroundBoxLogoClasses = ['d-flex', 'align-items-center', 'w-100', 'position-absolute', 'top-0', 'justify-content-between', 'bg-info', 'w-100', 'px-2']
                let colorBoxClasses = ['d-flex', 'justify-content-start', 'align-items-start', 'mb-5']
                console.log('runiiing')

                backgroundBox = document.createElement('div')
                backgroundBox.id = 'backgroundBox'
                backgroundBox.classList.add(...backgroundBoxClasses); // Add the classes to the 'div' element
                setTimeout(() => {
                    if (isMobileDevice()) {
                        // Code for mobile devices
                        backgroundBox.style.alignSelf = 'center'
                        backgroundBox.style.width = '90%'
                        backgroundBox.style.height = '400px'
                        backgroundBox.style.left = '0px'
                        backgroundBox.style.opacity = 1
                        backgroundBox.style.zIndex = 1
                        // Add/remove classes or apply styles specific to mobile devices
                    } else {
                        // Code for non-mobile devices
                        // Add/remove classes or apply styles specific to non-mobile devices
                        backgroundBox.style.alignSelf = 'center'
                        backgroundBox.style.width = '50%'
                        backgroundBox.style.height = '50vh'
                        backgroundBox.style.left = '400px'
                        backgroundBox.style.opacity = 1
                        backgroundBox.style.zIndex = 1
                    }
                }, 50)

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


                container.appendChild(backgroundBox)
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
                            const backgroundKey = 'background' + key.slice(4);
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
                        const backgroundKey = 'background' + key.slice(4);
                        localStorage.setItem(backgroundKey, colorPicker.value);
                    }

             
                });


                // else {
                // backgroundBox.remove();

                // }
            })
        })
        // let customize =document.getElementById('customize'+index);
        // let form = document.getElementById('box');
        // Array.from(document.getElementsByClassName('dotBtn')).forEach((element) => {


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
                localStorage.removeItem(key);
                localStorage.removeItem('name' + key.slice(4));
                localStorage.removeItem('url' + key.slice(4));
                localStorage.removeItem('background' + key.slice(4));

                location.reload()
                // if (localStorage.length === 0) {

                //     add.innerHTML = `    <img src="add.png" alt="" width="80px" height="80px">Add Expense`

                // }
                // else {
                //     add.innerHTML = `    <img src="add.png" alt="" width="80px" height="80px">Add new Expense`


                // }


            })
            // User clicked Cancel or closed the dialog box
            // Your code here
        });

    })
}