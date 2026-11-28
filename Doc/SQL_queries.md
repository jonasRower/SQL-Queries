
# Porovnání dotazů SQL

## Beta verze
Na konverzi tabulek se momentálně pracuje .... <br><br>
Správná data obsahuje aplikace - soubor index.html. <br>
Pro spuštění je třeba si stáhnout tento projekt a otevřít index.html [Stáhnout celý projekt a otevřít tento soubor v PC](https://github.com/jonasRower/SQL-Queries/blob/main/index.html). <br> 

<br>
V aplikaci by měla být data správná. <br>

Některé tabulky nemusejí být zatím správně. Konkrétní seznam chyb je popsán v 
[bug reportu](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/bugReport.md)



| id    | Tabulka vlevo  | Tabulka vpravo  | 
| ----- | ----------  | ---------  |
| [# 1 #](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/1.md)   | SELECT * FROM faktury WHERE odberatel IN(1, 11, 47, 112);     | SELECT * FROM faktury;    |
| [# 2 #](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/2.md)   | SELECT * FROM faktury WHERE odberatel IN(1, 11, 47, 112);     | SELECT * FROM faktury WHERE odberatel IN(1, 11, 247, 112);    |
| [# 4 #](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/4.md)   | SELECT ucet, obrat, VS FROM Obraty WHERE obrat <= 8300;    | SELECT ucet, obrat, VS FROM Obraty WHERE obrat >= 8300;    |
| [# 5 #](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/5.md)   | SELECT * from Obraty WHERE datum >'2018-03-01';     | SELECT * from Obraty;   |
| [# 6 #](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/6.md)   | 	SELECT * FROM Vyrobky WHERE cena IS NOT NULL;     | SELECT * FROM Vyrobky;   |
| [# 7 #](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/7.md)   | 	SELECT cislo, nazev, sklad FROM Vyrobky WHERE NOT sklad !=2;     | SELECT cislo, nazev, sklad FROM Vyrobky WHERE sklad = 2; |
| [# 8 #](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/8.md)   | SELECT cislo, nazev, sklad FROM Vyrobky WHERE NOT sklad IN(2, 3);     | SELECT cislo, nazev,sklad FROM Vyrobky;   |
| [# 9 #](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/9.md)   | SELECT cislo, nazev, sklad FROM Vyrobky WHERE sklad IN(2, 3);     | SELECT cislo, nazev, sklad FROM Vyrobky WHERE sklad = 2 OR sklad = 3;   |
| [# 10 #](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/10.md)   | SELECT cislo, nazev, cena FROM vyrobky WHERE cena BETWEEN 20 AND 50;     | SELECT cislo, nazev, cena FROM vyrobky;   |
| [# 11 #](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/11.md)   | SELECT ucet, VS, datum, obrat FROM obraty WHERE datum BETWEEN '2018-02-01' AND '2018-02-28';     | SELECT ucet, VS, datum, obrat FROM obraty;   |
| [# 12 #](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/12.md)   | SELECT * FROM zamestnanci WHERE prijmeni BETWEEN 'A' AND 'L';     | SELECT * FROM zamestnanci WHERE prijmeni BETWEEN 'B' AND 'K';   |
| [# 12b #](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/12b.md)   | SELECT * FROM zamestnanci WHERE prijmeni BETWEEN 'A' AND 'L';     | SELECT * FROM zamestnanciWHERE prijmeni BETWEEN 'B' AND 'K';   |
| [# 13 #](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/13.md)   | SELECT prijmeni, jmeno, pocet_deti FROM zamestnanci WHERE pocet_deti IN (1,3);     | SELECT prijmeni, jmeno, pocet_deti FROM zamestnanci WHERE pocet_deti = 1 OR pocet_deti = 3;   | 
| [# 14 #](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/14.md)   | SELECT * FROM Obraty WHERE vs IN('4587102', '0020514789');    | SELECT * FROM Obraty;   |
| [# 15 #](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/15.md)   | SELECT * FROM Obraty WHERE datum IN('2018-02-01', '2018-02-28');     | SELECT * FROM Obraty WHERE datum = '2018-02-01' OR datum = '2018-02-28';   |
| [# 16 #](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/16.md)   | SELECT * FROM Vyrobky WHERE nazev LIKE '%pivo%';     | SELECT * FROM Vyrobky;   |
| [# 17 #](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/17.md)   | SELECT * FROM Obraty WHERE ucet LIKE '%0800';     | SELECT * FROM Obraty;   |
| [# 18 #](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/18.md)   | SELECT * FROM Obraty WHERE obrat LIKE '__9%';     | SELECT * FROM Obraty;   |
| [# 19 #](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/19.md)   | SELECT * FROM Vyrobky WHERE nazev NOT LIKE '%pivo%';     | SELECT * FROM Vyrobky;  |
| [# 20 #](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/20.md)   | SELECT cislo, nazev, cena, sklad FROM Vyrobky WHERE sklad=1 ORDER BY cena DESC LIMIT 3;     | SELECT cislo, nazev, cena, sklad FROM Vyrobky WHERE sklad=1 ORDER BY cena DESC;   |
| [# 21 #](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/21.md)   | SELECT ucet, obrat, VS FROM Obraty WHERE obrat >= 1780 AND obrat <= 3600;     | SELECT ucet, obrat, VS FROM Obraty WHERE obrat BETWEEN 1780 AND 3600;   |
| [# 22 #](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/22.md)   | SELECT ucet, obrat, VS FROM Obraty WHERE obrat >= 1780 AND obrat <= 3600;     | SELECT ucet, obrat, VS FROM Obraty WHERE obrat >= 1780 OR obrat <= 3600;   |
| [# 23 #](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/23.md)   | SELECT ucet, obrat, VS FROM Obraty     | SELECT ucet, obrat, VS FROM Obraty WHERE obrat >= 1780 OR obrat <= 3600;   |
| [# 24 #](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/24.md)   | SELECT ucet, obrat, VS FROM Obraty WHERE obrat >= 1780 UNION ( SELECT ucet, obrat, VS FROM Obraty WHERE obrat <= 3600);     | SELECT ucet, obrat, VS FROM Obraty WHERE obrat >= 1780 OR obrat <= 3600;   |
| [# 25 #](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/25.md)   | SELECT ucet, obrat, VS FROM Obraty WHERE obrat <= 1780 OR obrat >= 3600;     | SELECT ucet, obrat, VS FROM Obraty WHERE obrat >= 1780 OR obrat <= 3600;   |
| [# 26 #](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/26.md)   | SELECT os_cislo, jmeno, prijmeni, pocet_deti FROM Zamestnanci WHERE pocet_deti<2 OR pocet_deti IS NULL;     | SELECT os_cislo, jmeno, prijmeni, pocet_deti FROM Zamestnanci;   |
| [# 27 #](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/27.md)   | SELECT cislo, nazev, cena, sklad, z_dovozu FROM Vyrobky WHERE z_dovozu=1 OR sklad=1;     | SELECT cislo, nazev, cena, sklad, z_dovozu FROM Vyrobky;   |
| [# 27b #](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/27b.md)   | SELECT cislo, nazev, cena, sklad, z_dovozu FROM Vyrobky WHERE z_dovozu=1 AND sklad=1;     | SELECT cislo, nazev, cena, sklad, z_dovozu FROM Vyrobky;   |
| [# 28 #](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/28.md)   | SELECT cislo, nazev, cena, sklad, z_dovozu FROM Vyrobky WHERE NOT z_dovozu=1 AND NOT sklad=1;     | SELECT cislo, nazev, cena, sklad, z_dovozu FROM Vyrobky;  |
| [# 29 #](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/29.md)   | SELECT cislo, nazev, cena, sklad, z_dovozu FROM Vyrobky WHERE NOT z_dovozu=1 OR NOT sklad=1     | SELECT cislo, nazev, cena, sklad, z_dovozu FROM Vyrobky;   |
| [# 30 #](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/30.md)   | SELECT cislo, nazev, cena FROM Vyrobky WHERE cena BETWEEN 10 AND 20 OR cena BETWEEN 100 AND 140;     | SELECT cislo, nazev, cena FROM Vyrobky;  |
| [# 30b #](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/30b.md)   | SELECT cislo, nazev, cena FROM Vyrobky WHERE cena BETWEEN 10 AND 20 AND cena BETWEEN 100 AND 140;     | SELECT cislo, nazev, cena FROM Vyrobky;  |
| [# 31 #](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/31.md)   | 	SELECT * FROM Vyrobky WHERE cena*sazba_dph/100>3;     | SELECT * FROM Vyrobky;   |
| [# 32 #](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/32.md)   | SELECT name,city FROM salesman WHERE city='Paris';     | SELECT name,city FROM salesman;   |
| [# 34 #](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/34.md)   | SELECT * FROM nobel_win WHERE year = 1970 AND subject = 'Literature';     | SELECT * FROM nobel_win WHERE year=1970;   |
| [# 35 #](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/35.md)   | SELECT * FROM nobel_win WHERE year>=1971 AND subject='Chemistry';     | SELECT * FROM nobel_win;   |
| [# 36 #](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/36.md)   | SELECT * FROM nobel_win WHERE winner LIKE 'Louis%';     | SELECT * FROM nobel_win;   |
| [# 37 #](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/37.md)   | 	SELECT * FROM nobel_win WHERE (subject ='Chemistry' AND year=1970) UNION (SELECT * FROM nobel_win WHERE (subject ='Economics' AND year=1971));     | SELECT * FROM nobel_win;   |
| [# 38 #](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/38.md)   | SELECT * FROM nobel_win WHERE year=1970 AND subject NOT IN('Physiology','Economics');     | SELECT * FROM nobel_win;   |
| [# 39 #](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/39.md)   | SELECT * FROM nobel_win WHERE (subject ='Physiology' AND year<1971) UNION (SELECT * FROM nobel_win WHERE (subject ='Peace' AND year>=1974));     | SELECT * FROM nobel_win;   |
| [# 40 #](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/40.md)   | SELECT * FROM nobel_win WHERE subject NOT LIKE 'P%';     | SELECT * FROM nobel_win;   |
| [# 41 #](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/41.md)   | 	SELECT AVG(pro_price) FROM item_mast WHERE pro_com=16;     | SELECT * FROM item_mast WHERE pro_com=16;   |
| [# 42 #](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/42.md)   | SELECT * FROM item_mast WHERE pro_com IN (SELECT DISTINCT pro_com FROM item_mast);     | SELECT * FROM item_mast;   |
| [# 43 #](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/43.md)   | SELECT AVG(pro_price), pro_com FROM item_mast GROUP BY pro_com;     | SELECT * FROM item_mast  |
| [# 44 #](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/44.md)   | SELECT AVG(pro_price), pro_com FROM item_mast GROUP BY pro_com;    | SELECT AVG(pro_price), pro_com FROM item_mast;  |
| [# 45 #](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/45.md)   | SELECT * FROM item_mast WHERE pro_price = (SELECT MIN(pro_price) FROM item_mast);     | SELECT * FROM item_mast;   |
| [# 46 #](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/46.md)   | SELECT * FROM customer WHERE city = 'New York' AND grade>100;     | SELECT * FROM customer;   |
| [# 46b #](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/46b.md)   | SELECT * FROM customer WHERE city = 'New York' OR grade>100;     | SELECT * FROM customer;   |
| [# 47 #](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/47.md)   | SELECT * FROM customer WHERE city = 'New York' AND grade>100;     | SELECT * FROM customer WHERE city = 'New York' OR grade>100;   |
| [# 48 #](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/48.md)   | SELECT * FROM customer WHERE city = 'New York' OR NOT grade>100;     | SELECT * FROM customer WHERE NOT (city = 'New York' OR grade>100);   |

