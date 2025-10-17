DROP DATABASE if exists Torn;
CREATE DATABASE Torn;
USE Torn;

DROP TABLE IF EXISTS Participate;
DROP TABLE IF EXISTS Ranking;
DROP TABLE IF EXISTS Match_;
DROP TABLE IF EXISTS Tournament;
DROP TABLE IF EXISTS Game;
DROP TABLE IF EXISTS Player;

CREATE TABLE Player (
   ID_player INT,
   Surname VARCHAR(50) NOT NULL,
   Name VARCHAR(50) NOT NULL,
   Pseudo VARCHAR(50) NOT NULL,
   Age INT,
   Gender VARCHAR(50) NOT NULL,
   PRIMARY KEY(ID_player)
);

CREATE TABLE Game (
   ID_game INT,
   Name_game VARCHAR(50) NOT NULL,
   Type_game VARCHAR(50) NOT NULL,
   Editor VARCHAR(50),
   Release_date DATE NOT NULL,
   Age_requirement INT,
   PRIMARY KEY(ID_game)
);

CREATE TABLE Tournament (
   ID_tournament INT,
   Name_tournament VARCHAR(50) NOT NULL,
   Location VARCHAR(50) NOT NULL,
   Date_start DATE,
   Date_end DATE,
   Reward VARCHAR(50),
   PRIMARY KEY(ID_tournament)
);

CREATE TABLE Match_ (
   ID_match_ INT,
   Date_game DATE,
   Table_number INT NOT NULL,
   Game_support VARCHAR(50),
   Time_max_minutes INT,
   Referee INT,
   ID_tournament INT NOT NULL,
   ID_game INT NOT NULL,
   PRIMARY KEY(ID_match_),
   FOREIGN KEY(ID_tournament) REFERENCES Tournament(ID_tournament),
   FOREIGN KEY(ID_game) REFERENCES Game(ID_game)
);

CREATE TABLE Ranking (
   ID_player INT,
   ID_tournament INT,
   Ranked INT,
   PRIMARY KEY(ID_player, ID_tournament),
   FOREIGN KEY(ID_player) REFERENCES Player(ID_player),
   FOREIGN KEY(ID_tournament) REFERENCES Tournament(ID_tournament)
);

CREATE TABLE Participate (
   ID_player INT,
   ID_match_ INT,
   Score INT,
   Position_player INT,
   Status_ VARCHAR(50),
   PRIMARY KEY(ID_player, ID_match_),
   FOREIGN KEY(ID_player) REFERENCES Player(ID_player),
   FOREIGN KEY(ID_match_) REFERENCES Match_(ID_match_)
);

alter table Tournament
add constraint ck_datestart
check (Date_start > '2020-03-17' or Date_start = '2020-03-17' );
alter table Tournament
add constraint ck_dateend
check (Date_end >= Date_start );
alter table Match_
add constraint ck_dategame
check (date_game >= '2020-03-17');

INSERT INTO Player (ID_player, Surname, Name, Pseudo, Age, Gender) VALUES 
(1, 'Tea', 'Julia', 'IAmJuliaah', 20, 'Girl'),
(2, 'Chen', 'Irene', 'Calyisn', 20, 'Girl'),
(3, 'Dion', 'Edouard', 'Daleu_de_lextreme', 21, 'Boy'),
(4, 'Pierson', 'Maceo', 'ClownFiesta', 20, 'Boy'),
(5, 'Toure', 'Ines', 'Inesx)', 20, 'Girl'),
(6, 'Berly', 'Yuushi', 'Sugejiji', 21, 'Boy'),
(7, 'Li', 'Helene', 'ln', 21, 'Girl'),
(8, 'Ye', 'Emma', 'iSqku', 21, 'Girl'),
(9, 'Bault', 'Maxime', 'Maximator', 20, 'Boy'),
(10, 'Vallat', 'Hippolyte', 'Hyppox', 20, 'Boy');

INSERT INTO Game (ID_game, Name_game, Type_game, Editor, Release_date, Age_requirement) VALUES
(1, 'Uno', 'Card', 'Mattel', '1971-01-01', 6),
(2, 'LeagueOfLegends', 'Online', 'RiotGames', '2009-10-27', 12),
(3, 'Belote', 'Card', 'Unknown', '1920-01-01', 6),
(4, 'Kems', 'Card', 'Unknown', '1999-01-01', 10),
(5, 'Monopoly', 'Board', 'Hasbro', '1935-01-01', 3),
(6, 'GenshinImpact', 'Online', 'Hoyoverse', '2020-09-28', 12),
(7, 'Echec', 'Board', 'Unknown', '0600-01-01', 6),
(8, 'Valorant', 'Online', 'RiotGames', '2020-06-02', 16),
(9, 'JeuDeDame', 'Board', 'Unknown', '1100-01-01', 5),
(10, 'LaBonnePaye', 'Board', 'Hasbro', '1984-01-01', 7);

INSERT INTO Tournament (ID_tournament, Name_tournament, Location, Date_start, Date_end, Reward) VALUES
(1, 'CardCaptor', 'Paris', '2020-08-20', '2020-08-22', 'Money'),
(2, 'OnlineTournament', 'Paris', '2025-12-13', '2025-12-15', 'Money'),
(3, 'BoardTournament', 'Paris', '2023-04-25', '2023-04-28', 'Money');

