// Import the pdf-lib library (include this script tag in your HTML)
<script src="https://cdn.jsdelivr.net/npm/pdf-lib@1.20.0/dist/pdf-lib.js"></script>

// Function to generate a PDF
async function generatePDF() {
    // Create a new PDF document
    const { PDFDocument, rgb } = PDFLib;

    // Create a new document
    const pdfDoc = await PDFDocument.create();

    // Add a page
    const page = pdfDoc.addPage([400, 400]);

    // Get the page's context
    const contentStream = page.getContentStream();

    // Set the font and size
    const font = await pdfDoc.embedFont(PDFLib.StandardFonts.Helvetica);
    contentStream.setFont(font);
    contentStream.setFontSize(30);
    contentStream.setFillColor(rgb(0, 0, 0));

    // Add text to the page
    contentStream.drawText('Hello, PDF!', {
        x: 50,
        y: 300,
    });

    // Serialize the PDF to bytes
    const pdfBytes = await pdfDoc.save();

    // Create a blob from the PDF data
    const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });

    // Create a download link for the PDF
    const downloadLink = document.createElement('a');
    downloadLink.href = window.URL.createObjectURL(pdfBlob);
    downloadLink.download = 'generated-pdf.pdf';
    downloadLink.click();
}

// Attach a click event listener to the button
document.getElementById('generatePdfButton').addEventListener('click', generatePDF);
