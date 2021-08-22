const yearSpan = document.querySelector('#current-year');
const currentYear = new Date();
yearSpan.innerText = currentYear.getFullYear();

const lightboxEnabled = document.querySelectorAll('.lightbox-enabled');
const lightboxArray = Array.from(lightboxEnabled);
const lastImage = lightboxArray.length -1;
const lightboxContainer = document.querySelector('.lightbox-container');
const lightboxImage = document.querySelector('.lightbox-img');

const lightboxBtns = document.querySelectorAll('.lightbox-btn');
const lightboxBtnRight = document.querySelector('#right');
const lightboxBtnLeft = document.querySelector('#left');
let activeImage;

// functions

const showLightbox = () => {lightboxContainer.classList.add('active')}

const hideLightbox = () => {lightboxContainer.classList.remove('active')}

const transitionSlidesLeft = () => {
    lightboxBtnLeft.focus();
    activeImage === 0 ? setActiveImage(lightboxArray[lastImage]) : 
    setActiveImage(lightboxArray[activeImage].previousElementSibling);
}

const transitionSlidesRight = () => {
    lightboxBtnRight.focus();
    activeImage === lastImage ? setActiveImage(lightboxArray[0]) : 
    setActiveImage(lightboxArray[activeImage].nextElementSibling);
}

const setActiveImage = (image) => {
    lightboxImage.src = image.dataset.imagesrc;
    activeImage = lightboxArray.indexOf(image);
    switch (activeImage){
        case 0:
            lightboxBtnLeft.classList.add('inactive');
            break;
        case lastImage:
            lightboxBtnRight.classList.add('inactive');
            break;
        default:
            lightboxBtns.forEach(btn => {
                btn.classList.remove('inactive')
            })
    }
}

const transitionSlideHandler = (moveItem) => {
    moveItem.includes ('left') ? transitionSlidesLeft() : transitionSlidesRight();
}

// event listeners

lightboxEnabled.forEach(image => {
    image.addEventListener('click', (e) => {
        showLightbox()
        setActiveImage(image)
    })
})

lightboxContainer.addEventListener('click', () => {
    hideLightbox()})

lightboxBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        transitionSlideHandler(e.currentTarget.id);
        })
})