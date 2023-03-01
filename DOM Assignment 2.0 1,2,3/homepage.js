




        const mainMenu = document.querySelector(".menu")
        const newItem = document.createElement('li')
        const innerContent = newItem.innerHTML="<a href='#'>Hire Me</a>"
        const additem = mainMenu.appendChild(newItem)

        console.log(additem)

        const homeSearchbar = document.getElementById('home-searchbar')
        homeSearchbar.placeholder = "Search My Project"
        console.log(homeSearchbar)

        const spanContent = document.querySelectorAll('.hero-left-section span')
        spanContent[2].innerHTML='an Employee'
        spanContent[3].innerHTML='iNueron Intelligence Pvt Ltd'

        const imgSrc = document.querySelector('.hero-right-section img')
        console.log(imgSrc)
        imgSrc.src="hitesh sir.jpg"

const creatBtnElem = document.createElement('button');
const  text = document.createTextNode('Support Me');
creatBtnElem.appendChild(text)
console.log(creatBtnElem)

const btnParent = document.querySelector('.hero-right-section-btns')
btnParent.appendChild(creatBtnElem)
console.log(btnParent)


