let slideData = [
    {
        src : './assets/app_download.jpg',
        alt : 'Billede 1',
        header : 'Download vores app', 
        text : 'Følg kurser på dine investeringer og hold styr på din portfolie',
        class : 'test',
        cta : 'https://www.google.dk',
        
    },
    {
        src : './assets/dream_big.jpg',
        alt : 'Billede 2',
        header : 'Investér i din fremtid', 
        text : 'Brug en sikker samarbejdspartner, der holder styr på din potfolio</br> Vælg en sikker kurs med Cryptana Invest',
        class : 'test',
        cta : 'https://www.google.dk',
    },
    {
        src : './assets/get_help.jpg',
        alt : 'Billede 3',
        header : 'Kontakt din ekspert ',
        text : 'Cryptana Invest har døgnservice </br> Følg dine investeringer, og få råd fra vores eksperter når det passer dig</br> Hold kursen klar med Cryptana Invest', 
        class : 'test',
        cta : 'https://www.google.dk',
    }
] 

const sliderContainer = document.querySelector('.slides')


slideData.forEach((slide) => {
    sliderContainer.innerHTML += `
    <div class="display"></div>
    <div class="single-slide">  
        <div class="slide-content">
        <p class="${slide.test}"> ${slide.header}</p>
        <p class="text">${slide.text}</p>
        </div>
        <img class="slide-pic" src="${slide.src}" alt="${slide.alt}">
        <a href="${slide.cta}"><button class="cta-btn">læs mere her</button></a>
    </div>
    `
})


const slides = document.querySelectorAll('#slider01 .single-slide');
const nextBtn = document.querySelector('[data-direction=next]');
const previousBtn = document.querySelector('[data-direction=previous]');

let slidesLength = slides.length - 1; /* Index'et på sidste billede i slideren */
let currentImageIndex = 0;

const display = document.querySelector('.display');


const setActiveSlide = (index) => { /* Funktionen bestemmer hvilket billede der vises - fat arrow function - parantes og pil, så er det en funktion*/
    
    slides.forEach( (slide) => {
        slide.classList.remove('active');
    });

    slides[index].classList.add('active'); /* får index fra currentImageIndex variablen, og smider 'active' på denne */

    display.innerHTML = `${index + 1} ud af ${slidesLength + 1}`;

    console.log(index)
};


const next = () => {    

    if(currentImageIndex >= slidesLength){
        currentImageIndex = 0;
    } else {
        currentImageIndex += 1;
    }

    setActiveSlide(currentImageIndex); //Skal køres hver gang der trykkes på knapperne, for at registrere at currentImageIndex nu er noget andet, og at slideren skal skifte op eller ned

};

const previous = () => {

    if(currentImageIndex === 0){
        currentImageIndex = slidesLength;
    } else {
        currentImageIndex -= 1;
    }

    /* 
    currentImageIndex = currentImageIndex === 0 ? slidesLength : currentImageIndex -= 1;
    */

    setActiveSlide(currentImageIndex);

};

//kører next funktionen hver 3 sekund. 
setInterval(next, 3000);

// Stop intervallet, når der klikkes på næste eller forrige knap
nextBtn.addEventListener('click', function () {
    clearInterval(intervalId);
});

previousBtn.addEventListener('click', function () {
    clearInterval(intervalId);
});

/* Hvis funktionerne eksisterer */
if(nextBtn && previousBtn) {

    nextBtn.addEventListener('click', next);
    previousBtn.addEventListener('click', previous);

}


document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        // Piletast mod højre
        next();
    } else if (event.key === 'ArrowLeft') {
        // Piletast mod venstre
        previous();
    }
});

/* Skriv denne lige efter setActiveSlide funktionen er skrevet - så vises der et billede med det samme*/
setActiveSlide(currentImageIndex); /* Skal køres, for at vise et billede til at starte med */

