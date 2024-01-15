const express = require('express');
var cors = require('cors');
const connection = require('./connection');
const korisnikRoute = require('./routes/korisnik');
const kategorijeRoute = require('./routes/kategorije');
const dobavljaciRoute = require('./routes/dobavljaci');
const sirovineRoute = require('./routes/sirovine');
const proizvodni_procesiRoute = require('./routes/proizvodni_procesi');
const proizvodiRoute = require('./routes/proizvodi');
const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/korisnik', korisnikRoute);
app.use('/kategorije', kategorijeRoute);
app.use('/dobavljaci', dobavljaciRoute);
app.use('/sirovine', sirovineRoute);
app.use('/proizvodni_procesi', proizvodni_procesiRoute);
app.use('/proizvodi', proizvodiRoute);

module.exports = app;