
function createGallery(containerId, folderPath, imageNames) {
    const gallery = document.getElementById(containerId); 
    
    
    if (!gallery) {
        console.error(`Nie znaleziono elementu z ID: ${containerId}`);
        return;
    }

    
    imageNames.forEach((imageName) => {
        const img = document.createElement("img");  
        img.src = folderPath + imageName; 
        img.onload = () => {
            console.log(`Załadowano zdjęcie: ${imageName}`);
        };
        img.onerror = () => {
            console.error(`Błąd ładowania zdjęcia: ${imageName}`);
        };
        gallery.appendChild(img); 
    });
}

// Galeria Czarni-Dachnów
const dachnowImages = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg"
];
const dachnowFolderPath = "/galeria/Czarni - Dachnów/";  
createGallery("gallery1", dachnowFolderPath, dachnowImages);

// Galeria Czarni-Turniej Młodów
const turniejImages = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg",
    "img6.jpg"
];
const turniejFolderPath = "/galeria/Czarni - Turniej Młodów/";  
createGallery("gallery2", turniejFolderPath, turniejImages);

// Galeria Czarni-Basznia Dolna

const baszniaImages = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg"
];
const baszniaFolderPath = "/galeria/Czarni - Basznia Dolna/";  
createGallery("gallery3", baszniaFolderPath, baszniaImages);



/* Hygraph */

const API_URL = 'https://api-ap-south-1.hygraph.com/v2/8fed94f6-024e-4563-a9b6-79131ee4acaf/master';
const ACCESS_TOKEN = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MzY5NTI5ODMsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmh5Z3JhcGguY29tL3YyL2NtNWh1N283dDAxNHIwN3dkanBlN29pcm8vbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQtYXAtc291dGgtMS5oeWdyYXBoLmNvbS8iLCJzdWIiOiI0ODEyMTFjMi0zZjczLTQ0YzYtODc4Yy01ZmUzYzAwZWE4OWYiLCJqdGkiOiJjbTV5MHlqbzAwMzlwMDdwcDlhd3FmNmZlIn0.xbO6bXHjoBrA4vVP5KBPYvFMxjYLLK-_y06wp7Bo6ia6lqa_GQhZbsbXkEyZR-ZV1_UmiQFf4uNFHf3UKoGlRB36nMn2gxaebXsCYoS92jm6I6e_gS6ZGppotKofwaEhtBSNkocV5S90VQTlsb5twJT8NxFwUi2WZRbc8lTZyvBQy7SGONJ5ucoiFOHkckVW-5bTk62bsdtG9nD1bwBOX6Uluuy9XnsSzmVAEC0TDZnUlNEwsAqIvtOYmVPsUmS6fTrF6mg5_V6aaVFnEiuw2af4CGFfadC58ixOS2lIW63xoSM17t1_DjcjRpVyHHA2zjLn6GQZRZY56hoZ_1aUudevL-XVqCfIEo-lwecfQ2WKZdcUVx3p032aVrHBBil2pu28dhk-dRWlRyvUBUvnWwAwc3I2DSW6axEEI35Y8EvsFxScfOXT2Z757M6IMCUsnEVyZs2AHyl3Rry6P_0ZmZfUzqmCjo5N6v83KpRuZpIDH4SmesXCN8RtjhVcTKywbuRJCvDy2ZAzG1U32xPNuUh-kVUj2OzH5y7h0cY-uEstLb6nx7uz_FfOekjNzdWcOccO-rxOtdQFZzPtakEa82b7Qu-C1ZKgaqqJpA1mcG8qs2jaXUdI9vPlan0yK-bMCWu4-LKO7PNmxeqVBwgfEemjEbAjC3wwRQo9vGbLvzc'; 

async function fetchNews() {
    const query = `
        query {
            aktualnoscis {
                image {
                id
                  }
    header
    date
            }
        }
    `;
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${ACCESS_TOKEN}`,
        },
        body: JSON.stringify({ query }),
    });
    const data = await response.json();
    displayNews(data.data.newsItems);
}

function displayNews(newsItems) {
    const newsList = document.getElementById('news-container');  
    newsItems.forEach(item => {
        const article = document.createElement('article');
        const header = document.createElement('h3');
        header.textContent = item.header;  

        const date = document.createElement('p');
        date.textContent = new Date(item.date).toLocaleDateString();

        const content = document.createElement('p');
        content.textContent = item.content; 

        if (item.image && item.image.url) {  
            const image = document.createElement('img');
            image.src = item.image.url;
            image.alt = item.header;
            article.appendChild(image);
        }

        article.appendChild(header);  
        article.appendChild(date);  
        article.appendChild(content); 
        newsList.appendChild(article);  
    });
}

fetchNews();

async function fetchNews() {
    const query = `
        query {
            aktualnoscis {
                header
                date
                image {
                    url
                }
            }
        }
    `;
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${ACCESS_TOKEN}`,
        },
        body: JSON.stringify({ query }),
    });
    const data = await response.json();

    console.log('API Response:', data); // Dodaj logowanie odpowiedzi

    if (data.errors) {
        console.error('Błąd podczas pobierania danych:', data.errors);
        return;
    }

    displayNews(data.data.aktualnoscis);
}