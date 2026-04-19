const fs = require('node:fs');
const path = require('node:path');
const PDFDocument = require('pdfkit');

const outputPath = path.join(__dirname, 'sample.pdf');

const doc = new PDFDocument({
    size: 'A4',
    margin: 50,
    info: {
        Title: 'Sample PDF',
        Author: 'BEL C20 JS',
        Subject: 'Node.js fs module demo',
    },
});

doc.pipe(fs.createWriteStream(outputPath));

doc.fontSize(24).text('Hello World !!!', { align: 'center' });
doc.moveDown();

doc.fontSize(14).text('This is a sample PDF generated using Node.js.', {
    align: 'left',
});
doc.moveDown();

doc.fontSize(12).text(
    'It demonstrates how to create files on disk using the fs module along with the pdfkit library. ' +
    'You can add text, shapes, images, and more to a PDF programmatically.'
);
doc.moveDown();

doc.fontSize(12).list([
    'Built with Node.js',
    'Uses the fs module to write to disk',
    'Uses pdfkit to generate PDF content',
]);
doc.moveDown();

doc.fontSize(10)
    .fillColor('gray')
    .text(`Generated on: ${new Date().toLocaleString()}`, { align: 'right' });

doc.end();

doc.on('end', () => {
    console.log(`PDF created at: ${outputPath}`);
});
