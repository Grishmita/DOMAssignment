let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    console.log(para)
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});


let bgColor = document.querySelectorAll('.accordian h3')

 for(let i=0; i < bgColor.length; i++){
    bgColor[i].style.backgroundColor = '#dadaf8'
 }

// bgColor[0].style.backgroundColor = "#dadaf8"



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


