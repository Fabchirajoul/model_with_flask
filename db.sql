


-- create main table for all the predictions
-- create sub tables and join them with the main table for display purposes
CREATE TABLE MainTable (
    Id integer primary key AUTOINCREMENT,
    Jn,
	Ja,
    Jr,
    Jw,
    Density,
    UCS_Mpa,
    RQD_p,
    Q_Value,
    SRF,
    RMR,
    ESR_VALUE,
    Maximum_unsupported_span
)


SELECT Jn_PredictedValue,Ja_PredictedValue,Jr_PredictedValue,Jw_PredictedValue,UCS_PredictedValue,RQD_PredictedValue,RMR_PredictedValue,SRF_PredictedValue,Q_Value_PredictedValue,ESR_PredictedValue,Maximum_unsupported_span FROM MainDataTable ORDER BY MainID DESC LIMIT 7



INSERT INTO MainDataTabe (
    Jn,
	Ja,
    Jr,
    Jw,
    UCS_Mpa,
    Density,
    RQD_p,
    Q_Value,
    SRF,
    RMR,
    ESR_VALUE,
    Maximum_unsupported_span) VALUES (2,3,5,212,27000,2,3232,1,23,5,23,4)

SELECT DISTINCT Jn_Description, Jn FROM dataset

SELECT DISTINCT Jn_Description, Jn FROM dataset GROUP BY Jn_Description





-- Drop table users


CREATE TABLE MainDataTable (
    MainID integer primary key AUTOINCREMENT,
    Borehole_ID,
    Depth_From,
    Depth_To,
    Run_Length,
    True_Thickness,
    Weathering,
    Hardness,
    Geotech_Domain,
    Jn_Description,
    Jr_Description,
    Ja_Description,
    Jw_Description,
    ESR_Conditions,
    Depth_underground,
    RQD_m,
    RQD_p,
    Jn,
    Jr,
    Ja,
    Jw,
    Density,
    Virgin_Stress,
    UCS_Mpa,
    UCS_Virgin_stress_ratio,
    SRF,
    Q_Value,
    LNQ,
    RMR,
    ESR_VALUE,
    UCS_PredictedValue, 
    SRF_PredictedValue,
    Ja_PredictedValue,
    Jr_PredictedValue,
    Jw_PredictedValue,
    Jn_PredictedValue,
    RMR_PredictedValue,
    RQD_PredictedValue,
    Q_Value_PredictedValue,
    ESR_PredictedValue,
    Maximum_unsupported_span)

DROP TABLE MainDataTable

SELECT  RMR_PredictedValue,SRF_PredictedValue,
    RQD_PredictedValue,
    Q_Value_PredictedValue FROM MainDataTable


SELECT Density, Depth_To, UCS_Mpa, PredictedValue 
FROM MainDataTable
JOIN ucs_virgin_stress ON MainDataTable.MainID = ucs_virgin_stress.MainID




CREATE TABLE ucs_virgin_stress(
    UCS_Id integer primary key AUTOINCREMENT,
    PredictedValue REAL,
    MainID interger,
    FOREIGN KEY (MainID) REFERENCES MainDataTable(MainID)
);



SELECT Density, Depth_To, UCS_Mpa, UCS_PredictedValue FROM MainDataTable;

-- DROP TABLE ucs_virgin_stress

-- with prediction
insert into ucs_virgin_stress (MainID, PredictedValue) values (3, 3);

--main table
insert into MainDataTable (Density, Depth_To, UCS_Mpa, UCS_PredictedValue) values (27000, 17.75, 53.65, 5);


UPDATE MainDataTable SET SRF_PredictedValue = 90 WHERE MainID = 1

UPDATE MainDataTable SET Jn_PredictedValue= 90 WHERE MainID IN (
    SELECT
        MAX(MAINID)
    FROM MainDataTable
);


UPDATE MainDataTable SET Depth_From= 90, Depth_To=80, True_Thickness=70, Hardness=60 WHERE 
MainID IN (
    SELECT
        MAX(MAINID)
    FROM MainDataTable
);


UPDATE MainDataTable SET ESR_PredictedValue=77 WHERE MainID=(SELECT MAX(MainID) FROM MainDataTable)



INSERT INTO MainDataTable (Depth_From, Depth_To, True_Thickness, Hardness) VALUES (?, ?,?, ?)


SELECT MainID, UCS_PredictedValue, SRF_PredictedValue, Jn_PredictedValue, Depth_From, Depth_To, True_Thickness, Hardness, RQD_PredictedValue 
FROM MainDataTable
WHERE MainID IN (
    SELECT
        MAX(MAINID)
    FROM MainDataTable
);

SELECT SRF_PredictedValue, Jn_PredictedValue, Jr_PredictedValue, Ja_PredictedValue, Jw_PredictedValue, RQD_PredictedValue FROM MainDataTable

-- SRF
CREATE TABLE SRF(
    SRF_Id integer primary key AUTOINCREMENT,
    SRF_PredictedValue REAL,
    UCS_Id integer,
    FOREIGN KEY (UCS_Id)
        REFERENCES ucs_virgin_stress(UCS_Id)
    
);

insert into SRF (SRF_PredictedValue) values (32.35);
insert into SRF (SRF_PredictedValue, UCS_Id) values (17.75, 1);


-- DROP TABLE SRF

SELECT * 
FROM SRF
INNER JOIN ucs_virgin_stress
    ON SRF.UCS_Id = ucs_virgin_stress.UCS_Id;








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
INNER JOIN ucs_virgin_stress
    ON SRF.UCS_Id = ucs_virgin_stress.Id;





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
INNER JOIN ucs_virgin_stress
    ON SRF.UCS_Id = ucs_virgin_stress.Id;



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
INNER JOIN ucs_virgin_stress
    ON SRF.UCS_Id = ucs_virgin_stress.Id;



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
INNER JOIN ucs_virgin_stress
    ON SRF.UCS_Id = ucs_virgin_stress.Id;



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
INNER JOIN ucs_virgin_stress
    ON SRF.UCS_Id = ucs_virgin_stress.Id;



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
INNER JOIN ucs_virgin_stress
    ON SRF.UCS_Id = ucs_virgin_stress.Id;


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
INNER JOIN ucs_virgin_stress
    ON SRF.UCS_Id = ucs_virgin_stress.Id;



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
INNER JOIN ucs_virgin_stress
    ON SRF.UCS_Id = ucs_virgin_stress.Id;


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
INNER JOIN ucs_virgin_stress
    ON SRF.UCS_Id = ucs_virgin_stress.Id;





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