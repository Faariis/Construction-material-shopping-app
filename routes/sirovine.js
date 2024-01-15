const express = require('express');
const router = express.Router();
const connection = require('../connection');

// Dobavi sve sirovine

router.get('/get', (req, res) => {
    connection.query('SELECT s.id, s.naziv, s.kolicina, s.min_kolicina, s.cijena, s.jedinica_mjere, s.da_li_se_koristi, d.naziv AS dobavljaci_naziv FROM sirovine AS s JOIN dobavljaci AS d ON s.dobavljaci_id = d.id', (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(err);
        }
    });
});

// Dodaj sirovinu

router.post('/add', (req, res) => {
    let sirovine = req.body;
    var query = "insert into sirovine (naziv, kolicina, min_kolicina, cijena, jedinica_mjere , da_li_se_koristi, dobavljaci_id) values(?,?,'100',?,?,?,?)";
    connection.query(query, [sirovine.naziv, sirovine.kolicina, sirovine.cijena, sirovine.jedinica_mjere, sirovine.da_li_se_koristi, sirovine.dobavljaci_id], (err, results) =>{
        if (!err) {
            return res.status(200).json({message: "Uspješno dodana sirovina"});
        } else {
            return res.status(500).json(err);
        }
        })
    })


// Izmijeni sirovinu

router.put('/update', (req, res) =>{
    let sirovine = req.body;
    var query = "update sirovine set naziv=?, kolicina=?, min_kolicina='100', cijena=?, jedinica_mjere=?, da_li_se_koristi=?, dobavljaci_id=? where id=?";
    connection.query(query, [sirovine.naziv, sirovine.kolicina, sirovine.cijena, sirovine.jedinica_mjere, sirovine.da_li_se_koristi, sirovine.dobavljaci_id, sirovine.id], (err, results) =>{
        if (!err){
            if(results.affectedRows == 0){
                return res.status(404).json({message:"Id birane sirovine se ne može naći."});
            }
            return res.status(200).json({message: "Sirovina uspješno izmijenjena."});
        }
        else{
            return res.status(500).json(err);
        }
    })
})

// Brisanje sirovine

router.delete('/delete', (req, res) => {
    let sirovine = req.body;
    let query = "delete from sirovine WHERE id=?";
    connection.query(query, [sirovine.id], (err, results) => {
        if (!err) {
            if(results.affectedRows == 0){
                return res.status(404).json({message:"Id birane sirovine se ne može naći."});
            }
            return res.status(200).json({message: "Sirovina uspješno izbrisana."});
        } else {
            console.log(err);
        }
    });
});



module.exports = router;