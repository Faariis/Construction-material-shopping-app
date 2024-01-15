const express = require('express');
const router = express.Router();
const connection = require('../connection');

// Dobavi sve proizvodne procese

router.get('/get', (req, res) => {
    connection.query('SELECT *FROM proizvodni_procesi', (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(err);
        }
    });
});

// Dodaj proizvodni proces

router.post('/add', (req, res) => {
    let proizvodni_procesi = req.body;
    var query = "insert into proizvodni_procesi (naziv, datum_pocetka, datum_zavrsetka) values(?,?,?)";
    connection.query(query, [proizvodni_procesi.naziv, proizvodni_procesi.datum_pocetka, proizvodni_procesi.datum_zavrsetka], (err, results) =>{
        if (!err) {
            return res.status(200).json({message: "Uspješno dodan proizvodni proces."});
        } else {
            return res.status(500).json(err);
        }
        })
    })

// Izmijena proizvodnog procesa

router.patch('/update', (req, res) =>{
    let proizvodni_procesi = req.body;
    var query = "update proizvodni_procesi set naziv=?, datum_pocetka=?, datum_zavrsetka=? where id=?";
    connection.query(query, [proizvodni_procesi.naziv, proizvodni_procesi.datum_pocetka, proizvodni_procesi.datum_zavrsetka, proizvodni_procesi.id], (err, results) =>{
        if (!err){
            if(results.affectedRows == 0){
                return res.status(404).json({message:"Id biranog proizvodnog procesa se ne može naći."});
            }
            return res.status(200).json({message: "Proizvodni proces uspješno izmijenjen."});
        }
        else{
            return res.status(500).json(err);
        }
    })
})

// Brisanje proizvodnog procesa

router.delete('/delete', (req, res) => {
    let proizvodni_procesi = req.body;
    let query = "delete from proizvodni_procesi WHERE id=?";
    connection.query(query, [proizvodni_procesi.id], (err, results) => {
        if (!err) {
            if(results.affectedRows == 0){
                return res.status(404).json({message:"Id biranog proizvodnog procesa se ne može naći."});
            }
            return res.status(200).json({message: "Proizvodni proces uspješno izbrisana."});
        } else {
            console.log(err);
        }
    });
});


module.exports = router;