INSERT INTO Match_ (ID_match_, ID_tournament, ID_Game, Date_game, Table_number, Game_support, Time_max_minutes, Referee) VALUES 
(1, 1, 1, '2020-08-20', 1, 'Table', 30, 2),
(2, 1, 3, '2020-08-21', 2, 'Table', 60, 2),
(3, 1, 3, '2020-08-21', 3, 'Table', 60, 2),
(4, 1, 4, '2020-08-22', 3, 'Table', 30, 2),
(5, 1, 4, '2020-08-22', 3, 'Table', 30, 2),
(6, 2, 2, '2025-12-13', 1, 'Computer', 75, 0),
(7, 2, 6, '2025-12-14', 2, 'Computer', 10, 1),
(8, 2, 8, '2025-12-15', 3, 'Computer', 80, 0), 
(9, 3, 5, '2023-04-25', 1, 'Table', 120, 2),
(10, 3, 7, '2023-04-26', 2, 'Table', 75, 1),
(11, 3, 7, '2023-04-26', 2, 'Table', 75, 1),
(12, 3, 9, '2023-04-27', 3, 'Table', 60, 1),
(13, 3, 9, '2023-04-27', 3, 'Table', 60, 1),
(14, 3, 10, '2023-04-28', 4, 'Table', 75, 1);

INSERT INTO Participate (ID_player, ID_match, Score, Position_player, Status) VALUES ( 
-- CARD
-- Uno
(1, 1, 40, 1, 'Win'),
(2, 1,  25, 4, 'Loose'),
(3, 1, 20, 5, 'Loose'),
(4, 1, 30, 3, 'Loose'),
(5, 1, 10, 7, 'Loose'),
(6, 1, 35, 2, 'Loose'),
(7, 1, 15, 6, 'Loose'),
(8, 1, 5, 8, 'Loose'),
-- Belote
(1, 2, 10, 1, 'Win'),
(2, 2, 10, 1, 'Win'),
(3, 2, 5, 2, 'Loose'),
(4, 2, 5, 2, 'Loose'),
(5, 3, 5, 2, 'Loose'), 
(6, 3,  10, 1, 'Win'),
(7, 3,  10, 1, 'Win'),
(8, 3,  5, 2, 'Loose'),
-- Kems
(1, 4, 5, 2, 'Loose'),
(2, 4, 10, 1, 'Win'),
(3, 4, 10, 1, 'Win'),
(4, 4, 5, 2, 'Loose'),
(5, 5, 10, 1, 'Win'),
(6, 5, 10, 1, 'Win'),
(7, 5, 5, 2, 'Loose'),
(8, 5, 5, 2, 'Loose'),
-- ONLINE
-- GI
(1, 7, 55, 1, 'Win'),
(2, 7, 50, 2, 'Loose'),
(3, 7, 35, 5, 'Loose'),
(4, 7, 45, 3, 'Loose'),
(5, 7, 15, 8, 'Loose'),
(6, 7, 20, 7, 'Loose'),
(7, 7, 5, 10, 'Loose'),
(8, 7, 40, 4, 'Loose'),
(9, 7, 10, 9, 'Loose'),
(10, 7, 30, 6, 'Loose'),
-- Valo
(1, 8, 5, 2, 'Loose'),
(2, 8, 10, 1, 'Win'),
(3, 8, 10, 1, 'Win'),
(4, 8, 5, 2, 'Loose'),
(5, 8, 10, 1, 'Win),
(6, 8, 10, 1, 'Win),
(7, 8, 5, 2, 'Loose'),
(8, 8, 10, 1, 'Win'),
(9, 8, 5, 2, 'Loose'),
(10, 8, 5, 2, 'Loose'),
-- LoL
(1, 6, 5, 2, 'Loose'),
(2, 6, 10, 1, 'Win'),
(3, 6, 5, 2, 'Loose'),
(4, 6, 10, 1, 'Win'),
(5, 6, 5, 2, 'Loose'),
(6, 6, 10, 1, 'Win'),
(7, 6, 5, 2, 'Loose'),
(8, 6, 10, 1, 'Win'),
(9, 6, 5, 2, 'Loose'),
(10, 6, 10, 1, 'Win'),
-- BOARD
-- Monop
(1, 9, 15, 2, 'Loose'),
(2, 9, 10, 3, 'Loose'),
(3, 9, 5, 4, 'Loose'),
(4, 9, 20, 1, 'Win'),
--Echec
(1, 10, 10, 1, 'Win'),
(2, 10, 5, 2, 'Loose'),
(3, 11, 10, 1, 'Win'),
(4, 11, 5, 2, 'Loose'),
-- Dame
(1, 12, 5, 2, 'Loose'),
(2, 13, 5, 2, 'Loose'),
(3, 12, 10, 1, 'Win'), 
(4, 13, 10, 1, 'Win'), 
--LaBonnePaye
(1, 14, 10, 3, 'Loose'),
(2, 14, 20, 1, 'Win'), 
(3, 14, 15, 2, 'Loose'),
(4, 14, 5, 4, 'Loose'));

select * from Player;
select * from Game;
select * from Tournament;
select * from Match_;
