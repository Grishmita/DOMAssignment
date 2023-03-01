# Fourth Assignment

## Adding background color:-

```
  document.querySelector('.clash-card__unit-stats.clash-card__unit-stats--barbarian').style.backgroundColor = "#ec9b3b"
  document.querySelector('.clash-card__unit-stats.clash-card__unit-stats--archer').style.backgroundColor = "#ee5487"
  document.querySelector('.clash-card__unit-stats.clash-card__unit-stats--giant').style.backgroundColor = "#f6901a"
  document.querySelector('.clash-card__unit-stats.clash-card__unit-stats--goblin').style.backgroundColor = "#82bb30"
  document.querySelector('.clash-card__unit-stats.clash-card__unit-stats--wizard').style.backgroundColor = "#4facff"

```


## Adding The title content:-

```
  const archer_heading = document.querySelector('.archer  :nth-child(3)')
  console.log(archer_heading)
  archer_heading.innerHTML = "The Archer" 

  const goblin_heading = document.querySelector('.goblin  :nth-child(3)')
  console.log(goblin_heading)
  goblin_heading.innerHTML = "The Goblin"

  const wizard_heading = document.querySelector('.wizard  :nth-child(3)')
  console.log(wizard_heading)
  wizard_heading.innerHTML = "The Wizard"

```


## Adding content color white to the stats and stat value:-

```
const values = document.getElementsByClassName('stat-value');
const valueArray = Array.from(values);
valueArray.forEach(value =>{
    value.style.color ='#fff'
})


 const texts = document.getElementsByClassName('stat');
 const textArray = Array.from(texts);
 textArray.forEach(text =>{
    text.style.color ='#fff'
})

```

