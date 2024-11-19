const express = require('express');
const app = express();
const port = 3000; // Choose your desired port
const stockController = require('./controllers/stockController'); // Add this line


app.set('view engine', 'pug'); // Set Pug as the view engine
app.set('views', './views');   // Specify the directory for your Pug views
app.use(express.static('./views'));
app.use(express.urlencoded({ extended: true })); // To parse form data

// Define routes
app.get('/', stockController.index);
app.post('/create', stockController.create);
app.get('/details/:id', stockController.convertCurrency); // Route for viewing details and currency conversion


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});