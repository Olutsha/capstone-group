const express = require('express');
const puppeteer = require('puppeteer');

const app = express();
const port = 5500;

app.use(express.static('public'));

app.get('/generate-pdf', async (req, res) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navigate to the third.html page
    await page.goto('http://127.0.0.1:5500/public/third.html', { waitUntil: 'networkidle0' });

    // Click the "Generate PDF" button
    await page.click('#generate-pdf-button');

    // Wait for some time to allow PDF generation
    await page.waitForTimeout(2000);

    // Generate a PDF from the page content
    const pdfBuffer = await page.pdf({ format: 'A4' });

    // Close the browser
    await browser.close();

    // Set the response headers to indicate a PDF file
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=output.pdf');

    // Send the PDF buffer as the response
    res.send(pdfBuffer);
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
