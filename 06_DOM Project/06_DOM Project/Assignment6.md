# Assignment 6

## Adding inueron image in header section :-

```
  const imgSRc = document.querySelector('header img')
  console.log(imgSRc)
  imgSRc.src="assets/ineuron-logo.png"

```

## Adding Price Value :-

```
  const  priceValue = document.querySelector('.app_price span')
  priceValue.innerHTML="$10"

```

## Adding inueron image in footer section :-

```
  const footerlogo = document.querySelector('.footer_logo img')
  footerlogo.src ="assets/ineuron-logo.png"
  footerlogo.style.width = "100%"
  footerlogo.style.maxWidth = "200px"

```

## Adding new icons in socials :-

```
const linkdinFooter = document.querySelector('.footer_social')
  const newFooterDiv = document.createElement('div')
  newFooterDiv.className = 'footer_social_ico'
  console.log(newFooterDiv)

  const createLinkdinICon = document.createElement('i')
  createLinkdinICon.className = 'fa-brands fa-linkedin'
  console.log(createLinkdinICon)

  newFooterDiv.appendChild(createLinkdinICon)
  console.log(newFooterDiv)

  linkdinFooter.appendChild(newFooterDiv)

```
