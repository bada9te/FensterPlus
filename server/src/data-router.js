const express = require('express');
const writeJson = require('write-json'); 
const path = require('path');



// content data files
const certificates = require('../contentData/certificates.json');
const notes = require('../contentData/notes.json');
const partners = require('../contentData/partners.json');
const products = require('../contentData/products.json');
const slider = require('../contentData/slider.json');


// data router
const dataRouter = express.Router();


// certificates
dataRouter.get('/certificates', (req, res) => {
    return res.status(200).json({
        data: certificates.data,
    });
});
dataRouter.post('/rm-certificates', (req, res) => {
    try {
        const titleToRemove = req.body.titleToRemove;
        certificates.data = certificates.data.filter((item) => item.title !== titleToRemove);
        writeJson(path.join(__dirname, '..', 'contentData', 'certificates.json'), certificates);
        return res.status(201).json({
            done: true,
        });
    } catch (error) {
        return res.status(400).json({
            done: false,
            error: error,
        });
    }
});


// notes
dataRouter.get('/notes', (req, res) => {
    return res.status(200).json({
        data: notes.data,
    });
});
dataRouter.post('/rm-notes', (req, res) => {
    try {
        const titleToRemove = req.body.titleToRemove;
        notes.data = notes.data.filter((item) => item.title !== titleToRemove);
        writeJson(path.join(__dirname, '..', 'contentData', 'notes.json'), notes);

        return res.status(201).json({
            done: true,
        });
    } catch (error) {
        return res.status(400).json({
            done: false,
            error: error,
        });
    }
});


// partners
dataRouter.get('/partners', (req, res) => {
    return res.status(200).json({
        data: partners.data,
    });
});
dataRouter.post('/rm-partners', (req, res) => {
    try {
        const titleToRemove = req.body.titleToRemove;
        partners.data = partners.data.filter((item) => item.title !== titleToRemove);
        writeJson(path.join(__dirname, '..', 'contentData', 'partners.json'), partners);

        return res.status(201).json({
            done: true,
        });
    } catch (error) {
        return res.status(400).json({
            done: false,
            error: error,
        });
    }
});


// products
dataRouter.get('/products', (req, res) => {
    return res.status(200).json({
        data: products.data,
    });
});
dataRouter.post('/rm-products', (req, res) => {
    try {
        const titleToRemove = req.body.titleToRemove;
        products.data = products.data.filter((item) => item.title !== titleToRemove);
        writeJson(path.join(__dirname, '..', 'contentData', 'products.json'), products);

        return res.status(201).json({
            done: true,
        });
    } catch (error) {
        return res.status(400).json({
            done: false,
            error: error,
        });
    }
});


// slider
dataRouter.get('/slider', (req, res) => {
    return res.status(201).json({
        data: slider.data,
    });
});
dataRouter.post('/rm-slider', (req, res) => {
    try {
        const titleToRemove = req.body.titleToRemove;
        slider.data = slider.data.filter((item) => item.title !== titleToRemove);
        writeJson(path.join(__dirname, '..', 'contentData', 'slider.json'), slider);

        return res.status(201).json({
            done: true,
        });
    } catch (error) {
        return res.status(400).json({
            done: false,
            error: error,
        });
    }
});



module.exports = dataRouter;
