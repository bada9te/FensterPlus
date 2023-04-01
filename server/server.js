const express = require('express');
const path = require('path');
const initMulter = require('./src/multer');



// init
const app = express();
const PORT = process.env.PORT || 8000;



// multer (file upload)
initMulter(app);

// json
app.use(express.json());

// data routes
app.use('/get', require('./src/data-router'));



// frontend
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});



// run
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
