document.addEventListener('DOMContentLoaded', function () {
    // Function to convert HTML to PDF
    async function convertHTMLToPDF() {
        const { PDFDocument } = PDFLib;

        // Create an array of HTML file URLs to convert to PDF
        const htmlFileURLs = [
            'index.html',
            'Second.html',
            'third.html',
            // Add more HTML file URLs as needed
        ];

        // Create a new PDF document
        const pdfDoc = await PDFDocument.create();

        // Iterate through the HTML file URLs and convert each to a PDF page
        for (const htmlFileURL of htmlFileURLs) {
            // Fetch the HTML content
            const response = await fetch(htmlFileURL);
            const htmlContent = await response.text();

            // Add a new page to the PDF document
            const page = pdfDoc.addPage([595, 842]); // A4 page size (you can adjust the size)

            // Embed the HTML content as an iframe on the page
            page.drawText(htmlContent, {
                x: 10,
                y: 842 - 10, // Adjust the y-coordinate as needed
                size: 12,
                maxWidth: 575, // Adjust the width as needed
                colorRgb: [0, 0, 0], // Black text color
            });
        }

        // Serialize the PDF to bytes
        const pdfBytes = await pdfDoc.save();

        // Create a blob from the PDF data
        const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });

        // Create a download link for the PDF
        const downloadLink = document.createElement('a');
        downloadLink.href = window.URL.createObjectURL(pdfBlob);
        downloadLink.download = 'converted-pdfs.pdf';
        downloadLink.click();
    }

    // Attach a click event listener to the "Generate PDFs" button
    document.getElementById('generatePdfButton').addEventListener('click', convertHTMLToPDF);
});