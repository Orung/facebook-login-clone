let eyeIcon = document.querySelector('.eye-icon')
let eyeInput = document.querySelector('.eye');


// eyeInput.addEventListener('onfocus', () => {
//     console.log('i just hover the key')
//     // eyeIcon.style.display = 'block'
// })

eyeInput.oninput = () => {
    console.log('ddjidif')
    eyeIcon.style.display = 'block'
}
eyeInput.onchange = () => {
    eyeIcon.style.display = 'none'
}