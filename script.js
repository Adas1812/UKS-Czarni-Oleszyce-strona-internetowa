
function createGallery(containerId, folderPath, imageNames) {
const gallery = document.getElementById(containerId);
}

imageNames.forEach((imageName) => {
    const img = document.createElement("img"); 
    img.src = folderPath + imageName;
    gallery.appendChild(img); 
});

/* Czarni-Dachnów */
const dachnowImages = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg",
    "img6.jpg"
];
createGallery("gallery1", "/galeria/Czarni - Dachnów/", dachnowImages);

/* Czarni-Turniej Młodów */
const turniejImages = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg",
    "img6.jpg"
];
createGallery("gallery2", "/galeria/Czarni - Turniej Młodów/", turniejImages);
