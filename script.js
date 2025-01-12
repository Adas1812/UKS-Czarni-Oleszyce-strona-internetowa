
function createGallery(containerId, folderPath, imageNames) {
    const gallery = document.getElementById(containerId); /
    

    imageNames.forEach((imageName) => {
        const img = document.createElement("img");  
        img.src = folderPath + imageName; 
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
const dachnowFolderPath = "galeria/Czarni - Dachnów/";  
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
const turniejFolderPath = "galeria/Czarni - Turniej Młodów/";  
createGallery("gallery2", turniejFolderPath, turniejImages);
