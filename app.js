function slidesPlugin(activeSlides = 1){
const slides = document.querySelectorAll('.slide')

slides[activeSlides].classList.add('active')
for(const slide of slides){
    slide.addEventListener('click', () => {
        clearActiveClass()
        slide.classList.add('active')
        slide.classList.remove()
    })
}
function clearActiveClass(){
slides.forEach((slide)=>{
slide.classList.remove('active')
})
}}
slidesPlugin(4)