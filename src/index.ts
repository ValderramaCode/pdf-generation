import jsPDF from 'jspdf';
import autoTable, { Styles } from 'jspdf-autotable';
import * as PDFObject from 'pdfobject';

console.log('olá mundo')

const doc = new jsPDF('portrait', 'px');

// doc.text('Olá Mundo!', 10, 20);

autoTable(doc, {
    tableWidth: 100,
    styles: {
        cellWidth: "wrap",
    },
    body: [
        ['TITLE1', 'VALUE1'],
        ['TITLE2', 'VALUE2']
    ]
 })

const generatedPDF = doc.output('bloburi')

window.onload = 
    () => PDFObject.embed(generatedPDF.toString(), '#samplePDF');