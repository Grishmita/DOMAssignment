# DOM Assignment 2.0 1,2,3
## First Assignment

Add Hire Me in Menu:-

```
const mainMenu = document.querySelector(".menu")
const newItem = document.createElement('li')
const innerContent = newItem.innerHTML="<a href='#'>Hire Me</a>"
const additem = mainMenu.appendChild(newItem)

console.log(additem)

```        

 Search My Project:-  
 ```
const homeSearchbar = document.getElementById('home-searchbar')
homeSearchbar.placeholder = "Search My Project"
console.log(homeSearchbar)
 ```

 Editing the Paragraph:-

  ```
const spanContent = document.querySelectorAll('.hero-left-section span')
spanContent[2].innerHTML='an Employee'
spanContent[3].innerHTML='iNueron Intelligence Pvt Ltd'
 ```



Adding Hitesh Sir Picture 
 ```
const imgSrc = document.querySelector('.hero-right-section img')
console.log(imgSrc)
imgSrc.src="hitesh sir.jpg"

 ```


 Adding Support Me button
 ```
const creatBtnElem = document.createElement('button');
const  text = document.createTextNode('Support Me');
creatBtnElem.appendChild(text)
console.log(creatBtnElem)

const btnParent = document.querySelector('.hero-right-section-btns')
btnParent.appendChild(creatBtnElem)
console.log(btnParent)


 ```


 
 ## Second Assignment


Adding background color to h3

```
let bgColor = document.querySelectorAll('.accordian h3')

 for(let i=0; i < bgColor.length; i++){
    bgColor[i].style.backgroundColor = '#dadaf8'
 }

```


Adding the skils section

```
let creatAccHeading = document.createElement('h3');
console.log(creatAccHeading)
let headingText = document.createTextNode('Skills');
creatAccHeading.appendChild(headingText);
console.log(creatAccHeading)

creatAccHeading.style.backgroundColor = '#dadaf8'

let creatAccpara = document.createElement('p')
console.log(creatAccpara)
let paraText = document.createTextNode('I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over Github')
console.log(paraText)
creatAccpara.appendChild(paraText)
console.log(creatAccpara)


let accParent = document.querySelector('.accordian-wrapper')
let newAcc = document.createElement('div')
newAcc.className='accordian acconew'
newAcc.append(creatAccHeading, creatAccpara)
console.log(newAcc)
accParent.appendChild(newAcc)
console.log(accParent)


const facco = document.querySelector('.acconew') 

facco.addEventListener('click', () =>{
  let newpara = document.querySelector('.acconew p')
  if (newpara.style.display === "block") {
    newpara.style.display = "none";
  } else {
    newpara.style.display = "block";
  }
})

```


## Third Assignment 

Showing the  user input section value to the user output section in the value itself on submit button

```
 const userinputForm = document.querySelector('.mainRight form')
      console.log(userinputForm)
      const inputName = document.querySelector('input.userName')
      console.log(inputName)
      const inputEmail = document.querySelector('input.userEmail')
      console.log(inputEmail)
      const inputMessage = document.querySelector('textarea.userMessage')
      console.log(inputMessage)

      
      const outputName = document.querySelector('input.enterName')
      console.log(outputName)
      const  outputEmail = document.querySelector('input.enterMail')
      console.log(outputEmail)
      const outputMessage = document.querySelector('textarea.enterMessage')
      console.log(outputMessage)
    
        userinputForm.addEventListener('submit', () =>{
        event.preventDefault();

        const valueName = inputName.value
        console.log(valueName)
        outputName.value = valueName

        const valueEmail = inputEmail.value
        outputEmail.value = valueEmail

        const  valueMessage = inputMessage.value
        outputMessage.value = valueMessage

      })
```
