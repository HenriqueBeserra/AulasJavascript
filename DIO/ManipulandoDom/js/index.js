function changeMode() {
    changeTheme()
    changeText()
}


function changeTheme() {

    body.classList.toggle(darkMode)
    footer.classList.toggle(darkMode)
    button.classList.toggle(darkMode)
    h1.classList.toggle(darkMode)

}


function changeText() {
    if (button.classList.contains(darkMode)) {
        button.innerText = "Light Mode"
        button.style.color = 'white'
        h1.innerText = 'Dark Mode ON'
        h1.style.color = "white"
        
    }
    else {
        h1.innerHTML = 'Light Mode ON'
        button.innerText = "Dark Mode"
        h1.style.color = "black"
        button.style.color = 'black'
    }

}


let darkMode = 'dark-mode'
const button = document.getElementById("mode-selector")
const h1 = document.getElementById('cabeçalho')
const footer = document.getElementsByTagName('footer')[0]
const body = document.getElementsByTagName('body')[0]

button.addEventListener('click', () => changeMode())
