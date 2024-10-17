const stickySections = [...document.querySelectorAll('.sticky')]

const images = [
    'https://dr.savee-cdn.com/things/6/6/ec4f24cf22ee535b7421b0.webp',
    'https://dr.savee-cdn.com/things/6/6/eb2df6d59b7e380c971736.webp',
    'https://dr.savee-cdn.com/things/6/6/eca9b8798adafc27da401d.webp',
    'https://dr.savee-cdn.com/things/6/1/fb999520461a2e2e00b826.webp',
]

images.forEach(img => {
    stickySections.forEach(section => {
        let image = document.createElement('img');
        image.src = img;
        section.querySelector('.scroll-section').appendChild(image);
    })
})

window.addEventListener('scroll', e => {
    for (i = 0; i < stickySections.length; i++){
        transform(stickySections[i]);
    }
})

function transform(section){
    const offsetTop = section.parentElement.offsetTop;
    const scrollSection = section.querySelector('.scroll-section')
    let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
    percentage = percentage < 0 ? 0 : percentage > 400 ? 400 : percentage;
    scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`
}