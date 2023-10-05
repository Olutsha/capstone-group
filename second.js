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

