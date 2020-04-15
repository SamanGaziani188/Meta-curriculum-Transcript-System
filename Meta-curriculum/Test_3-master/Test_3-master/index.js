/*
@author: Emad Bin Abid
@date: July 04, 2018
*/

//Application dependencies
    //custom dependencies
const server = require('./server');

    //npm dependencies
const express = require('express');
const PDFDocument = require('pdfkit');
const fs = require('fs');

const app = express();

//Middlewares
app.use(express.json());    //To parse json objects sent by the client.


app.get('/', (req, res) => {
    var 
    doc = new PDFDocument({
        margin:30
    });
    doc.autoFirstPage = false;
    
    doc.pipe(fs.createWriteStream('output.pdf'));

    //doc.font('fonts/PalatinoBold.ttf')
    doc.fontSize(25)
    .fillColor("purple")
    doc.text('Habib University', 200, 100)
    .fillColor('black')
    .fontSize(20)
    doc.text('Meta-curriculum Transcript', 175, 130)
    doc.text('Meta-curriculum Transcript', 175, 130)
    .fontSize(9)
    doc.font('Fonts/arial.ttf')
    doc.text("Student's Number:   00180",30,170)
    doc.text("Student's Number:",30,170)
    doc.text("Student's Name:      Neha Panjwani",30,185)
    doc.text("Student's Name:",30,185)
    doc.text("Issue Date:              May 5, 2018",30,200)
    doc.text("Issue Date:",30,200)
    doc.text("Program:       Bachelors of Science(Honors)",320,170)
    doc.text("Program",320,170)
    doc.text("Major:         Social Development and Policy",320,185)
    doc.text("Major:",320,185)
    doc.text("School:        Social of Arts, Humanities and Social Sciences",320,200)
    doc.text("School:",320,200)
    //Student Leadership
    doc.image('Images/StudentLeadership.png', 30, 230)



    doc.image('Images/header.png', 320, 230)
    doc.text("Student Leadership",340,232)




    doc.pipe(res);
    doc.end()







    // const doc = new PDFDocument()
    // let filename = req.body.filename
    // // Stripping special characters
    // filename =  'sample.pdf'
    // // Setting response to 'attachment' (download).
    // // If you use 'inline' here it will automatically open the PDF
    // res.setHeader('Content-disposition', 'attachment; filename="' + filename + '"')
    // res.setHeader('Content-type', 'application/pdf');
    // // const content = 'Hello PDF';
    
    // var dd = {
    //     content: [
    //         'First paragraph',
    //         'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines'
    //     ]
        
    // }

    // doc.y = 300
    // doc.text(dd, 50, 50)
    // doc.pipe(res)
    // doc.end()
});


//Running the server
server.run(app, 3000);

