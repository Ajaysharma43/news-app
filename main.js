// d57d1ada29e34f28b067fe1dc2384b82

const api_key = "d57d1ada29e34f28b067fe1dc2384b82";
const url = " https://newsapi.org/v2/everything?q=";

window.addEventListener("load",() => fetchNews("articles"));

async function fetchNews (query) 
{
	const res = await fetch(`${url}${query}&apiKey=${api_key}`);
	const data = await res.json();
	console.log(data);
	bindData(data.articles);
}

function bindData(articles) 
{
    const cardsContainer = document.getElementById("cards-container");
    const newsCardTemplate = document.getElementById("template-news-card");

    cardsContainer.innerHTML = "";

    articles.forEach((article) => {
        if (!article.urlToImage) return;
        const cardClone = newsCardTemplate.content.cloneNode(true);
        fillDataInCard(cardClone, article);
        cardsContainer.appendChild(cardClone);
    });
}

function fillDataInCard(cardClone, article) 
{
    const newsImg = cardClone.querySelector("#news-img");
    const newsTitle = cardClone.querySelector("#news-title");
    const newsSource = cardClone.querySelector("#news-source");
    const newsDesc = cardClone.querySelector("#news-desc");

    newsImg.src = article.urlToImage;
    newsTitle.innerHTML = article.title;
    newsDesc.innerHTML = article.description;

    const date = new Date(article.publishedAt).toLocaleString("en-US", {
        timeZone: "Asia/Jakarta",
    });

    newsSource.innerHTML = `${article.source.name} · ${date}`;

    cardClone.firstElementChild.addEventListener("click", () => {
        window.open(article.url, "_blank");
    });
}

const searchButton = document.getElementById("search-button")
const searchText = document.getElementById("search-text")

searchButton.addEventListener("click" , () => {
    const query = searchText.value;
    if(!query) return;
    fetchNews(query);
})


 function onNavItemclick(id) {
    fetchNews(id);
 }


 var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}


// Get a reference to the loader element
const loader = document.getElementById("loader");

// Show the loader after a delay
setTimeout(() => {
  loader.style.display = "block";
}, 1000); // 1000 milliseconds (1 second) delay

// Simulate some content loading
setTimeout(() => {
  // Hide the loader when the content is loaded
  loader.style.display = "none";
  // Display the actual content
  document.getElementById("content").style.display = "block";
}, 3000); // 3000 milliseconds (3 seconds) delay