import './less/index.less'

// Your code goes here!
//LISTENERS
//load
window.onload = function (event) {
    const heading = document.querySelector('h1')
    console.log(heading)
    heading.textContent = 'READY TO GO!!'

//copy event
window.addEventListener('copy', () => {
    navigator.clipboard.readText()
        .then(text => {
            heading.textContent += text
        })
    })
//click event
document.body.addEventListener('click', event => {
    event.target.classList.toggle('mirror')
})

//dblclick
document.body.addEventListener('dblclick', event => {
    event.target.outerHTML = ''
})

}
