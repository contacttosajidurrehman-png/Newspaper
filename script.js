const apiKey = "PASTE_YOUR_REAL_API_KEY";
const container = document.getElementById("news-container");

async function getNews(category){
    container.innerHTML = "Loading...";

    const url = `https://newsapi.org/v2/top-headlines?country=pk&category=${category}&pageSize=4&apiKey=${apiKey}`;
    const res = await fetch(url);
    const data = await res.json();

    container.innerHTML = "";

    data.articles.forEach(news => {
        const div = document.createElement("div");
        div.className = "news-card";

        div.innerHTML = `
            <img src="${news.urlToImage || 'https://via.placeholder.com/300'}">
            <h3>${news.title}</h3>
            <p>${news.description || ""}</p>
            <a href="${news.url}" target="_blank">Read More</a>
        `;

        container.appendChild(div);
    });
}

getNews('sports');
