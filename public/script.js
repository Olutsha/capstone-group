  // Function to generate and download the PDF
  function generatePDF() {
    const element = document.getElementById('third.html'); // Replace with your HTML element's ID
    const pdfOptions = {
      margin: 10,
      filename: 'generated-pdf.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    html2pdf().from(element).set(pdfOptions).outputPdf().then(function (pdf) {
      // Save the PDF as a blob
      const blob = new Blob([pdf], { type: 'application/pdf' });

      // Create a temporary link to trigger the download
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = pdfOptions.filename;
      link.style.display = 'none';

      // Trigger the download and remove the link
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }

  // Attach the generatePDF function to the button click event
  document.getElementById('generate-pdf').addEventListener('click', generatePDF);

