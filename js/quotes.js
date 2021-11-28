const quotes = [
  {
      quote: "Nature gives you the face you have at twenty; it is up to you to merit the face you have at fifty.",
      author: "Gabriel Coco Chanel",
  },
  {
      quote: "A long life may not be good enough, but a good life is long enough.",
      author: "Benjamin Franklin",
  },
  {
      quote: "True life is lived when tiny changes occur.",
      author: "Leo Tolstoy",
  },
  {
      quote: "We make a living by what we get, we make a life by what we give.",
      author: "Sir Winston Churchill",
  },
  {
      quote: "Life is a long lesson in humility.",
      author: "James M. Barrie",
  },
  {
      quote: "The tragedy of life is what dies in the hearts and souls of people while they live.",
      author: "Albert Einstein",
  },
  {
      quote: "People, even more than things, have to be restored, renewed, revived, reclaimed, and redeemed; never throw out anyone.",
      author: "Audrey Hepburn",
  },
  {
      quote: "Life is either a daring adventure or nothing.",
      author: "Helen Keller",
  },
  {
      quote: "We always overestimate the change that will occur in the next two years and underestimate the change that will occur in the next ten. Don't let yourself be lulled into inaction.",
      author: "Bill Gates",
  },
];

const quote = document.querySelector("#quote");
const author = document.querySelector("#auther");

todaysQuote = quotes[Math.floor(Math.random()* quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;