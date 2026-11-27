
# Porovnání dotazů SQL

## Beta verze
Na konverzi tabulek se momentálně pracuje .... <br><br>
Správná data obsahuje aplikace - soubor index.html. <br>
Pro spuštění je třeba si stáhnout tento projekt a otevřít index.html [Stáhnout celý projekt a otevřít tento soubor v PC](https://github.com/jonasRower/SQL-Queries/blob/main/index.html). <br> 

<br>
V aplikaci by měla být data správná. <br><br>

## Beta verze - tabulka
Některé tabulky nemusejí být zatím správně....



| id    | Tabulka vlevo  | Tabulka vpravo  | 
| ----- | ----------  | ---------  |
| [## 1 ##](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/1.md)   | SELECT * FROM faktury WHERE odberatel IN(1, 11, 47, 112);     | SELECT * FROM faktury;    |
| [## 2 ##](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/2.md)   | SELECT * FROM faktury WHERE odberatel IN(1, 11, 47, 112);     | SELECT * FROM faktury WHERE odberatel IN(1, 11, 247, 112);    |
| [## 4 ##](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/4.md)   | SELECT ucet, obrat, VS FROM Obraty WHERE obrat <= 8300;    | SELECT ucet, obrat, VS FROM Obraty WHERE obrat >= 8300;    |
| [## 5 ##](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/5.md)   | SELECT * from Obraty WHERE datum >'2018-03-01';     | SELECT * from Obraty;   |
| [## 6 ##](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/6.md)   | 	SELECT * FROM Vyrobky WHERE cena IS NOT NULL;     | SELECT * FROM Vyrobky;   |
| [## 7 ##](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/7.md)   | 	SELECT cislo, nazev, sklad
FROM Vyrobky WHERE NOT sklad !=2;     | SELECT cislo, nazev, sklad FROM Vyrobky WHERE sklad = 2; |
| [## 8 ##](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/8.md)   | SELECT cislo, nazev, sklad FROM Vyrobky WHERE NOT sklad IN(2, 3);     | SELECT cislo, nazev,sklad FROM Vyrobky;   |
| [## 9 ##](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/9.md)   | SELECT cislo, nazev, sklad FROM Vyrobky WHERE sklad IN(2, 3);     | SELECT cislo, nazev, sklad FROM Vyrobky WHERE sklad = 2 OR sklad = 3;   |
| [## 10 ##](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/10.md)   | ...     | ....   |
| [## 11 ##](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/11.md)   | ...     | ....   |
| [## 12 ##](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/12.md)   | ...     | ....   |
| [## 13 ##](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/13.md)   | ...     | ....   |
| [## 14 ##](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/14.md)   | ...     | ....   |
| [## 15 ##](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/15.md)   | ...     | ....   |
| [## 16 ##](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/16.md)   | ...     | ....   |
| [## 17 ##](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/17.md)   | ...     | ....   |
| [## 18 ##](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/18.md)   | ...     | ....   |
| [## 19 ##](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/19.md)   | ...     | ....   |
| [## 20 ##](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/20.md)   | ...     | ....   |
| [## 21 ##](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/21.md)   | ...     | ....   |
| [## 22 ##](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/22.md)   | ...     | ....   |
| [## 23 ##](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/23.md)   | ...     | ....   |
| [## 24 ##](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/24.md)   | ...     | ....   |
| [## 25 ##](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/25.md)   | ...     | ....   |
| [## 26 ##](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/26.md)   | ...     | ....   |
| [## 27 ##](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/27.md)   | ...     | ....   |
| [## 28 ##](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/28.md)   | ...     | ....   |
| [## 29 ##](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/29.md)   | ...     | ....   |
| [## 30 ##](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/30.md)   | ...     | ....   |
| [## 31 ##](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/31.md)   | ...     | ....   |
| [## 32 ##](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/32.md)   | ...     | ....   |
| [## 33 ##](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/33.md)   | ...     | ....   |
| [## 34 ##](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/34.md)   | ...     | ....   |
| [## 35 ##](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/35.md)   | ...     | ....   |
| [## 36 ##](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/36.md)   | ...     | ....   |
| [## 37 ##](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/37.md)   | ...     | ....   |
| [## 38 ##](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/38.md)   | ...     | ....   |
| [## 39 ##](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/39.md)   | ...     | ....   |
| [## 40 ##](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/40.md)   | ...     | ....   |
| [## 41 ##](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/41.md)   | ...     | ....   |
| [## 42 ##](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/42.md)   | ...     | ....   |
| [## 43 ##](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/43.md)   | ...     | ....   |
| [## 44 ##](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/44.md)   | ...     | ....   |
| [## 45 ##](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/45.md)   | ...     | ....   |
| [## 46 ##](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/46.md)   | ...     | ....   |
| [## 47 ##](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/47.md)   | ...     | ....   |
| [## 48 ##](https://github.com/jonasRower/SQL-Queries/blob/main/Doc/MdGen/48.md)   | ...     | ....   |

