import html2pdf from './html2pdf.js';

// Function to generate and download the PDF
function generatePDF() {
  const element = document.getElementById('third.html'); // Replace 'your-element-id' with the actual ID of your HTML element
  const pdfOptions = {
    margin: 10,
    filename: 'generated-pdf.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
  };

  html2pdf().from(element).set(pdfOptions).save();
}

// Attach the generatePDF function to the button click event
document.getElementById('generate-pdf').addEventListener('click', generatePDF);
