const express = require('express');
const connection = require('../connection');
const router = express.Router();

// Dodaj kategoriju

router.post('/add', (req, res) =>{
    let kategorije = req.body;
    query = "insert into kategorije (naziv) values(?)";
    connection.query(query, [kategorije.naziv], (err, results) =>{
        if(!err){
            return res.status(200).json({message: "Kategorija je uspješno dodana!"});
        }
        else{
            return res.status(500).json(err);
        }
    })
})

// Ispiši sve kategorije

router.get('/get', (req, res) =>{
    var query = "select *from kategorije order by naziv";
    connection.query(query, (err, results) =>{
        if(!err){
            return res.status(200).json(results);
        }
        else{
            return res.status(500).json(err);
        }
    })
})

// Izmijeni kategoriju

router.patch('/update', (req, res) =>{
    let produkt = req.body;
    var query = "update kategorije set naziv=? where id=?";
    connection.query(query, [produkt.naziv, produkt.id], (err, results) =>{
        if (!err){
            if(results.affectedRows == 0){
                return res.status(404).json({message:"Id birane kategorije se ne može naći"});
            }
            return res.status(200).json({message: "Kategorija uspješno zamijenjena"});
        }
        else{
            return res.status(500).json(err);
        }
    })
})

module.exports = router;