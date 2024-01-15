const express = require('express');
const connection = require('../connection');
const router = express.Router();

const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');


require('dotenv').config();

// Registracija

router.post('/signup',(req, res) =>{
    let korisnik = req.body;
    query = "select email_adresa, password, uloga, status from korisnik where email_adresa=?";
    connection.query(query, [korisnik.email_adresa],(err, results)=>{
        if(!err){
            if(results.length <= 0){
                query = "insert into korisnik (ime, prezime, email_adresa, password, uloga, broj_telefona, adresa, status) values(?,?,?,?,?,?,?,'false')";
                connection.query(query, [korisnik.ime, korisnik.prezime, korisnik.email_adresa, korisnik.password, korisnik.uloga, korisnik.broj_telefona, korisnik.adresa], (err,results) =>{
                    if(!err){
                        return res.status(200).json({message:"Uspješna registracija."});
                    }
                    else{
                        return res.status(500).json(err);
                    }
                })
            }
            else{
                return res.status(400).json({message: "Email već postoji."});
            }
        }
        else{
            return res.status(500).json(err);
        }
    })
    
})

// Prijava

router.post('/login',(req, res) =>{
    const korisnik = req.body;
    query = "select email_adresa, password, uloga, status from korisnik where email_adresa=?";
    connection.query(query, [korisnik.email_adresa], (err, results) =>{
        if(!err){
            if(results.length <= 0 || results[0].password != korisnik.password)
            {
                return res.status(401).json({message: "Netačan username ili lozinka!"});
            }
            else if(results[0].status == 'false'){
                return res.status(401).json({message: "Admin odobrava prijavu. Molimo sačekajte!"});
            }
            else if(results[0].password == korisnik.password)
            {
                /*
                const response = { email_adresa: results[0].email_adresa, uloga: results[0].uloga}
                const accessToken = jwt.sign(response, process.env.ACCESS_TOKEN, {expiresIn: '12h'})
                res.status(200).json({token:accessToken});*/
                res.status(200).json({message: "Prijava uspješna"})
            }
            else {
                return res.status(400).json({message: "Nešto je pošlo po zlu. Pokušajte ponovo!"});
            }
        }
        else{
            return res.status(500).json(err);
        }
    })
})

/*
var transporter = nodemailer.createTransport({
    host: "smtp.mail.com",
    port: 587,
    secure: false, // use SSL
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    },
    tls: {
        rejectUnauthorized: false
    }
});
*/

/*
var transporter = nodemailer.createTransport({
    service: 'smtp.mail.com',
    secure: true,
    auth:{
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})
*/

// ZABORAVLJENA ŠIFRA
/*
router.post('/forgotPassword', (req, res) =>{
    const korisnik = req.body;
    query = "select email_adresa, password from Korisnik where email_adresa=?";
    connection.query(query, [korisnik.email_adresa], (err, results) =>{
        if(!err){
            if(results.length <= 0)
            {
                return res.status(200).json({message: "Lozinka uspješnooo poslana na mail."});
            }
            else{
                var mailOptions = {
                    from: process.env.EMAIL,
                    to: results[0].email_adresa,
                    subject: "Loznika za pristup aplikaciji za zalihe",
                    html: '<p><b> Login detalji za pristup aplikaciji</b><br><b>Email: </b>'+results[0].email_adresa+'<br><b>Password: </b>'+results[0].password+'<br><a href="http://localhost:4200/">Kliknite za login</a></p>'
                };
                transporter.sendMail(mailOptions, function(error, info){
                    if(error){
                        console.log(error);
                    }
                    else{
                        console.log('Email sent: ' + info.response);
                    }
                });
                return res.status(200).json({message: "Lozinka uspješno poslana na mail."});
            }
        }
        else{
            return res.status(500).json(err);
        }
    })
})
*/

// Zaboravljena šifra

router.post('/forgotPassword', (req, res) =>{
    const korisnik = req.body;
    query = "select email_adresa, password from Korisnik where email_adresa=?";
    connection.query(query, [korisnik.email_adresa], (err, results) =>{
        if(!err){
            if(results.length <= 0)
            {
                return res.status(200).json({message: "Lozinka uspješno poslana na mail"});
            }
            else {
                return res.status(200).json({message: "Lozinka:" + results[0].password });
            }
        }
        else{
            return res.status(500).json(err);
        }
    })
})

// Vraća korisnike ali samo one koji su zaposlenici

router.get('/get', (req, res) =>{
    var query = "select id, ime, prezime, email_adresa, uloga, broj_telefona, adresa, status from korisnik where uloga='zaposlenik'";
    connection.query(query, (err, results) =>{
        if(!err){
            return res.status(200).json(results);
        }
        else{
            return res.status(500).json(err);
        }
    })
})

// Prepravlja status korisnika (ako je "false" ne može se logirat)

router.patch('/update', (req, res) =>{
    let korisnik = req.body;
    var query = "update korisnik set status=? where id=?";
    connection.query(query, [korisnik.status, korisnik.id], (err, results) =>{
        if(!err){
            if(results.affectedRows == 0)
            {
                return res.status(404).json({message: "Id korisnika ne postoji"});
            }
            return res.status(200).json({message: "Podaci uspješno izmjenjenji"});
        }
        else{
            return res.status(500).json(err);
        }
    })
})
/*
router.post('/changePassword', (req, res) =>{
    
})
*/

module.exports = router;

