
Drop table users



CREATE TABLE ucs_virgin_stress(
    Id integer primary key AUTOINCREMENT,
    Density REAL,
    Depth REAL,
    UCS REAL,
    PredictedValue REAL
);

-- DROP TABLE ucs_virgin_stress;

SELECT * FROM ucs_virgin_stress;


insert into ucs_virgin_stress (Density, Depth, UCS, PredictedValue) values (27000, 32.35, 177.37, 3);
insert into ucs_virgin_stress (Density, Depth, UCS) values (27000, 17.75, 53.65);

-- SRF
CREATE TABLE SRF(
    Id integer primary key AUTOINCREMENT,
    SRF_PredictedValue REAL,
    UCS_Id integer,
    FOREIGN KEY (UCS_Id)
        REFERENCES UCS_virginStress(Id)
    
);

insert into SRF (SRF_PredictedValue, UCS_Id) values (32.35, 2);
insert into SRF (SRF_PredictedValue, UCS_Id) values (17.75, 1);


SELECT * 
FROM SRF
INNER JOIN UCS_virginStress
    ON SRF.UCS_Id = UCS_virginStress.Id;


--Jn
CREATE TABLE Jn(
    Id integer primary key AUTOINCREMENT,
    Jn_description TEXT,
    Jn REAL,
    SRF_Id integer,
    FOREIGN KEY (SRF_Id)
        REFERENCES SRF(Id)
    
);

SELECT * 
FROM Jn
INNER JOIN SRF
    ON Jn.SRF_Id = SRF.Id
INNER JOIN UCS_virginStress
    ON SRF.UCS_Id = UCS_virginStress.Id;



--Jr
CREATE TABLE Jr(
    Id integer primary key AUTOINCREMENT,
    Jr_description TEXT,
    Jr REAL,
    Jn_Id integer,
    FOREIGN KEY (Jn_Id)
        REFERENCES Jn(Id)
    
);

SELECT * 
FROM Jr
INNER JOIN Jn
    ON Jr.Jn_Id = Jn.Id
INNER JOIN SRF
    ON Jn.SRF_Id = SRF.Id
INNER JOIN UCS_virginStress
    ON SRF.UCS_Id = UCS_virginStress.Id;



--Ja
CREATE TABLE Ja(
    Id integer primary key AUTOINCREMENT,
    Ja_description TEXT,
    Ja REAL,
    Jr_Id integer,
    FOREIGN KEY (Jr_Id)
        REFERENCES Jr(Id)
    
);

SELECT * 
FROM Ja
INNER JOIN Jr
    ON Ja.Jr_Id = Jr.Id
INNER JOIN Jn
    ON Jr.Jn_Id = Jn.Id
INNER JOIN SRF
    ON Jn.SRF_Id = SRF.Id
INNER JOIN UCS_virginStress
    ON SRF.UCS_Id = UCS_virginStress.Id;



--Jw
CREATE TABLE Jw(
    Id integer primary key AUTOINCREMENT,
    Jw_description TEXT,
    Jw REAL,
    Ja_Id integer,
    FOREIGN KEY (Ja_Id)
        REFERENCES Ja(Id)
    
);


SELECT * 
FROM Jw
INNER JOIN Ja
    ON Jw.Ja_Id = Ja.Id
INNER JOIN Jr
    ON Ja.Jr_Id = Jr.Id
INNER JOIN Jn
    ON Jr.Jn_Id = Jn.Id
INNER JOIN SRF
    ON Jn.SRF_Id = SRF.Id
INNER JOIN UCS_virginStress
    ON SRF.UCS_Id = UCS_virginStress.Id;



-- Drop TABLE Jw

-- RQD
CREATE TABLE RQD(
    Id integer primary key AUTOINCREMENT,
    Depth_From REAL,
    Depth_To REAL,
    True_Thickness REAL,
    Hardness REAL,
    Jw_Id integer,
    FOREIGN KEY (Jw_Id)
        REFERENCES Jw(Id)
    
);


SELECT * 
FROM RQD
INNER JOIN Jw
    ON RQD.Jw_Id = Jw.Id
INNER JOIN Ja
    ON Jw.Ja_Id = Ja.Id
INNER JOIN Jr
    ON Ja.Jr_Id = Jr.Id
INNER JOIN Jn
    ON Jr.Jn_Id = Jn.Id
INNER JOIN SRF
    ON Jn.SRF_Id = SRF.Id
INNER JOIN UCS_virginStress
    ON SRF.UCS_Id = UCS_virginStress.Id;



-- DROP TABLE Q_Value

SELECT * FROM RQD;


insert into RQD (Depth_From, Depth_To, True_Thickness, Hardness) values (18.1, 7.5, 7.52, 3.00);
insert into RQD (Depth_From, Depth_To, True_Thickness, Hardness) values (16.6, 30.1, 28.83, 2.00);



