function openHelp() {
    // Show the Help information when the "Help" button is clicked
    document.getElementById("helpInfo").style.display = "block";
    
    // Hide the other sections if needed
    document.getElementById("tutorialInfo").style.display = "none";
    document.getElementById("communityInfo").style.display = "none";
}

function openTutorial() {
    // Similar logic for the Tutorial section
    document.getElementById("tutorialInfo").style.display = "block";
    
    // Hide the other sections if needed
    document.getElementById("helpInfo").style.display = "none";
    document.getElementById("communityInfo").style.display = "none";
}

function openCommunity() {
    // Similar logic for the Community section
    document.getElementById("communityInfo").style.display = "block";
    
    // Hide the other sections if needed
    document.getElementById("helpInfo").style.display = "none";
    document.getElementById("tutorialInfo").style.display = "none";
}
// OPEN AND NEW BUTTON FUNCTIONALITY
document.getElementById("fileInput").addEventListener("change", function() {
    const fileInput = document.getElementById("fileInput");
    const uploadedImage = document.getElementById("uploadedImage");
    
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const objectURL = URL.createObjectURL(file);
        
        // Display the uploaded image
        uploadedImage.src = objectURL;
        document.getElementById("display_image").style.display = "block";
    }
});
