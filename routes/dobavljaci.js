const express = require('express');
const router = express.Router();
const connection = require('../connection');

// Dobavi sve dobavljače

router.get('/get', (req, res) =>{
    var query = "select *from dobavljaci order by naziv";
    connection.query(query, (err, results) =>{
        if(!err){
            return res.status(200).json(results);
        }
        else{
            return res.status(500).json(err);
        }
    })
})


// Kreiranje dobavljača

router.post('/add', (req, res) =>{
    let dobavljaci = req.body;
    query = "insert into dobavljaci (naziv, jib, pdv, broj_telefona, kontakt_osoba, email_adresa, datum_pocetka) values(?,?,?,?,?,?,?)";
    connection.query(query, [dobavljaci.naziv, dobavljaci.jib, dobavljaci.pdv, dobavljaci.broj_telefona, dobavljaci.kontakt_osoba, dobavljaci.email_adresa, dobavljaci.datum_pocetka], (err, results) =>{
        if(!err){
            return res.status(200).json({message: "Dobavljač je uspješno dodan!"});
        }
        else{
            return res.status(500).json(err);
        }
    })
})


// Izmijeni dobavljača

router.patch('/update', (req, res) =>{
    let dobavljaci = req.body;
    var query = "update dobavljaci set naziv=?, pdv=?, broj_telefona=?, kontakt_osoba=?, email_adresa=?, datum_pocetka=?, datum_zavrsetka=? where id=?";
    connection.query(query, [dobavljaci.naziv, dobavljaci.pdv, dobavljaci.broj_telefona, dobavljaci.kontakt_osoba, dobavljaci.email_adresa, dobavljaci.datum_pocetka, dobavljaci.datum_zavrsetka, dobavljaci.id], (err, results) =>{
        if (!err){
            if(results.affectedRows == 0){
                return res.status(404).json({message:"Id biranog dobavljača se ne može naći"});
            }
            return res.status(200).json({message: "Dobavljač uspješno izmijenjen"});
        }
        else{
            return res.status(500).json(err);
        }
    })
})

// Izbriši dobavljača

router.delete('/delete', (req, res) => {
    let dobavljaci = req.body;
    let query = "delete from dobavljaci WHERE id=?";
    connection.query(query, [dobavljaci.id], (err, results) => {
        if (!err) {
            if(results.affectedRows == 0){
                return res.status(404).json({message:"Id biranog dobavljača se ne može naći."});
            }
            return res.status(200).json({message: "Dobavljač uspješno izbrisan."});
        } else {
            console.log(err);
        }
    });
});


module.exports = router;