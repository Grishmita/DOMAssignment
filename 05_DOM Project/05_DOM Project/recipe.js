

// NAV BAR
const rightDiv = document.querySelector('.nav-center div:nth-child(3)')

const createSubsBtn = document.createElement('a')
createSubsBtn.innerHTML = "Pro Subscription" 
console.log(createSubsBtn)
createSubsBtn.classList.add('btn')
createSubsBtn.setAttribute('href', '#')
console.log(createSubsBtn)

rightDiv.appendChild(createSubsBtn)

console.log(rightDiv)


// MENU LIST
const menuList = document.querySelector('.tags-container')
const menulistDiv = document.querySelector('.tags-container div')
const anchorTag = document.createElement('a')
anchorTag.setAttribute('href', '#')
anchorTag.innerHTML = "Chinese (7)"

menulistDiv.appendChild(anchorTag)
console.log(anchorTag)


// RECIPE GALLERY
const recipeGallery = document.querySelector('.recipe-gallery')
console.log(recipeGallery)

const addlastDish = document.createElement('div')
addlastDish.classList.add('card')
console.log(addlastDish)

const recipeanchorTag = document.createElement('a')
console.log(recipeanchorTag)
recipeanchorTag.setAttribute('href', '#')
recipeanchorTag.classList.add('recipe-text')

const foodImage = document.createElement('img')
foodImage.src="img/pizza-recipe.jpg"
console.log(foodImage)

const recipeTitle = document.createElement('h5')
recipeTitle.innerHTML = "Pizza"

const recipePara = document.createElement('p')
recipePara.innerHTML= 'Prep : 15min | Cook : 30min'

foodImage.classList.add('recipe-img')
recipeTitle.classList.add('recipe-name')
recipePara.classList.add('recipe-disp')


recipeanchorTag.appendChild(foodImage)
recipeanchorTag.appendChild(recipeTitle)
recipeanchorTag.appendChild(recipePara)
console.log(recipeanchorTag)

console.log(addlastDish)

addlastDish.appendChild(recipeanchorTag)
console.log(addlastDish)

recipeGallery.appendChild(addlastDish)


const copyright = document.querySelector('footer p a')
copyright.innerHTML = "Grishmita Pandey"

