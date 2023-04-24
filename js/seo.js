//Cuando hago click en .Seo-img
//A .Lightbox se añade la clase .isActive

const lightbox = document.querySelector(".Lightbox")
const lightboxImg = document.querySelector('.Lightbox-img')
const seoImg = document.querySelectorAll('.Seo-img')

 console.log(seoImg)

seoImg.forEach((Eachfoto, i)=>{

    let source = seoImg[i].src 
/*Como hay dos fotos, se pretende que el lightboxImg obtenga el source del seoImg donde el usuario hizo clic*/

    seoImg[i].addEventListener('click', ()=>{
        lightbox.classList.add('isActive')
        lightboxImg.src = source
    })
})


//Cuando hago click en .lightbox-btn 
//se remove la clase isActive del .Lightbox

const lightboxBtn = document.querySelector('.Lightbox-btn')

console.log(lightboxBtn)

lightboxBtn.addEventListener('click',()=>{
    lightbox.classList.remove('isActive')
})