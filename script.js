const imageNames = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg",
    "img6.jpg"
]

const folderPath = "/galeria/Czarni - Dachnów/";

const gallery = document.getElementById("gallery");

imageNames.forEach((imageName) => {
    const img = document.createElement("img"); 
    img.src = folderPath + imageName; 
    gallery.appendChild(img); 
});