const http = require('http');
const express = require('express');
const multer = require('multer');
const path = require('path');
const writeJson = require('write-json'); 



// content data files
const certificates = require('./contentData/certificates.json');
const notes = require('./contentData/notes.json');
const partners = require('./contentData/partners.json');
const products = require('./contentData/products.json');



// init
const APP = express();
const PORT = process.env.PORT || 8000;




// multer
const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, 'uploads')
    },
    filename: (req, file, callBack) => {
        callBack(null, Date.now() + file.originalname)
    }
})
let upload = multer({ dest: 'uploads/', storage: storage })

// one input file upload route
APP.post('/upload-single', upload.single('file'), (req, res, next) => {
    const file = req.file;

    if (!file) {
        const error = new Error('No File')
        return res.status(400).json({
            done: false,
            error: error.message,
        });
    }

    switch (req.body.what) {
        case 'certificate':
            certificates.data.push({
                title: req.body.title,
                file: file.filename,
            });
            writeJson(path.join(__dirname, 'contentData', 'certificates.json'), certificates); 
            break;
        case 'note':
            notes.data.push({
                title: req.body.title,
                description: req.body.description,
                file: file.fieldname,
            });
            writeJson(path.join(__dirname, 'contentData', 'notes.json'), notes);
            break;
        case 'partner':
            partners.data.push({
                title: req.body.title,
                description: req.body.description,
                file: file.filename,
            });
            writeJson(path.join(__dirname, 'contentData', 'partners.json'), partners);
            break;
        default:
            break;
    }
    
    res.status(201).json({
        done: true,
        file: file,
    });
});

// multi-inputs file upload
APP.post('/upload-multiple-fields', upload.fields([
    { name: 'file1', maxCount: 1 },
    { name: 'file2', maxCount: 1 },
]), (req, res, next) => {

    const file1 = req.files.file1;
    const file2 = req.files.file2;


    if (!file1 || !file2) {
        const error = new Error('No File')
        return res.status(400).json({
            done: false,
            error: error.message,
        });
    }

    switch (req.body.what) {
        case 'product':
            products.data.push({
                title: req.body.title,
                description: req.body.description,
                preview: file1[0].filename,
                details: file2[0].filename,
            });
            writeJson(path.join(__dirname, 'contentData', 'products.json'), products);
            break;
        default:
            break;
    }

    return res.status(201).json({
        done: true,
        file1: file1,
        file2: file2,
    });
});





// frontend
APP.use(express.static(__dirname));
APP.use(express.static(path.join(__dirname, 'public')));
APP.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});





// run
APP.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
