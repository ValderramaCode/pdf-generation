import * as PDFObject from 'pdfobject';
import htmlCanvas from 'html2canvas'
import generatePedidoReportWHeader from './pedido-report-with-client-headers';
import generatePedidoReportNoHeader from './pedido-report-no-client-header';


// (5015+185) É o valor máximo para um valor chegar Para manter uma margem da borda

// const textHtml = '<table><tbody><tr><td><strong>TITLE1</strong>: VALUE1</td></tr><tr><td><strong>TITLE2</strong>: VALUE2</td></tr><tr><td><strong>KKKK</strong>: kkkkkkkkk</td></tr></tbody></table>'
// doc.fromHTML(textHtml, 1, 1)

// doc.text('Olá Mundo!', 10, 20);
// doc.text('Olá Mundo!', 70, 50);
// doc.line(1, 1, 445, 1);  // To define min and max width
// doc.line(1, 1, 1, 630);  // To define min and max height

// const willDrawCellImplementation = (data) => {

//     if (data.section === 'body'
//      && data.row.index===0 
//      ) {

        // const colonIndex = data.cell.raw.indexOf(':');
        // const boldText = data.cell.raw.substring(0, colonIndex)
        // const normalText = data.cell.raw.substring(colonIndex);
        // console.log("boldText is  " + boldText + "  normalText is  " + normalText);

        // console.log(data.cell)
        // console.log(data)
        // console.log(data.doc.autoTableText('Texto Teste', 1, 1))
        // HTMLTableCellElement

        // data.cell.raw = '<b>'+boldText+'</b>'+normalText;
        // data.cell.text = '<b>' + boldText + '</b>' + normalText;

        // console.log("after data cell iss  ");
        // console.log(data.cell.raw);

        // console.log('<b>' + boldText + '</b>' + normalText);

//     }
// }

// autoTable(doc, {
//     theme: 'plain',
//     tableWidth: 230,
//     margin: {
//         left: 170
//     },
//     styles: {
//         cellWidth: 'wrap',
//         fontSize: 9,
//         cellPadding: {
//             top: 2
//         }
//     },
//     body: [
//         [ 'TITLE1 : VALUE1'],
//         ['TITLE2 : VALUE2'],
//         [ 'kkkkkkkkkkkkkkkkkkkkk: kkkkkkkkkkkkkkkkkkkk']
//     ],
    // willDrawCell: willDrawCellImplementation
// })

// doc.table();

window.onload =
    () => {
        // const htmlToPDFication = document.querySelector('#section-1-container')
        // doc.fromHTML(htmlToPDFication, 1, 1)

        // const htmlElement = document.querySelector('#section-1-container')
        // const htmlTitle = document.querySelector('#Title')
        // console.log(htmlElement)

        // htmlCanvas(htmlElement).then( (canvas) => {
        //     console.log(canvas)
        //     canvas.hee
        //     let headerImgData = canvas.toDataURL('image/jpeg');

        //     console.log(headerImgData)
        //     doc.addImage(headerImgData, 'JPEG', 1, 1 , 800, 40);

            // doc.line(1, 20, 445, 20);

            const generatedPDF = generatePedidoReportNoHeader();
            PDFObject.embed(generatedPDF.toString(), '#samplePDF');
        // })
        
        
    }