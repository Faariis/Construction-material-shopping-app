create table korisnik(
    id int primary key AUTO_INCREMENT,
    ime varchar(250),
    prezime varchar(250),
    email_adresa varchar(250),
    password varchar(250),
    uloga varchar(100),
    broj_telefona varchar(250),
    adresa nvarchar(50),
    status varchar(20),
    UNIQUE (email_adresa)
);

insert into korisnik(ime, prezime, email_adresa, password, uloga, broj_telefona, adresa, status)
 values('Faris', 'Trtak', 'emailadresa4@mail.com', '123456789', 'zaposlenik', '063123456', '123put', 'true');

create table kategorije(
    id int NOT NULL AUTO_INCREMENT,
    naziv varchar(255) NOT NULL,
    primary key(id)
);

CREATE TABLE dobavljaci (
    id INT PRIMARY KEY AUTO_INCREMENT,
    naziv VARCHAR(255) NOT NULL,
    jib VARCHAR(255) UNIQUE NOT NULL,
    pdv VARCHAR(255) NOT NULL,
    broj_telefona VARCHAR(255) NOT NULL,
    kontakt_osoba VARCHAR(255) NOT NULL,
    email_adresa VARCHAR(255) NOT NULL,
    datum_pocetka DATE NOT NULL,
    datum_zavrsetka DATE
);

insert into dobavljaci(naziv, jib, pdv, broj_telefona, kontakt_osoba, email_adresa, datum_pocetka, datum_zavrsetka)
values('Komerc', '89898989', '4', '062333333', 'haris', 'komerc@mail.com', '2023-12-01', '2023-12-05');


CREATE TABLE sirovine (
    id INT PRIMARY KEY AUTO_INCREMENT,
    naziv VARCHAR(255) NOT NULL,
    kolicina INT NOT NULL,
    min_kolicina INT NOT NULL,
    cijena DECIMAL(10, 2) NOT NULL,
    jedinica_mjere VARCHAR(255) NOT NULL,
    da_li_se_koristi BOOLEAN NOT NULL,
    dobavljaci_id INT,
    FOREIGN KEY (dobavljaci_id) REFERENCES dobavljaci(id)
);

insert into sirovine(naziv, kolicina, min_kolicina, cijena, jedinica_mjere, da_li_se_koristi, dobavljaci_id)
values('Zeljezo', '1000', '100', '20', 'kg', true , '2');


CREATE TABLE proizvodi_proces_stavka (
    id INT PRIMARY KEY AUTO_INCREMENT,
    sirovine_id INT NOT NULL,
    proizvodni_procesi_id INT NOT NULL,
    kolicina INT NOT NULL,
    FOREIGN KEY (sirovine_id) REFERENCES sirovine(id),
    FOREIGN KEY (proizvodni_procesi_id) REFERENCES proizvodni_procesi(id)
);



CREATE TABLE proizvodni_procesi (
    id INT PRIMARY KEY AUTO_INCREMENT,
    naziv VARCHAR(255) NOT NULL,
    datum_pocetka DATE NOT NULL,
    datum_zavrsetka DATE
);

CREATE TABLE proizvodi (
    id INT PRIMARY KEY AUTO_INCREMENT,
    naziv VARCHAR(255) NOT NULL,
    slika_proizvoda VARCHAR(255) NOT NULL,
    proizvodni_procesi_id INT,
    marza DECIMAL(10, 2) NOT NULL,
    cijena DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (proizvodni_procesi_id) REFERENCES proizvodni_procesi(id)
);





