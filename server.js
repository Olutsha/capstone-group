const puppeteer = require('puppeteer');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/generate-pdf', async (req, res) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://127.0.0.1:5500/public/index.html', { waitUntil: 'networkidle2' });
    const pdfBuffer = await page.pdf({ format: 'A4' });
    await browser.close();

    res.setHeader('Content-Type', 'application/pdf');
    res.send(pdfBuffer);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
