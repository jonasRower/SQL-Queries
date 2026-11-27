

ID	Tabulka vlevo	Tabulka vpravo
1	SELECT * FROM faktury
WHERE odberatel IN(1, 11, 47, 112);	SELECT * FROM faktury;
2	SELECT * FROM faktury
WHERE odberatel IN(1, 11, 47, 112);	SELECT * FROM faktury
WHERE odberatel IN(1, 11, 247, 112);
4	SELECT ucet, obrat, VS
FROM Obraty WHERE
obrat <= 8300;	SELECT ucet, obrat, VS
FROM Obraty WHERE
obrat >= 8300;
5	SELECT * from Obraty
WHERE datum >'2018-03-01';	SELECT * from Obraty;
6	SELECT * FROM Vyrobky
WHERE cena IS NOT NULL;	SELECT * FROM Vyrobky;
7	SELECT cislo, nazev, sklad
FROM Vyrobky
WHERE NOT sklad !=2;	SELECT cislo, nazev, sklad
FROM Vyrobky
WHERE sklad = 2;
8	SELECT cislo, nazev, sklad
FROM Vyrobky
WHERE NOT sklad IN(2, 3);	SELECT cislo, nazev,sklad
FROM Vyrobky;
9	SELECT cislo, nazev, sklad
FROM Vyrobky
WHERE sklad IN(2, 3);	SELECT cislo, nazev, sklad
FROM Vyrobky
WHERE sklad = 2 OR sklad = 3;
10	SELECT cislo, nazev, cena
FROM vyrobky
WHERE cena BETWEEN 20 AND 50;	SELECT cislo, nazev, cena
FROM vyrobky;
11	SELECT ucet, VS, datum, obrat
FROM obraty
WHERE datum BETWEEN '2018-02-01' AND '2018-02-28';	SELECT ucet, VS, datum, obrat
FROM obraty;
12	SELECT * FROM zamestnanci
WHERE prijmeni BETWEEN 'A' AND 'L';	SELECT * FROM zamestnanci;
12b	SELECT * FROM zamestnanci
WHERE prijmeni BETWEEN 'A' AND 'L';	SELECT * FROM zamestnanci
WHERE prijmeni BETWEEN 'B' AND 'K';
13	SELECT prijmeni, jmeno, pocet_deti
FROM zamestnanci
WHERE pocet_deti IN (1,3);	SELECT prijmeni, jmeno, pocet_deti
FROM zamestnanci
WHERE pocet_deti = 1 OR pocet_deti = 3;
14	SELECT * FROM Obraty
WHERE vs IN('4587102', '0020514789');	SELECT * FROM Obraty;
15	SELECT * FROM Obraty
WHERE datum IN('2018-02-01', '2018-02-28');	SELECT * FROM Obraty
WHERE datum = '2018-02-01' OR datum = '2018-02-28';
16	SELECT * FROM Vyrobky
WHERE nazev LIKE '%pivo%';	SELECT * FROM Vyrobky;
17	SELECT * FROM Obraty
WHERE ucet LIKE '%0800';	SELECT * FROM Obraty;
18	SELECT * FROM Obraty
WHERE obrat LIKE '__9%';	SELECT * FROM Obraty;
19	SELECT * FROM Vyrobky
WHERE nazev NOT LIKE '%pivo%';	SELECT * FROM Vyrobky;
20	SELECT cislo, nazev, cena, sklad
FROM Vyrobky
WHERE sklad=1
ORDER BY cena DESC LIMIT 3;	SELECT cislo, nazev, cena, sklad
FROM Vyrobky
WHERE sklad=1 ORDER BY cena DESC;
21	SELECT ucet, obrat, VS
FROM Obraty
WHERE obrat >= 1780 AND obrat <= 3600;	SELECT ucet, obrat, VS
FROM Obraty
WHERE obrat BETWEEN 1780 AND 3600;
22	SELECT ucet, obrat, VS
FROM Obraty
WHERE obrat >= 1780 AND obrat <= 3600;	SELECT ucet, obrat, VS
FROM Obraty
WHERE obrat >= 1780 OR obrat <= 3600;
23	SELECT ucet, obrat, VS
FROM Obraty
SELECT ucet, obrat, VS
FROM Obraty
WHERE obrat >= 1780 OR obrat <= 3600;
24	SELECT ucet, obrat, VS
FROM Obraty
WHERE obrat >= 1780
UNION (
SELECT ucet, obrat, VS
FROM Obraty
WHERE obrat <= 3600);	SELECT ucet, obrat, VS
FROM Obraty
WHERE obrat >= 1780 OR obrat <= 3600;
25	SELECT ucet, obrat, VS
FROM Obraty
WHERE obrat <= 1780 OR obrat >= 3600;	SELECT ucet, obrat, VS
FROM Obraty
WHERE obrat >= 1780 OR obrat <= 3600;
26	SELECT os_cislo, jmeno, prijmeni, pocet_deti
FROM Zamestnanci
WHERE pocet_deti<2 OR pocet_deti IS NULL;	SELECT os_cislo, jmeno, prijmeni, pocet_deti
FROM Zamestnanci;
27	SELECT cislo, nazev, cena, sklad, z_dovozu
FROM Vyrobky
WHERE z_dovozu=1 OR sklad=1;	SELECT cislo, nazev, cena, sklad, z_dovozu
FROM Vyrobky;
27b	SELECT cislo, nazev, cena, sklad, z_dovozu
FROM Vyrobky
WHERE z_dovozu=1 AND sklad=1;	SELECT cislo, nazev, cena, sklad, z_dovozu
FROM Vyrobky;
28	SELECT cislo, nazev, cena, sklad, z_dovozu
FROM Vyrobky
WHERE NOT z_dovozu=1 AND NOT sklad=1;	SELECT cislo, nazev, cena, sklad, z_dovozu
FROM Vyrobky;
29	SELECT cislo, nazev, cena, sklad, z_dovozu
FROM Vyrobky
WHERE NOT z_dovozu=1 OR NOT sklad=1;	SELECT cislo, nazev, cena, sklad, z_dovozu
FROM Vyrobky;
30	SELECT cislo, nazev, cena
FROM Vyrobky
WHERE cena BETWEEN 10 AND 20 OR cena BETWEEN 100 AND 140;	SELECT cislo, nazev, cena
FROM Vyrobky;
30b	SELECT cislo, nazev, cena
FROM Vyrobky
WHERE cena BETWEEN 10 AND 20 AND cena BETWEEN 100 AND 140;	SELECT cislo, nazev, cena
FROM Vyrobky;
31	SELECT *
FROM Vyrobky
WHERE cena*sazba_dph/100>3;	SELECT *
FROM Vyrobky;
32	SELECT name,city
FROM salesman
WHERE city='Paris';	SELECT name,city
FROM salesman;
34	SELECT *
FROM nobel_win
WHERE year = 1970
AND subject = 'Literature';	SELECT *
FROM nobel_win
WHERE year=1970;
35	SELECT * FROM nobel_win
WHERE year>=1971
AND subject='Chemistry';	SELECT * FROM nobel_win;
36	SELECT * FROM nobel_win
WHERE winner LIKE 'Louis%';	SELECT * FROM nobel_win;
37	SELECT * FROM nobel_win
WHERE (subject ='Chemistry' AND year=1970)
UNION (SELECT * FROM nobel_win
WHERE (subject ='Economics' AND year=1971));	SELECT * FROM nobel_win;
38	SELECT *
FROM nobel_win
WHERE year=1970
AND subject NOT IN('Physiology','Economics');	SELECT * FROM nobel_win;
39	SELECT * FROM nobel_win
WHERE (subject ='Physiology' AND year<1971)
UNION
(SELECT * FROM nobel_win
WHERE (subject ='Peace' AND year>=1974));	SELECT * FROM nobel_win;
40	SELECT *
FROM nobel_win
WHERE subject NOT LIKE 'P%';	SELECT * FROM nobel_win;
41	SELECT AVG(pro_price) FROM item_mast
WHERE pro_com=16;	SELECT * FROM item_mast
WHERE pro_com=16;
42	SELECT * FROM item_mast
WHERE pro_com IN
(SELECT DISTINCT pro_com
FROM item_mast);	SELECT * FROM item_mast;
43	SELECT AVG(pro_price), pro_com
FROM item_mast
GROUP BY pro_com;	SELECT * FROM item_mast
44	SELECT AVG(pro_price), pro_com
FROM item_mast
GROUP BY pro_com;	SELECT AVG(pro_price), pro_com
FROM item_mast;
45	SELECT * FROM item_mast
WHERE pro_price =
(SELECT MIN(pro_price) FROM item_mast);	SELECT * FROM item_mast;
46	SELECT *
FROM customer
WHERE city = 'New York' AND grade>100;	SELECT * FROM customer;
46b	SELECT *
FROM customer
WHERE city = 'New York' OR grade>100;	SELECT * FROM customer;
47	SELECT *
FROM customer
WHERE city = 'New York' AND grade>100;	SELECT *
FROM customer
WHERE city = 'New York' OR grade>100;
48	SELECT *
FROM customer
WHERE city = 'New York' OR NOT grade>100;	SELECT *
FROM customer
WHERE NOT (city = 'New York' OR grade>100);
49	SELECT * FROM customer
WHERE city = 'New York' OR NOT grade>100;	SELECT * FROM customer;
50	SELECT * FROM orders
WHERE (ord_date ='2012-09-10'
AND salesman_id > 5004);	SELECT * FROM orders;
51	SELECT * FROM orders
WHERE (ord_date ='2012-09-10'
AND salesman_id > 5004);	SELECT * FROM orders
WHERE ((ord_date ='2012-09-10'
AND salesman_id > 5004)
OR purch_amt>1000.00);
52	SELECT salesman_id,name,city,commission
FROM salesman
WHERE (commission > 0.10
AND commission< 0.12);	SELECT salesman_id,name,city,commission
FROM salesman;
53	SELECT salesman_id,name,city,commission
FROM salesman
WHERE (commission > 0.10
AND commission< 0.12);	SELECT salesman_id,name,city,commission
FROM salesman
WHERE (commission BETWEEN 0.10 AND 0.12);
54	SELECT * FROM orders
WHERE NOT(ord_date>='2012-02-10'
AND customer_id<3009);	SELECT * FROM orders;
54b	SELECT * FROM orders
WHERE ord_date>='2012-02-10'
AND customer_id<3009;	SELECT * FROM orders;
56	SELECT * FROM orders
WHERE NOT(ord_date>='2012-02-10'
AND customer_id<3009);	SELECT * FROM orders;
56b	SELECT * FROM orders
WHERE(purch_amt<200 OR
NOT(ord_date>='2012-02-10'
AND customer_id<3009));	SELECT * FROM orders;
57	SELECT * FROM orders
WHERE(purch_amt<200 OR
NOT(ord_date>='2012-02-10'
AND customer_id<3009));	SELECT * FROM orders
WHERE(purch_amt<200 OR
(ord_date<'2012-02-10'
AND customer_id>=3009));
X58	SELECT * FROM orders
WHERE(purch_amt<200 OR
ord_date<'2012-02-10');	SELECT * FROM orders;
58	SELECT * FROM orders
WHERE(purch_amt<200 OR
ord_date<'2012-02-10');	SELECT * FROM orders
WHERE(purch_amt<200 OR
NOT ord_date>='2012-02-10');
59	SELECT * FROM orders
WHERE NOT((ord_date ='2012-08-17'
OR customer_id>3005)
AND purch_amt<1000);	SELECT * FROM orders;
59b	SELECT * FROM orders
WHERE NOT((ord_date ='2012-08-17'
OR customer_id>3005)
AND purch_amt<1000);	SELECT * FROM orders
WHERE ((ord_date NOT IN('2012-08-17')
OR customer_id<=3005)
AND purch_amt>=1000);
59c	SELECT * FROM orders
WHERE (ord_date ='2012-08-17'
OR customer_id>3005)
AND purch_amt<1000
SELECT * FROM orders;
60	SELECT *
FROM orders
WHERE (purch_amt BETWEEN 500 AND 4000)
AND NOT purch_amt IN(948.50,1983.43);	SELECT * FROM orders;
61	SELECT * FROM salesman
WHERE name BETWEEN 'A' and 'L';	SELECT * FROM salesman;
62	SELECT * FROM customer
WHERE cust_name LIKE 'B%';	SELECT * FROM customer;
63	SELECT *
FROM salesman
WHERE name LIKE 'N__l%';	SELECT * FROM salesman;
64	SELECT * FROM testtable
WHERE col1 LIKE '%/_%' ESCAPE '/';	SELECT * FROM testtable;
65	SELECT *
FROM testtable
WHERE col1 NOT LIKE '%/_%' ESCAPE '/';	SELECT * FROM testtable;
66	SELECT *
FROM testtable
WHERE col1 LIKE '%//%' ESCAPE '/';	SELECT * FROM testtable;
67	SELECT *
FROM testtable
WHERE col1 NOT LIKE '%//%' ESCAPE '/';	SELECT * FROM testtable;
68	SELECT *
FROM testtable
WHERE col1 LIKE '%/_//%' ESCAPE '/';	SELECT * FROM testtable;
69	SELECT *
FROM testtable
WHERE col1 NOT LIKE '%/_//%' ESCAPE '/';	SELECT * FROM testtable;
70	SELECT *
FROM testtable
WHERE col1 LIKE '%/%%' ESCAPE'/';	SELECT * FROM testtable;
71	SELECT *
FROM testtable
WHERE col1 NOT LIKE '%/%%' ESCAPE'/';	SELECT * FROM testtable;
72	SELECT *
FROM customer
WHERE grade IS NULL;	SELECT * FROM customer;
73	SELECT * FROM customer
WHERE grade IS NOT NULL;	SELECT * FROM customer
WHERE NOT grade IS NULL;
X73	SELECT COUNT(*), grade FROM customer
GROUP BY Grade;	SELECT * FROM customer;
74	SELECT salesman_id,name,city,'%',commission*100
FROM salesman;	SELECT * FROM salesman;