-- Q_Value
CREATE TABLE Q_Value(
    Id integer primary key AUTOINCREMENT,
    Jn REAL,
    Jr REAL,
    Ja REAL,
    Jw REAL,
    SRF REAL,
    RQD_Id integer,
    FOREIGN KEY (RQD_Id)
        REFERENCES RQD(Id)
);



SELECT * 
FROM Q_Value
INNER JOIN RQD
    ON Q_Value.RQD_Id = RQD.Id
INNER JOIN Jw
    ON RQD.Jw_Id = Jw.Id
INNER JOIN Ja
    ON Jw.Ja_Id = Ja.Id
INNER JOIN Jr
    ON Ja.Jr_Id = Jr.Id
INNER JOIN Jn
    ON Jr.Jn_Id = Jn.Id
INNER JOIN SRF
    ON Jn.SRF_Id = SRF.Id
INNER JOIN UCS_virginStress
    ON SRF.UCS_Id = UCS_virginStress.Id;


insert into Q_Value (Jn, Jr, Ja, Jw, SRF, RDQ_p) values (15, 1.5, 6, 0.2, 1.25, 58);
insert into Q_Value (Jn, Jr, Ja, Jw, SRF, RDQ_p) values (12, 6.0, 80000, 0.66, 7.5, 49.33);


--RMR
CREATE TABLE RMR(
    Id integer primary key AUTOINCREMENT,
    RMR_description TEXT,
    RMR REAL,
    Q_Value_Id integer,
    FOREIGN KEY (Q_Value_Id)
        REFERENCES Q_Value(Id)
    
);


SELECT * 
FROM RMR
INNER JOIN Q_Value
    ON RMR.Q_Value_Id = Q_Value.Id 
INNER JOIN RQD
    ON Q_Value.RQD_Id = RQD.Id
INNER JOIN Jw
    ON RQD.Jw_Id = Jw.Id
INNER JOIN Ja
    ON Jw.Ja_Id = Ja.Id
INNER JOIN Jr
    ON Ja.Jr_Id = Jr.Id
INNER JOIN Jn
    ON Jr.Jn_Id = Jn.Id
INNER JOIN SRF
    ON Jn.SRF_Id = SRF.Id
INNER JOIN UCS_virginStress
    ON SRF.UCS_Id = UCS_virginStress.Id;



--ESR
CREATE TABLE ESR(
    Id integer primary key AUTOINCREMENT,
    ESR_description TEXT,
    ESR REAL,
    RMR_Id integer,
    FOREIGN KEY (RMR_Id)
        REFERENCES RMR(Id)
    
);


SELECT * 
FROM ESR
INNER JOIN RMR
    ON ESR.RMR_Id = RMR.Id
INNER JOIN Q_Value
    ON RMR.Q_Value_Id = Q_Value.Id 
INNER JOIN RQD
    ON Q_Value.RQD_Id = RQD.Id
INNER JOIN Jw
    ON RQD.Jw_Id = Jw.Id
INNER JOIN Ja
    ON Jw.Ja_Id = Ja.Id
INNER JOIN Jr
    ON Ja.Jr_Id = Jr.Id
INNER JOIN Jn
    ON Jr.Jn_Id = Jn.Id
INNER JOIN SRF
    ON Jn.SRF_Id = SRF.Id
INNER JOIN UCS_virginStress
    ON SRF.UCS_Id = UCS_virginStress.Id;


--MUS
CREATE TABLE MUS(
    Id integer primary key AUTOINCREMENT,
    MUS REAL,
    ESR_Id integer,
    FOREIGN KEY (ESR_Id)
        REFERENCES ESR(Id)
    
);

SELECT * 
FROM MUS
INNER JOIN ESR
    ON MUS.ESR_Id = ESR.Id
INNER JOIN RMR
    ON ESR.RMR_Id = RMR.Id
INNER JOIN Q_Value
    ON RMR.Q_Value_Id = Q_Value.Id 
INNER JOIN RQD
    ON Q_Value.RQD_Id = RQD.Id
INNER JOIN Jw
    ON RQD.Jw_Id = Jw.Id
INNER JOIN Ja
    ON Jw.Ja_Id = Ja.Id
INNER JOIN Jr
    ON Ja.Jr_Id = Jr.Id
INNER JOIN Jn
    ON Jr.Jn_Id = Jn.Id
INNER JOIN SRF
    ON Jn.SRF_Id = SRF.Id
INNER JOIN UCS_virginStress
    ON SRF.UCS_Id = UCS_virginStress.Id;





SELECT Jn,
	    Ja,
    	Jr,
        	Jw,
            	UCS_Mpa,
                	RQD_p,	Q_Value,
                    	SRF,
                        	RMR,
                            	ESR_VALUE,
                                	Maximum_unsupported_span FROM dataset ORDER BY id DESC LIMIT 7