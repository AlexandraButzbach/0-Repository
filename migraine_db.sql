show databases;
use migraine_db;
show tables;
select * from migraine;


CREATE TABLE migraine (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    migraine_datum VARCHAR(50),
    migraine_start VARCHAR(50),
    migraine_ende VARCHAR(50),
    migraine_dauer VARCHAR(50),
    migraine_intensitaet VARCHAR(50)
)


