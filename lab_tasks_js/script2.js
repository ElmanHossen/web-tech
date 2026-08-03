var images = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600"
];

var current = 0;
var img = document.getElementById("mainImg");

document.getElementById("nextBtn").addEventListener("click", function() {
    current = current + 1;
    if (current >= images.length) {
        current = 0;
    }
    img.src = images[current];
});

document.getElementById("prevBtn").addEventListener("click", function() {
    current = current - 1;
    if (current < 0) {
        current = images.length - 1;
    }
    img.src = images[current];
});

setInterval(function() {
    current = current + 1;
    if (current >= images.length) {
        current = 0;
    }
    img.src = images[current];
}, 3000);