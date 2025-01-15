
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

const API_URL = "https://studio-ap-south-1.hygraph.com/8fed94f6-024e-4563-a9b6-79131ee4acaf/3933d1c53f96448c8b6accf556dca93a/playground";

    const query = `
      query {
        aktualnoscis {
          image {
            id
            url
          }
          header
          date
        }
      }
    `;

    async function fetchNews() {
      try {
        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query }),
        });

        const { data } = await response.json();
        return data.aktualnoscis;
      } catch (error) {
        console.error("Błąd podczas pobierania danych:", error);
        return [];
      }
    }
    async function renderNews() {
      const newsContainer = document.getElementById("news-container");
      const news = await fetchNews();

      newsContainer.innerHTML = "";

      news.forEach((article) => {
        const articleElement = document.createElement("div");
        articleElement.className = "article";

        const formattedDate = new Date(article.date).toLocaleDateString("pl-PL", {
          day: "numeric",
          month: "long",
          year: "numeric",
        });

        articleElement.innerHTML = `
          <a href="#"><img class="article-img" src="${article.image?.url || 'img/default.jpg'}" alt="${article.header || 'Brak tytułu'}"></a>
          <p class="undertext">${formattedDate}</p>
          <h3 class="article-header">${article.header || 'Brak tytułu'}</h3>
        `;

        newsContainer.appendChild(articleElement);
      });
    }

    // Wywołanie renderowania po załadowaniu strony
    renderNews();
