//Array of images for the slideshow
const bannerImages = [
    'images/banner11.jpg',
    'images/banner22.jpg',
    'images/banner33.jpg',
    'images/banner44.jpg',
];

// Current image index
let currentImageIndex = 0;

// Function to change the background image
function changeBannerImage() {
    const banner = document.querySelector('.banner');
    
    // Update the background image of the banner
    banner.style.backgroundImage = `url(${bannerImages[currentImageIndex]})`;

    // Move to the next image index (loop back to 0 if we're at the last image)
    currentImageIndex = (currentImageIndex + 1) % bannerImages.length;
}

// Change image every 5 seconds (5000 milliseconds)
setInterval(changeBannerImage, 2000);

// Initial call to set the first image
changeBannerImage(); 

