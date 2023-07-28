import './less/index.less'

// Your code goes here!
//LISTENERS
//load
window.onload = function (event) {
    const heading = document.querySelector('h1')
    console.log(heading)
    heading.textContent = 'READY TO GO!!'
    window.addEventListener('copy', () => {
        navigator.clipboard.readText()
            .then(text => {
                console.log(text)
                heading.textContent =+ text
            })
    })
}
//copy event
