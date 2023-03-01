
# Assignment Seventh 

## Hide language with 2.0 in them

```
function hide20Value() {

  const anchorTag = document.getElementsByTagName('a')

  for(let i= 0; i < anchorTag.length; i++ ){
    if (anchorTag[i].textContent.includes('2.0')){
      anchorTag[i].style.display = 'none'
    }
  }

}

hide20Value()

```

## Adding placeholder :-

```
const submitBtn = document.querySelector('.main__form-btn')
submitBtn.disabled = false

const inputField = document.querySelector('.main__form-input')

inputField.value = "iNeuron"

```
