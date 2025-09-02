/* Topic Slider */
let CurrentSlide = 0;
const newssSlide = document.querySelectorAll('.slideNewss');
const thumbnails = document.querySelectorAll('.Thumbnail');
const totalSlides = newssSlide.length;

function updateTopicSlider() {
    newssSlide.forEach(slideNewss => slideNewss.classList.remove('Active'));
    thumbnails.forEach(Thumbnail => Thumbnail.classList.remove('Active'));

    newssSlide[CurrentSlide].classList.add('Active');
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
nav.addEventListener('click', () => {
    navCards.forEach(navcard => {
        navcard.classList.add('show');
        navcard.classList.remove('hidden');
    });
});
navback.addEventListener('click', () => {
    navCards.forEach(navcard => {
        navcard.classList.remove('show');
        navcard.classList.add('hidden');
    });
});

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

