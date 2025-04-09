const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const formRoutes = require('./routes/formRoutes');

const app = express();
const PORT = 3000;

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine' , ejs);

// routes
app.use('/', formRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost: ${PORT}`);
});