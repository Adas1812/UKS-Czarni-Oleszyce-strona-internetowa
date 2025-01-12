// Funkcja tworząca galerię
function createGallery(containerId, folderPath, imageNames) {
    const gallery = document.getElementById(containerId); // Pobieramy kontener po ID
    
    // Sprawdzamy, czy kontener istnieje
    if (!gallery) {
        console.error(`Nie znaleziono elementu z ID: ${containerId}`);
        return;
    }

    // Dla każdego zdjęcia w tablicy imageNames
    imageNames.forEach((imageName) => {
        const img = document.createElement("img");  // Tworzymy nowy element <img>
        img.src = folderPath + imageName; // Ustawiamy ścieżkę do zdjęcia
        img.alt = `Zdjęcie z galerii ${containerId}`; // Ustawiamy alternatywny tekst

        // Dodajemy nasłuchiwacz zdarzenia, aby sprawdzić, czy zdjęcie zostało poprawnie załadowane
        img.onload = () => {
            console.log(`Załadowano zdjęcie: ${imageName}`);
        };
        img.onerror = () => {
            console.error(`Błąd ładowania zdjęcia: ${imageName}`);
        };

        // Dodajemy zdjęcie do kontenera galerii
        gallery.appendChild(img); 
    });
}

// Galeria Czarni-Dachnów
const dachnowImages = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg",
    "img6.jpg"
];
const dachnowFolderPath = "galeria/Czarni - Dachnów/";  // Ścieżka do zdjęć
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
const turniejFolderPath = "galeria/Czarni - Turniej Młodów/";  // Ścieżka do zdjęć
createGallery("gallery2", turniejFolderPath, turniejImages);
