const express = require('express');
const router = express.Router();
const connection = require('../connection');

// Dobavi sve proizvode

router.get('/get', (req, res) => {
    connection.query('SELECT p.id, p.naziv, p.slika_proizvoda, p.marza, p.cijena, pp.naziv AS proizvodni_procesi_naziv FROM proizvodi AS p JOIN proizvodni_procesi AS pp ON p.proizvodni_procesi_id = pp.id', (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(err);
        }
    });
});

// Dodaj proizvod

router.post('/add', (req, res) => {
    let proizvodi = req.body;
    var query = "insert into proizvodi (naziv, slika_proizvoda, marza, cijena, proizvodni_procesi_id) values(?,?,?,?,?)";
    connection.query(query, [proizvodi.naziv, proizvodi.slika_proizvoda, proizvodi.marza ,proizvodi.cijena, proizvodi.proizvodni_procesi_id], (err, results) =>{
        if (!err) {
            if(results.affectedRows == 0){
                return res.status(404).json({message:"Id biranog proizvodnog procesa se ne može naći."});
            }
            return res.status(200).json({message: "Uspješno dodan proizvod"});
        } else {
            return res.status(500).json(err);
        }
        })
    })

// Izmijeni proizvod

router.put('/update', (req, res) =>{
    let proizvodi = req.body;
    var query = "update proizvodi set naziv=?, slika_proizvoda=?, marza=?, cijena=?, proizvodni_procesi_id=? where id=?";
    connection.query(query, [proizvodi.naziv, proizvodi.slika_proizvoda, proizvodi.marza, proizvodi.cijena, proizvodi.proizvodni_procesi_id, proizvodi.id], (err, results) =>{
        if (!err){
            if(results.affectedRows == 0){
                return res.status(404).json({message:"Id biranog proizvoda se ne može naći."});
            }
            return res.status(200).json({message: "Proizvod uspješno izmijenjen."});
        }
        else{
            return res.status(500).json(err);
        }
    })
})

// Brisanje proizvoda

router.delete('/delete', (req, res) => {
    let proizvodi = req.body;
    let query = "delete from proizvodi WHERE id=?";
    connection.query(query, [proizvodi.id], (err, results) => {
        if (!err) {
            if(results.affectedRows == 0){
                return res.status(404).json({message:"Id biranog proizvoda se ne može naći."});
            }
            return res.status(200).json({message: "Proizvod uspješno izbrisan."});
        } else {
            console.log(err);
        }
    });
});


module.exports = router;