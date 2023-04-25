
//Cuando hago click en un .Experience-title
// removo la clase isActive a todos los .Experience-ul
// añado la clase isActive al .Experience-ul

const experienceTitle = document.querySelectorAll('.Experience-title')
const experienceUl = document.querySelectorAll('.Experience-ul')

console.log(experienceUl)


experienceTitle.forEach((eachTitle,i)=>{
    experienceTitle[i].addEventListener('click',()=>{

            experienceUl.forEach((eachUl,j)=>{
            experienceUl[j].classList.remove('isActive')
            })

            experienceUl[i].classList.add('isActive')

        })
    })


