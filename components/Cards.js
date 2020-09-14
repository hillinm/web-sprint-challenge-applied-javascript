// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const container = document.querySelector(`.cards-container`);

function addCard(obj) {
    const card = document.createElement(`div`);
    const headline = document.createElement(`div`);
    const author = document.createElement(`div`);
    const imgContainer = document.createElement(`img`);
    const authorsName = document.createElement(`span`);

    card.classList.add(`card`);
    headline.classList.add(`headline`);
    author.classList.add(`author`);

    imgContainer.src = obj.authorPhoto;
    headline.textContent = "TEST";
    authorsName.textContent = `By: ${obj.authorName}`;

    headline.addEventListener('click', () => {
        console.log(`${obj.headline}`)
    })
}

axios.get(`https://lambda-times-api.herokuapp.com/articles`).then((r) => {
    console.log(r.data)
    container.prepend(addCard(r.data))
    console.log(r.data.articles.bootstrap[0].headline);
    container.append(addCard(r.data))
    container.append(addCard(r.data.articles.bootstrap))
  })
  .catch ((err) => console.log(err));

  