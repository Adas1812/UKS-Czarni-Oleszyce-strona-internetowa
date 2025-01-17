
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


const lightbox = document.getElementById('lightbox');
const lightboxContent = document.querySelector('.lightbox-content');
const closeBtn = document.querySelector('.lightbox .close');

document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxContent.src = item.src;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
