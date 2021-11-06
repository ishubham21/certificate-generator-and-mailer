const pdfdoc = require('pdfkit')
const fs = require('fs')

const doc = new pdfdoc({
    layout: "landscape",
    size: "A4"
})

const generate = (name) => {
    
    doc.pipe(fs.createWriteStream(`${name}.pdf`))
    
    doc.image(
        'assets/both-tracks.png',
        doc.page.width / 2 - maxWidth / 2,
        60, 
        {
          fit: [maxWidth, maxHeight],
          align: 'center',
         }
      );
    // doc.font("fonts/DancingScript-VariableFont_wght.ttf");

    // Draw the name
    doc.fontSize(60).text(name, 20, 265, {
        align: "center"
    });

    doc.end()
}

generate("Shubham")
