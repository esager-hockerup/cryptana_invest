const sliderSection = document.querySelector('.slides')

let slideData = [
    {
        src : './assets/app_download.jpg',
        alt : 'Et billede af en mand, der sidder og kigger på forskellige kurver inden for valuta',
        header : 'Download vores app',
        description : 'Følg kurser på dine investeringer og hold styr på din portfolio'
    },
    {
        src : './assets/dream_big.jpg',
        alt : 'Et billede af et kærestepar, der sidder sammen på en sofa i stuen og kigger på en computer og er meget glade',
        header : 'Investér i din fremtid',
        description : 'Brug en sikker samarbejdspartner, der holder styr på din portfolio </br> Vælg en sikker kurs med Cryptana Invest'

    },
    {
        src : './assets/get_help.jpg',
        alt : 'Et billede af en kvinde, der sidder ved computeren og snakker i telefon, for at få hjælp til at vælge de rigtige investeringer',
        header : 'Kontakt din ekspert',
        description : 'Cryptana Invest har døgnservice </br> Følg dine investeringer, og få råd fra vores eksperter når det passer dig </br> Hold kursen klar med Cryptana Invest'

    }
]

slideData.forEach((slide) => {
    sliderSection.innerHTML += `
    <div class="single-slide">

        <h1 class="overlay-txt">${slide.header}</h1>
        <p class="slider-txt">${slide.description}</p>
        <div class="slider-slides">
            <img class="slider-slide" src="${slide.src}" alt="">
        </div>
        <div class="overlay-color"></div>
    </div>
    `
})

const slides = document.querySelector('.slides .sinlge-slide')
const nextBtn = document.querySelector('.next')
const previousBtn = document.querySelector('.previous')


let slidesLength = slides.length - 1; /* Index'et på sidste billede i slideren */
let currentImageIndex = 0;

/* const display = document.querySelector('.display'); */


const setActiveSlide = (index) => { /* Funktionen bestemmer hvilket billede der vises - fat arrow function - parantes og pil, så er det en funktion*/
    
    slides.forEach( (slide) => {
        slide.classList.remove('active');
    });

    slides[index].classList.add('active'); /* får index fra currentImageIndex variablen, og smider 'active' på denne */

    /* display.textContent = `${index + 1} udaf ${slidesLength + 1}`; */
};

