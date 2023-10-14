// JavaScript function to navigate to the 'third.html' page
function goToThirdPage() {
    // Specify the URL of the 'third.html' page
    var thirdPageURL = 'third.html';

    // Redirect to the 'third.html' page
    window.location.href = thirdPageURL;
}

// Add a click event listener to the button
var goToThirdPageButton = document.getElementById('goToThirdPageButton');

if (goToThirdPageButton) {
    goToThirdPageButton.addEventListener('click', goToThirdPage);
}
// JavaScript code to shuffle images when the button is clicked
// Define image sources for different categories
const imageCategories = {
    'Layer Shift': [
        'train/Layer-shift/img_003.jpeg ',
'train/Layer-shift/img_016.jpeg ',
'train/Layer-shift/img_028.jpeg', 
'train/Layer-shift/img_037.jpeg' ,
'train/Layer-shift/img_041.jpeg ',
'train/Layer-shift/img_048.jpeg ',
'train/Layer-shift/img_043.jpeg ',
'train/Layer-shift/img_049.jpeg ',
'train/Layer-shift/img_061.jpeg',
'train/Layer-shift/img_055.jpeg ',
'train/Layer-shift/img_081.jpeg' ,
'train/Layer-shift/img_098.jpeg',
 'train/Layer-shift/img_101.jpeg', 
 'train/Layer-shift/img_097.jpeg',
  'train/Layer-shift/img_109.jpeg',
   'train/Layer-shift/img_116.jpeg ',
   'train/Layer-shift/img_118.jpeg',
    'train/Layer-shift/img_128.jpeg ',
    'train/Layer-shift/img_132.jpeg',
    'train/Layer-shift/img_136.jpeg',
  'train/Layer-shift/img_137.jpeg',
     ' train/Layer-shift/img_154.jpeg ',
      'train/Layer-shift/img_159.jpeg ',
     ' train/Layer-shift/img_174.jpeg ',
     ' train/Layer-shift/img_175.jpeg ',
      'train/Layer-shift/img_195.jpeg ',
      'train/Layer-shift/img_197.jpeg ',
      'train/Layer-shift/img_207.jpeg ',
     ' train/Layer-shift/img_216.jpeg ',
     ' train/Layer-shift/img_210.jpeg ',
     ' train/Layer-shift/img_221.jpeg ',
      'train/Layer-shift/img_237.jpeg', 
     ' train/Layer-shift/img_251.jpeg ',
      'train/Layer-shift/img_244.jpeg'
        // Add more images for Category 1 as needed
    ],
    'Under Extrusion': [
        'train/Under-Extrusion/img_079.jpeg', 
        'train/Under-Extrusion/img_000.jpeg', 
        'train/Under-Extrusion/img_007.jpeg ',
        'train/Under-Extrusion/img_004.jpeg' ,
        'train/Under-Extrusion/img_013.jpeg' ,
        'train/Under-Extrusion/img_024.jpeg ',
        'train/Under-Extrusion/img_051.jpeg' ,
        'train/Under-Extrusion/img_069.jpeg ',
        'train/Under-Extrusion/img_070.jpeg ',
        'train/Under-Extrusion/img_073.jpeg ',
        'train/Under-Extrusion/img_075.jpeg ',
        'train/Under-Extrusion/img_084.jpeg' ,
        'train/Under-Extrusion/img_095.jpeg' ,
        'train/Under-Extrusion/img_117.jpeg', 
        'train/Under-Extrusion/img_142.jpeg' ,
        'train/Under-Extrusion/img_131.jpeg ',
        'train/Under-Extrusion/img_185.jpeg ',
       ' train/Under-Extrusion/img_189.jpeg ',
        'train/Under-Extrusion/img_223.jpeg ',
        'train/Under-Extrusion/img_247.jpeg ',
        'train/Under-Extrusion/img_249.jpeg ',
        'train/Under-Extrusion/img_271.jpeg' ,
        'train/Under-Extrusion/img_277.jpeg' 
        // Add more images for Category 2 as needed
    ],
    'Warping': [
        'train/Warping/img_001.jpeg ',
             'train/Warping/img_009.jpeg' ,
             'train/Warping/img_019.jpeg' ,
             'train/Warping/img_021.jpeg ',
             'train/Warping/img_042.jpeg ',
             'train/Warping/img_045.jpeg ',
             'train/Warping/img_050.jpeg ',
             'train/Warping/img_083.jpeg ',
            ' train/Warping/img_093.jpeg ',
             'train/Warping/img_105.jpeg' ,
             'train/Warping/img_089.jpeg' ,
             'train/Warping/img_052.jpeg' ,
             'train/Warping/img_071.jpeg ',
             'train/Warping/img_106.jpeg' ,
             'train/Warping/img_112.jpeg ',
             'train/Warping/img_144.jpeg' ,
             'train/Warping/img_119.jpeg', 
             'train/Warping/img_110.jpeg' ,
             'train/Warping/img_148.jpeg ',
             'train/Warping/img_151.jpeg ',
             'train/Warping/img_161.jpeg ',
             'train/Warping/img_156.jpeg ',
           '  train/Warping/img_168.jpeg ',
             'train/Warping/img_176.jpeg ',
             'train/Warping/img_172.jpeg ',
             'train/Warping/img_173.jpeg'
        // Add more images for Category 3 as needed
    ],
};
         // Function to shuffle an array
         function shuffleArray(array) {
            const shuffledArray = [...array];
            for (let i = shuffledArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
            }
            return shuffledArray;
        }

        // Function to display shuffled images from different categories
        function shuffleAndDisplayImages() {
            const imageContainer = document.getElementById('imageContainer');
            const categoryCountsContainer = document.getElementById('categoryCounts');

            if (!imageContainer || !categoryCountsContainer) {
                console.error("Containers not found.");
                return;
            }

// Clear existing images
imageContainer.innerHTML = '';

// Calculate the total count of images inside each category
const categoryCounts = {};

for (const category in imageCategories) {
    if (imageCategories.hasOwnProperty(category)) {
        const categoryImages = imageCategories[category];
        // Store the count for this category
        categoryCounts[category] = categoryImages.length;
    }
}

// Display category counts
for (const category in categoryCounts) {
    if (categoryCounts.hasOwnProperty(category)) {
        const categoryCount = categoryCounts[category];
        const categoryCountText = document.createElement('p');
        categoryCountText.textContent = `${category}: ${categoryCount} images in the category`;
        categoryCountsContainer.appendChild(categoryCountText);
    }
}

// Shuffle each category separately and limit to 5 images per category
const shuffledImages = [];

for (const category in imageCategories) {
    if (imageCategories.hasOwnProperty(category)) {
        const categoryImages = imageCategories[category];
        // Shuffle the category images
        const shuffledCategoryImages = shuffleArray(categoryImages);
        // Take the first 5 images (or less if there are fewer than 5)
        const selectedImages = shuffledCategoryImages.slice(0, 6);
        // Add the selected images to the shuffled images array
        shuffledImages.push(...selectedImages);
    }
}

// Create and append shuffled images with labels
shuffledImages.forEach(imageUrl => {
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = 'Shuffled Image';
    img.width = 200; // Adjust the width as needed
    img.height = 150; // Adjust the height as needed

    // Get the category name from the imageCategories object
    let imageCategory = '';
    for (const category in imageCategories) {
        if (imageCategories.hasOwnProperty(category)) {
            if (imageCategories[category].includes(imageUrl)) {
                imageCategory = category;
                break;
            }
        }
    }

    const categoryLabel = document.createElement('p');
    categoryLabel.textContent = `${imageCategory}`;

    imgContainer.appendChild(img);
    imgContainer.appendChild(categoryLabel);
    imageContainer.appendChild(imgContainer);
});

        }

        // Add a click event listener to the button
        const labeledImagesButton = document.getElementById('labeledImagesButton');
        if (labeledImagesButton) {
            labeledImagesButton.addEventListener('click', shuffleAndDisplayImages);
        } else {
            console.error("Button not found.");
        }



