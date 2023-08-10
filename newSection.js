let sectiondoneBtn = document.getElementById('sectiondoneBtn')
let sectionName = document.getElementById('sectionName')
let newSectionContainer = document.getElementById('newSectionContainer')
let addImgBoxClasses = ['shadow-lg', 'p-3', 'mb-5',  'rounded', 'addBtn', 'col-3', 'text-light', 'd-flex', 'justify-content-center', 'align-items-center', 'm-3', 'my-3']
sectiondoneBtn.addEventListener('click', (e) => {
    
    // Function to simulate a double click on a given element
    e.preventDefault()
    
    
    if (sectionName.value == '') {
        return
    }
    else {
        let sectionValue = sectionName.value
        sectionName.value = ''
        sectioninputBox.style.width = '12%'
        sectioninputBox.style.top = '-15px'
        sectioninputBox.style.height = '30px'
        sectioninputBox.style.right = '200px'
        sectioninputBox.style.zIndex = '-1'
        sectioninputBox.style.opacity = 0
        let h2 = document.createElement('h2')
        h2.classList.add('mx-5')
h2.innerText=sectionValue
        let div = document.createElement('div')
        div.classList.add('w-100')
        console.log(sectionValue)
        div.id = sectionValue
        let addBtnDiv = document.createElement('div')
        addBtnDiv.classList.add(...addImgBoxClasses);
        let addBtnImg = document.createElement('img')
        addBtnImg.src = 'add.png'
        
        newSectionContainer.appendChild(div)
        div.appendChild(h2)
        div.appendChild(addBtnDiv)
        addBtnDiv.appendChild(addBtnImg)

        

    }
})