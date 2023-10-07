// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get the button element
    var generateButton = document.getElementById("generate-pdf");

    // Add a click event listener to the button
    generateButton.addEventListener("click", function () {
        // Define the HTML file URLs to fetch
        var htmlFileUrls = ["http://127.0.0.1:5500/index.html", "http://127.0.0.1:5500/Second.html", "http://127.0.0.1:5500/third.html"];

        // Create an array to store the generated PDFs
        var pdfs = [];

        // Fetch content from each HTML file and generate a PDF
        Promise.all(
            htmlFileUrls.map(function (url) {
                return fetch(url)
                    .then(response => response.text())
                    .then(htmlContent => {
                        // Create a new jsPDF instance
                        var doc = new jsPDF();

                        // Add content from the HTML file to the PDF
                        doc.fromHTML(htmlContent, 15, 15);

                        // Store the generated PDF in the array
                        pdfs.push(doc);

                        return doc;
                    });
            })
        )
        .then(function () {
            // Combine and save or display the generated PDFs (e.g., in a single file or separate files)
            pdfs.forEach(function (pdf, index) {
                pdf.save("generated-pdf-" + (index + 1) + ".pdf");
            });
        })
        .catch(error => {
            console.error("Error loading content: " + error);
        });
    });
});
console.log(typeof jsPDF);