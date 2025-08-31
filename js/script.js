/* Topic Slider */
let CurrentSlide = 0;
const innovationSlide = document.querySelectorAll('.slideInnovation');
const thumbnails = document.querySelectorAll('.Thumbnail');
const totalSlides = innovationSlide.length;

function updateTopicSlider() {
    innovationSlide.forEach(slideInnovation => slideInnovation.classList.remove('Active'));
    thumbnails.forEach(Thumbnail => Thumbnail.classList.remove('Active'));

    innovationSlide[CurrentSlide].classList.add('Active');
    thumbnails[CurrentSlide].classList.add('Active');
}

function changeTopicSlide(direction) {
    CurrentSlide += direction;
    if (CurrentSlide < 0) {
        CurrentSlide = totalSlides - 1;
    } else if (CurrentSlide >= totalSlides) {
        CurrentSlide = 0;
    }
    updateTopicSlider();
}
function goToSlide(slideIndex) {
    CurrentSlide = slideIndex;
    updateTopicSlider();
}

thumbnails.forEach((Thumbnail, index) => {
    Thumbnail.addEventListener('click', function(e) {
        e.preventDefault();
        goToSlide(index);
    });
});


const nav = document.querySelector('.navbutton');
const navback = document.querySelector('.navback');
const navCards = document.querySelectorAll('.navcard');


const slidebtn = document.querySelectorAll('.slideButton');

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        const navHeight = nav.offsetHeight;

        window.scrollTo({
            top: targetSection.offsetTop - navHeight,
            behavior: 'smooth'
        });
    });
});

const judulBenefit = document.querySelectorAll(".title-benefit h3, .title-benefit p");
const kartuBenefit = document.querySelectorAll(".card-items-benefit");

const pengamatScroll = new IntersectionObserver(daftarElemen => {
    daftarElemen.forEach(elemen => {
        if (elemen.isIntersecting) {
            elemen.target.classList.add("show"); 
        } 
    });
}, { threshold: 0.4 }); 

judulBenefit.forEach(teks => pengamatScroll.observe(teks));
kartuBenefit.forEach(kartu => pengamatScroll.observe(kartu));


const teksTechnology = document.querySelectorAll(".techTextBox h2, .techTextBox p");

const pengamatTechnology = new IntersectionObserver(daftarElemen => {
    daftarElemen.forEach(elemen => {
        if (elemen.isIntersecting) {
            elemen.target.classList.add("muncul"); 
        } 
    });
}, { threshold: 0.3 }); 

teksTechnology.forEach(teks => pengamatTechnology.observe(teks));