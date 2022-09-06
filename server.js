const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();

// DB Config
require('dotenv').config();;

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Express body parser
app.use(express.urlencoded({ extended: true }));


// Routes
app.use('/index', require('./routes/index.js'));
app.use('/', require('./routes/index.js'));
app.use(express.static(__dirname));


app.all('*', (req, res) => {
  res.render("./error-404.ejs")
})

process.on("SIGHUP", function () {
  console.log("Stopping server.");
  setTimeout(function() {
    process.exit();
 }, 2000);
})

const PORT = process.env.PORT || 5555;
app.listen(PORT, console.log(`Server starting --GEDA Logistics-- `));
