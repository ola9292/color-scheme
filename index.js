
let colorPicker = document.getElementById('color-picker')
const colorBtn = document.getElementById('color-btn')
const colorMode = document.getElementById('color-mode')
const colorContainer = document.getElementById('color-container')
let chosenColor = colorPicker.value.slice(1);
let chosenMode = colorMode.value;


colorMode.addEventListener('change',function(){
    chosenMode = colorMode.value;
    return chosenMode
})

colorPicker.addEventListener('change',function(){
    chosenColor = colorPicker.value.slice(1)
    return chosenColor
})

colorBtn.addEventListener('click',function(){
    console.log(chosenColor,chosenMode)
  Render()
})

function Render(){
    fetch(`https://www.thecolorapi.com/scheme/?hex=${chosenColor}&mode=${chosenMode}&count=6`)
.then((response) => response.json())
.then((data) => {
    console.log(data.colors)
    let colorScheme = data.colors.map(function(colorStr){
        return `
        <div class="color-scheme-container">
            <img src="${colorStr.image.bare}" class="color-image"/>
            <div class="color">${colorStr.hex.value}</div>
        </div>
                `
    }).join('')
    colorContainer.innerHTML = colorScheme
});
}

// initial call
Render()