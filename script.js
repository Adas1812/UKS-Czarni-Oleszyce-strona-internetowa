const imageNames = [
    "galeria/Czarni-Dachnów/img1.jpg",
    "galeria/Czarni-Dachnów/img2.jpg",
    "galeria/Czarni-Dachnów/img3.jpg",
    "galeria/Czarni-Dachnów/img4.jpg",
    "galeria/Czarni-Dachnów/img5.jpg",
    "galeria/Czarni-Dachnów/img6.jpg"
]

const folderPath = "galeria/";

const gallery = document.getElementById("gallery");

imageNames.forEach((imageName) => {
    const img = document.createElement("img"); 
    img.src = folderPath + imageName; 
    gallery.appendChild(img); 
});