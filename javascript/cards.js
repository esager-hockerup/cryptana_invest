const output = document.querySelector('.products')

let array = [
    {
        src : './assets/wallet.png',
        text : 'Din personlige portfolio',
        button : 'https://www.google.dk'
    },
    {
        src : './assets/euro.png',
        text : 'Følg markedet på forskellige valuta',
        button : 'https://www.google.dk'
    },
    {
        src : './assets/bitcoin.png',
        text : 'Investér i dagens højeste kurs',
        button : 'https://www.google.dk'
    },
    {
        src : './assets/trend.png',
        text : 'Følg kurserne på markedets coins',
        button : 'https://www.google.dk'
    }
]

array.forEach(element => {
    output.innerHTML += `
    <div class="product">
        <div class="item">
            <a href="linkpoint.html"> <img class="product-img" src="${element.src}" alt="billede-af-en-groen-pung-icon"></a><br>
            <p class="desc-txt">${element.text}</p>
            <a href="${element.button}"> <button class="link-btn"> Køb valuta</button></a>
        </div>
    </div>
    `
})