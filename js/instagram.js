//Menu Responsive
//Cuando clic en .Header-svg
//Al .Header-ul se añade la clase isActive 


const headerSvg = document.querySelector('.Header-svg')
const headerUl = document.querySelector('.Header-ul')

console.log(headerUl)

headerSvg.addEventListener('click',()=>{
    headerUl.classList.toggle('isActive')
})