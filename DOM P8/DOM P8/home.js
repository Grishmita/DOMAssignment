const sideBar = document.querySelector('.col-lg-4.new')
console.log(sideBar)

const createHr = document.createElement('hr')
const createHeading = document.createElement('h2')
const createPara = document.createElement('p')

createHeading.innerHTML = "This is my custom Heading"
createHeading.classList.add('new-head')

createPara.innerHTML = "This is my custom Paragraph"
createPara.classList.add('new-p')


sideBar.appendChild(createHr)
sideBar.appendChild(createHeading)
sideBar.appendChild(createPara)

sideBar.style.height = "450px"
sideBar.style.overflow = "scroll"

const bodyBg = document.querySelector('body')
console.log(bodyBg)
bodyBg.style.backgroundImage = "none"

const hamburgerMenu = document.querySelector(".navbar-toggler")
console.log(hamburgerMenu)

const menu = document.querySelector('.navbar-collapse')
console.log(menu)

hamburgerMenu.addEventListener('click', ()=>{

    if(menu.style.display === 'none'){
    menu.style.display = 'block'
    }else{
        menu.style.display = 'none'
    }
   
})

// const mediaQuery = window.matchMedia('(min-width: 992px)')
// // Check if the media query is true
// if (mediaQuery.matches) {
//   // Then trigger an alert
//   alert('Media Query Matched!')
// }
