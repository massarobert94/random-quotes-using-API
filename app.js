const quote = document.getElementById('quotes');
const button = document.getElementById('btn');

const getQuote = async () => {
    let url = "https://type.fit/api/quotes";
    let getFromAPI = await fetch(url);
    console.log(typeof getFromAPI);

    let quotesJason = await getFromAPI.json();
    console.log(quotesJason);
    
    const randomNum = Math.floor(Math.random()*quotesJason.length);

    const quoteFinally = quotesJason[randomNum].text;
    quote.innerHTML = quoteFinally;
}




button.onclick = getQuote;