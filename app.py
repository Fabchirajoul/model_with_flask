import sqlite3
import pickle
import sys
import numpy as np
from sklearn.preprocessing import LabelEncoder
# from flask_sqlalchemy import SQLAlchemy
from flask import Flask, render_template, request, jsonify, redirect, url_for, session
from werkzeug.security import generate_password_hash, check_password_hash


import os

app = Flask(__name__)
app.secret_key = 'Group_1_Raj_the_leader'

conn = sqlite3.connect('capstonedb.db')
c = conn.cursor()

# 1.  UCS
with open('models/update/RFC_UCSVSR.pkl', 'rb') as f:
    ucsvsr_model = pickle.load(f)

# connect models


@app.route('/api/ucs_model', methods=['POST'])
def UCS_Pred():
    if request.method == 'POST':
        data = request.get_json()
        # Extract the features from the data
        Density = float(data['Density'])
        Depth = float(data['Depth'])
        UCS = float(data['UCS'])

        # Reshape features and make prediction using the loaded model
        features = np.array([[Density, Depth, UCS]])
        prediction = ucsvsr_model.predict(features)[0]

        return jsonify({'prediction': prediction.tolist()})

@app.route('/api/ucs_model_save', methods=['POST'])
def UCS_Pred_save():
    if request.method == 'POST':
        data = request.get_json()

        # Extract data from the JSON
        Density = data['Density']
        Depth_To = data['Depth_To']
        UCS_Mpa = data['UCS_Mpa']
        UCS_PredictedValue = data['UCS_PredictedValue']
       

        # Connect to the SQLite database
        conn = sqlite3.connect('capstonedb.db')
        cursor = conn.cursor()

        # Insert data into the database
        cursor.execute("INSERT INTO MainDataTable (Density, Depth_To, UCS_Mpa, UCS_PredictedValue) VALUES (?, ?,?, ?)",
                       (Density, Depth_To, UCS_Mpa, UCS_PredictedValue))
        
        # cursor.execute("INSERT INTO ucs_virgin_stress (MainID, UCS_PredictedValue) VALUES (?, ?)",
                    #    (MainID, UCS_PredictedValue))

        # Commit the transaction and close the connection
        conn.commit()
        conn.close()

        return 'Data successfully added to the database'
    

@app.route('/api/get_ucs_model', methods=['GET'])
def Get_UCS():
    conn = sqlite3.connect('capstonedb.db')
    cursor = conn.cursor()

    cursor.execute('SELECT  Density, Depth_To, UCS_Mpa, UCS_PredictedValue FROM MainDataTable WHERE UCS_PredictedValue IS NOT NULL ORDER BY MainDataTable.MainID DESC LIMIT 5')
    rows = cursor.fetchall()

    conn.close()

    # Define the column names
    column_names = ['Density', 'Depth_To', 'UCS_Mpa', 'UCS_PredictedValue']

    # Convert the fetched rows to a list of dictionaries
    data = [dict(zip(column_names, row)) for row in rows]

    # Return the data as JSON
    return jsonify({'historical_data': data})




# 2. SRF
with open('models/update/RFC_SRF.pkl', 'rb') as f:
    srf_model = pickle.load(f)

# connect models


@app.route('/api/srf_model', methods=['POST'])
def SRF_Pred():
    if request.method == 'POST':
        data = request.get_json()
        # Extract the features from the datapip
        Virgin_stress_ratio = float(data['Virgin_stress_ratio'])

        # Reshape features and make prediction using the loaded model
        features = np.array([[Virgin_stress_ratio]])
        prediction = srf_model.predict(features)[0]

        return jsonify({'prediction': prediction.tolist()})


@app.route('/api/srf_model_save', methods=['POST'])
def SRF_Pred_save():
    if request.method == 'POST':
        data = request.get_json() 

        # Extract data from the JSON
        SRF_PredictedValue = data['SRF_PredictedValue']
        # MainID = data['MainID']

        # Connect to the SQLite database
        conn = sqlite3.connect('capstonedb.db')
        cursor = conn.cursor()

        # Insert data into the database
        cursor.execute("UPDATE MainDataTable SET SRF_PredictedValue=? WHERE MainID=(SELECT MAX(MainID) FROM MainDataTable)", (SRF_PredictedValue,))

        # Commit the transaction and close the connection
        conn.commit()
        conn.close()

        return 'Data updated successfully'
    

@app.route('/api/get_srf_model', methods=['GET'])
def Get_srf():
    conn = sqlite3.connect('capstonedb.db')
    cursor = conn.cursor()

    cursor.execute('SELECT MainID, Density, Depth_To, UCS_Mpa, UCS_PredictedValue, SRF_PredictedValue FROM MainDataTable WHERE UCS_PredictedValue IS NOT NULL and SRF_PredictedValue IS NOT NULL ORDER BY MainID DESC LIMIT 5')
    rows = cursor.fetchall()

    conn.close()

    # Define the column names
    column_names = ['MainID', 'Density', 'Depth_To', 'UCS_Mpa', 'UCS_PredictedValue', 'SRF_PredictedValue']

    # Convert the fetched rows to a list of dictionaries
    data = [dict(zip(column_names, row)) for row in rows]

    # Return the data as JSON
    return jsonify({'historical_data': data})


# 3. Jn Model
with open('models/update/RFC_Jn.pkl', 'rb') as f:
    Jn_model = pickle.load(f)


@app.route('/api/Jn_model', methods=['POST'])
def Jn_Pred():
    data = request.get_json()  # Assuming you are sending JSON data from the frontend
    Jn_Description = ["Intact no or few joints",
                      "one joint set",
                      "one joint set plus random joints",
                      "two joint set",
                      "two joint set plus random joints",
                      "three joint set",
                      "three joint set plus random joint",
                      "Four or more joint set|random joint|heavily jointed|sugar cube",
                      "crushed rock|eathlike",
                      "intact or few joints with intersections",
                      "one joint set with intersections",
                      "one joint set plus random joints with intersections",
                      "two joint sets plus intersections",
                      "two joint set plus random joints with intersections",
                      "three joint sets with intersections",
                      "three joint sets plus random joints with intersections",
                      "Four or more joint set|random joint|heavily jointed|sugar cube with intersections",
                      "crushed rock|eathlike with intersections",
                      "intact | no or few joints with portals",
                      "one joint set with portals",
                      "one joint set plus random joints with portals",
                      "two joint sets with portals",
                      "two joint sets plus random joints with portals",
                      "three joint sets with portals",
                      "three joint sets plus random joints with portals",
                      "Four or more joint sets| random|heavily jointed|sugar|cubed with portals",
                      "crushed rock|earthlike with portals",
                      "Massive no or few joints",
                      "one joint set plus random",
                      "two joint set plus random",
                      "Three joint set",
                      "Three joint set plus random",
                      "Four or more joint set random heavily jointed sugar cube",
                      "crushed rock earthlike",
                      "Massive no or few joints with intersections",
                      "one joint set plus random with intersections",
                      "two joint set with intersections",
                      "two joint set plus random with intersections",
                      "Three joint set with intersections",
                      "Three joint set plus random with intersections",
                      "Four or more joint set random heavily jointed sugar cube with intersections",
                      "crushed rock earthlike with intersections",
                      "Massive no or few joints with portals",
                      "one joint set plus random with portals",
                      "two joint set with portals",
                      "two joint set plus random with portals",
                      "Three joint set with portals",
                      "Three joint set plus random with portals",
                      "Four or more joint set random heavily jointed sugar cube with portals",
                      "crushed rock earthlike with portals",
                      ]

    # Create a LabelEncoder instance
    labelEncoder = LabelEncoder()

    # Fit and transform the categorical value using LabelEncoder
    encoded_Jn = labelEncoder.fit_transform(Jn_Description)

    for i in range(0,len(Jn_Description)):
        if str(data['Jn_Description']) in str(Jn_Description[i]):
            encoded_val = encoded_Jn[i]
            # Reshape features and make prediction using the loaded model
            features = np.array([encoded_val])
            prediction = Jn_model.predict(features.reshape(-1, 1))

            return jsonify({'prediction': prediction.tolist()})

    return jsonify({'prediction': ["Error"]})

    # ends here

@app.route('/api/Jn_model_save', methods=['POST'])
def Jn_Pred_save():
    if request.method == 'POST':
        data = request.get_json()
        Jn_description = data['Jn_description']
        Jn_PredictedValue = data['Jn_PredictedValue']

        # Connect to the SQLite database
        conn = sqlite3.connect('capstonedb.db')
        cursor = conn.cursor()

        # Update data in the database for the row with the maximum MainID
        cursor.execute("UPDATE MainDataTable SET Jn_description=?, Jn_PredictedValue=? WHERE MainID=(SELECT MAX(MainID) FROM MainDataTable)", (Jn_description, Jn_PredictedValue,))

        # Commit the transaction and close the connection
        conn.commit()
        conn.close()

        return 'Data updated successfully'


@app.route('/api/get_Jn_model', methods=['GET'])
def Get_Jn():
    conn = sqlite3.connect('capstonedb.db')
    cursor = conn.cursor()

    cursor.execute('SELECT Jn_description, Jn_PredictedValue FROM MainDataTable WHERE Jn_description IS NOT NULL and Jn_PredictedValue IS NOT NULL ORDER BY MainID DESC LIMIT 5')
    rows = cursor.fetchall()

    conn.close()

    # Define the column names
    column_names = ['Jn_description', 'Jn_PredictedValue']

    # Convert the fetched rows to a list of dictionaries
    data = [dict(zip(column_names, row)) for row in rows]

    # Return the data as JSON
    return jsonify({'Jn_historical_data': data})


# 4. Jr Model
with open('models/update/RFR_Jr.pkl', 'rb') as f:
    Jr_model = pickle.load(f)


@app.route('/api/Jr_model', methods=['POST'])
def Jr_Pred():
    data = request.get_json()  # Assuming you are sending JSON data from the frontend
    Jr_Description = [
        "rough and discontinous",
        "rough and undulating",
        "rough and planar",
        "smooth and discountinous",
        "smooth and undulating",
        "smooth and planar",
        "slickenedsided and discountinous",
        " slickenedsided and undulating",
        "slickenedsided and planar",
        "planar containing gouge thick enough to prevent rockwall contact and discountinous",
        "planar containing gouge thick enough to prevent rockwall contact and discountinous and undulating",
        "planar containing gouge thick enough to prevent rockwall contact and discountinous and planar",
        "rough and discontinous with mean spacing greater than 3m",
        "rough and undulating with mean spacing greater than 3m",
        "rough and planar with mean spacing greater than 3m",
        "smooth and discountinous with mean spacing greater than 3m",
        "smooth and undulating with mean spacing greater than 3m",
        "smooth and planar with mean spacing greater than 3m",
        "slickenedsided and discountinous with mean spacing greater than 3m",
        " slickenedsided and undulating with mean spacing greater than 3m",
        "slickenedsided and planar with mean spacing greater than 3m",
        "planar containing gouge thick enough to prevent rockwall contact and discountinous with mean spacing greater than 3m",
        "planar containing gouge thick enough to prevent rockwall contact and discountinous and undulating with mean spacing greater than 3m",
        "planar containing gouge thick enough to prevent rockwall contact and discountinous and planar with mean spacing greater than 3m",
        "Discontinous joints rock wall intact",
        "Rough and irregular undulating rock wall intact",
        "smooth undulating rock wall intact",
        "SLickenedsided undulating rock wall intact",
        "rough or irregular planar rock wall intact",
        "smooth planar rock wall intact",
        "slickened sided planar rock wall intact",
        "Discontinous joints Rock wall contact before 10 cm shear",
        "Rough and irregular undulating Rock wall contact before 10 cm shear",
        "smooth undulating Rock wall contact before 10 cm shear",
        "SLickenedsided undulating Rock wall contact before 10 cm shear",
        "smooth planar Rock wall contact before 10 cm shear",
        "slickened sided planar Rock wall contact before 10 cm shear",
        "Zones containing clay mineral thick enough to prevent rock wall contact with no rock wall contact when sheared",
        "Sandy gravely or crushed zone thick enough to prevent rock wall contact with no rock wall contact when sheared",
        "Discontinous joints rock wall intact with mean spacing of the relevant joint set greater than 3m",
        "Rough and irregular undulating rock wall intact with mean spacing of the relevant joint set greater than 3m",
        "smooth undulating rock wall intact with mean spacing of the relevant joint set greater than 3m",
        "SLickenedsided undulating rock wall intact with mean spacing of the relevant joint set greater than 3m",
        "rough or irregular planar rock wall intact with mean spacing of the relevant joint set greater than 3m",
        "smooth planar rock wall intact with mean spacing of the relevant joint set greater than 3m",
        "slickened sided planar rock wall intact with mean spacing of the relevant joint set greater than 3m",
        "Discontinous joints Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m",
        "Rough and irregular undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m",
        "smooth undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m",
        "SLickenedsided undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3",
        "smooth planar Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m",
        "slickened sided planar Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m",
        "Zones containing clay mineral thick enough to prevent rock wall contact with no rock wall contact when sheared with mean spacing of the relevant joint set greater than 3m",
        "Sandy gravely or crushed zone thick enough to prevent rock wall contact with no rock wall contact when sheared with mean spacing of the relevant joint set greater than 3m",
        "SLickenedsided undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m",
        "Planar joints having linerations provided that the lineations are oriented for minimum strength",
        "Slickened sided having linearations provided that the lineations are oriented for minimum strength",
        "sandy gravely or crushed zone thick enough to prevent rock wall contact with no rock wall contact when sheared with mean spacing of the relevant joint set greater than 3m",
    ]
    # Create a LabelEncoder instance
    labelEncoder = LabelEncoder()

    # Fit and transform the categorical value using LabelEncoder
    encoded_Jr = labelEncoder.fit_transform(Jr_Description)

    for i in range(0, len(Jr_Description)):
        if str(data['Jr_Description']) in str(Jr_Description[i]):
            encoded_val = encoded_Jr[i]
            # Reshape features and make prediction using the loaded model
            features = np.array([encoded_val])
            prediction = Jr_model.predict(features.reshape(-1, 1))

            return jsonify({'prediction': prediction.tolist()})

    return jsonify({'prediction': ["Error"]})

    # ends here

@app.route('/api/Jr_model_save', methods=['POST'])
def Jr_Pred_save():
    if request.method == 'POST':
        data = request.get_json()
        
        Jr_description = data['Jr_description']
        Jr_PredictedValue = data['Jr_PredictedValue']

        # Connect to the SQLite database
        conn = sqlite3.connect('capstonedb.db')
        cursor = conn.cursor()

        # Update data in the database for the row with the maximum MainID
        cursor.execute("UPDATE MainDataTable SET Jr_description=?, Jr_PredictedValue=? WHERE MainID=(SELECT MAX(MainID) FROM MainDataTable)", (Jr_description, Jr_PredictedValue,))

        # Commit the transaction and close the connection
        conn.commit()
        conn.close()

        return 'Data updated successfully'


@app.route('/api/get_Jr_model', methods=['GET'])
def Get_Jr():
    conn = sqlite3.connect('capstonedb.db')
    cursor = conn.cursor()

    cursor.execute('SELECT Jr_description, Jr_PredictedValue FROM MainDataTable WHERE Jr_description IS NOT NULL and Jr_PredictedValue IS NOT NULL ORDER BY MainID DESC LIMIT 5')
    rows = cursor.fetchall()

    conn.close()

    # Define the column names
    column_names = ['Jr_description', 'Jr_PredictedValue']

    # Convert the fetched rows to a list of dictionaries
    data = [dict(zip(column_names, row)) for row in rows]

    # Return the data as JSON
    return jsonify({'Jr_historical_data': data})



# 5. Ja Model
with open('models/update/RFR_Ja.pkl', 'rb') as f:
    Ja_model = pickle.load(f)


@app.route('/api/Ja_model', methods=['POST'])
def Ja_Pred():
    data = request.get_json()  # Assuming you are sending JSON data from the frontend
    Ja_Description = [
        "tightly healed|hard|non softening|impermeable rock mineral filing less than 1mm of joint seperation",
        "tightly healed|hard|non softening|impermeable rock mineral filing between 10mm to 50mm joint seperation",
        "tightly healed|hard|non softening|impermeable rock mineral filing above 5000mm joint seperation",
        "unaltered joint walls|surface staining only with less than 1mm joint seperation",
        "unaltered joint walls|surface staining only between 10mm to 50mm joint seperation",
        "unaltered joint walls|surface staining only above 5000mm joint seperation",
        "slightly altered|non softening|non cohessive rock mineral or crushed rock filing less than 1mm of joint seperation",
        "slightly altered|non softening|non cohessive rock mineral or crushed rock filing between 10mm to 50mm joint seperation",
        "slightly altered|non softening|non cohessive rock mineral or crushed rock filing above 5000mm joint seperation",
        "non softening|slightly clayey non cohesive less than 1mm of joint seperation",
        "non softening|slightly clayey non cohesive between 10mm to 50mm joint seperation",
        "non softening|slightly clayey non cohesive above 5000mm joint seperation",
        "non softening strongly over consolidated clay mineral filling with or without crushed rock less than 1mm of joint seperation",
        "non softening strongly over consolidated clay mineral filling with or without crushed rock between 10mm to 50mm joint seperation",
        "non softening strongly over consolidated clay mineral filling with or without crushed rock filing above 5000mm joint seperation",
        "softening or low fiction clay mineral coatings and small quantities of swelling clays less than 1mm of joint seperation",
        "softening or low fiction clay mineral coatings and small quantities of swelling clays between 10mm to 50mm joint seperation",
        "softening or low fiction clay mineral coatings and small quantities of swelling clays above 5000mm joint seperation",
        "softening moderately over consolidated clay mineral filing with or without crushed rock less than 1mm of joint seperation",
        "softening moderately over consolidated clay mineral filing with or without crushed rock between 10mm to 50mm joint seperation",
        "softening moderately over consolidated clay mineral filing with or without crushed rock above 5000mm joint seperation",
        "shattered or micro shattered swelling clay gouge with or without crushed rock less than 1mm of joint seperation",
        "shattered or micro shattered swelling clay gouge with or without crushed rock between 10mm to 50mm joint seperation",
        "shattered or micro shattered swelling clay gouge with or without crushed rock above 5000mm joint seperation",
        "Tightly healed impermeable filling",
        "Tightly healed hard and non softening impermeable filling",
        "Tightly healed non softening",
        "Tightly healed",
        "Unaltered joint walls surface staining only",
        "Unaltered joint walls",
        "surface staining only",
        "Unaltered joint walls surface staining only at residual frictional angle of 25 degrees",
        "Unaltered joint walls surface staining only at residual frictional angle of 26 degrees",
        "Unaltered joint walls surface staining only at residual frictional angle of 27 degrees",
        "Unaltered joint walls surface staining only at residual frictional angle of 28 degrees",
        "Unaltered joint walls surface staining only at residual frictional angle of 29 degrees",
        "Unaltered joint walls surface staining only at residual frictional angle of 30 degrees",
        "Unaltered joint walls surface staining only at residual frictional angle of 31 degrees",
        "Unaltered joint walls surface staining only at residual frictional angle of 32 degrees",
        "Unaltered joint walls surface staining only at residual frictional angle of 33 degrees",
        "Unaltered joint walls surface staining only at residual frictional angle of 34 degrees",
        "Unaltered joint walls surface staining only at residual frictional angle of 35 degrees",
        "Unaltered joint walls at residual frictional angle of 25 degrees",
        "Unaltered joint walls at residual frictional angle of 26 degrees",
        "Unaltered joint walls at residual frictional angle of 27 degrees",
        "Unaltered joint walls at residual frictional angle of 28 degrees",
        "Unaltered joint walls at residual frictional angle of 29 degrees",
        "Unaltered joint walls at residual frictional angle of 30 degrees",
        "Unaltered joint walls at residual frictional angle of 31 degrees",
        "Unaltered joint walls at residual frictional angle of 32 degrees",
        "Unaltered joint walls at residual frictional angle of 33 degrees",
        "Unaltered joint walls at residual frictional angle of 34 degrees",
        "Unaltered joint walls at residual frictional angle of 55 degrees",
        "surface staining only at residual frictional angle of 25 degrees",
        "surface staining only at residual frictional angle of 26 degrees",
        "surface staining only at residual frictional angle of 27 degrees",
        "surface staining only at residual frictional angle of 28 degrees",
        "surface staining only at residual frictional angle of 29 degrees",
        "surface staining only at residual frictional angle of 30 degrees",
        "surface staining only at residual frictional angle of 31 degrees",
        "surface staining only at residual frictional angle of 32 degrees",
        "surface staining only at residual frictional angle of 33 degrees",
        "surface staining only at residual frictional angle of 34 degrees",
        "surface staining only at residual frictional angle of 35 degrees",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks",
        "SLightly altered joint walls disintegrated rocks",
        "SLightly altered joint walls non softening mineral coatings",
        "SLightly altered joint sandy particles",
        "SLightly altered joint walls clay free",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks at residual frictional angle of 25 degrees",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks at residual frictional angle of 26 degrees",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks at residual frictional angle of 27 degrees",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks at residual frictional angle of 28 degrees",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks at residual frictional angle of 29 degrees",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks at residual frictional angle of 30 degrees",
        "SLightly altered joint walls disintegrated rocks at residual frictional angle of 25 degrees",
        "SLightly altered joint walls disintegrated rocks at residual frictional angle of 26 degrees",
        "SLightly altered joint walls disintegrated rocks at residual frictional angle of 27 degrees",
        "SLightly altered joint walls disintegrated rocks at residual frictional angle of 28 degrees",
        "SLightly altered joint walls disintegrated rocks at residual frictional angle of 29 degrees",
        "SLightly altered joint walls disintegrated rocks at residual frictional angle of 30 degrees",
        "SLightly altered joint walls non softening mineral coatings at residual frictional angle of 25 degrees",
        "SLightly altered joint walls non softening mineral coatings at residual frictional angle of 26 degrees",
        "SLightly altered joint walls non softening mineral coatings at residual frictional angle of 27 degrees",
        "SLightly altered joint walls non softening mineral coatings at residual frictional angle of 28 degrees",
        "SLightly altered joint walls non softening mineral coatings at residual frictional angle of 29 degrees",
        "SLightly altered joint walls non softening mineral coatings at residual frictional angle of 30 degrees",
        "SLightly altered joint sandy particles at residual frictional angle of 25 degrees",
        "SLightly altered joint sandy particles at residual frictional angle of 26 degrees",
        "SLightly altered joint sandy particles at residual frictional angle of 27 degrees",
        "SLightly altered joint sandy particles at residual frictional angle of 28 degrees",
        "SLightly altered joint sandy particles at residual frictional angle of 29 degrees",
        "SLightly altered joint sandy particles at residual frictional angle of 30 degrees",
        "SLightly altered joint walls clay free at residual frictional angle of 25 degrees",
        "SLightly altered joint walls clay free at residual frictional angle of 26 degrees",
        "SLightly altered joint walls clay free at residual frictional angle of 27 degrees",
        "SLightly altered joint walls clay free at residual frictional angle of 28 degrees",
        "SLightly altered joint walls clay free at residual frictional angle of 29 degrees",
        "SLightly altered joint walls clay free at residual frictional angle of 30 degrees",
        "Silty or sandy clay coatings small clay fractions non softening",
        "Silty small clay fractions non softening",
        "Silty non softening",
        "Sandy clay coatings non softening",
        "Sandy clay coatings with small clay fractions",
        "Silty or sandy clay coatings small clay fractions non softening at residual frictional angle of 20 degrees",
        "Silty or sandy clay coatings small clay fractions non softening at residual frictional angle of 21 degrees",
        "Silty or sandy clay coatings small clay fractions non softening at residual frictional angle of 22 degrees",
        "Silty or sandy clay coatings small clay fractions non softening at residual frictional angle of 23 degrees",
        "Silty or sandy clay coatings small clay fractions non softening at residual frictional angle of 24 degrees",
        "Silty or sandy clay coatings small clay fractions non softening at residual frictional angle of 25 degrees",
        "Silty small clay fractions non softening at residual frictional angle of 20 degrees",
        "Silty small clay fractions non softening at residual frictional angle of 21 degrees",
        "Silty small clay fractions non softening at residual frictional angle of 22 degrees",
        "Silty small clay fractions non softening at residual frictional angle of 23 degrees",
        "Silty small clay fractions non softening at residual frictional angle of 24 degrees",
        "Silty small clay fractions non softening at residual frictional angle of 25 degrees",
        "Silty non softening at residual frictional angle of 20 degrees",
        "Silty non softening at residual frictional angle of 21 degrees",
        "Silty non softening at residual frictional angle of 22 degrees",
        "Silty non softening at residual frictional angle of 23 degrees",
        "Silty non softening at residual frictional angle of 24 degrees",
        "Silty non softening at residual frictional angle of 25 degrees",
        "Sandy clay coatings non softening at residual frictional angle of 20 degrees",
        "Sandy clay coatings non softening at residual frictional angle of 21 degrees",
        "Sandy clay coatings non softening at residual frictional angle of 22 degrees",
        "Sandy clay coatings non softening at residual frictional angle of 23 degrees",
        "Sandy clay coatings non softening at residual frictional angle of 24 degrees",
        "Sandy clay coatings non softening at residual frictional angle of 25 degrees",
        "Sandy clay coatings with small clay fractions at residual frictional angle of 20 degrees",
        "Sandy clay coatings with small clay fractions at residual frictional angle of 21 degrees",
        "Sandy clay coatings with small clay fractions at residual frictional angle of 22 degrees",
        "Sandy clay coatings with small clay fractions at residual frictional angle of 23 degrees",
        "Sandy clay coatings with small clay fractions at residual frictional angle of 24 degrees",
        "Sandy clay coatings with small clay fractions at residual frictional angle of 25 degrees",
        "Tightly healed impermeable filling Rock wall contact",
        "Tightly healed hard and non softening impermeable filling Rock wall contact",
        "Tightly healed non softening Rock wall contact",
        "Tightly healed Rock wall contact",
        "Unaltered joint walls surface staining only Rock wall contact",
        "Unaltered joint walls Rock wall contact",
        "surface staining only Rock wall contact",
        "Unaltered joint walls surface staining only at residual frictional angle of 25 degrees Rock wall contact",
        "Unaltered joint walls surface staining only at residual frictional angle of 26 degrees Rock wall contact",
        "Unaltered joint walls surface staining only at residual frictional angle of 27 degrees Rock wall contact",
        "Unaltered joint walls surface staining only at residual frictional angle of 28 degrees Rock wall contact",
        "Unaltered joint walls surface staining only at residual frictional angle of 29 degrees Rock wall contact",
        "Unaltered joint walls surface staining only at residual frictional angle of 30 degrees Rock wall contact",
        "Unaltered joint walls surface staining only at residual frictional angle of 31 degrees Rock wall contact",
        "Unaltered joint walls surface staining only at residual frictional angle of 32 degrees Rock wall contact",
        "Unaltered joint walls surface staining only at residual frictional angle of 33 degrees Rock wall contact",
        "Unaltered joint walls surface staining only at residual frictional angle of 34 degrees Rock wall contact",
        "Unaltered joint walls surface staining only at residual frictional angle of 35 degrees Rock wall contact",
        "Unaltered joint walls at residual frictional angle of 25 degrees Rock wall contact",
        "Unaltered joint walls at residual frictional angle of 26 degrees Rock wall contact",
        "Unaltered joint walls at residual frictional angle of 27 degrees Rock wall contact",
        "Unaltered joint walls at residual frictional angle of 28 degrees Rock wall contact",
        "Unaltered joint walls at residual frictional angle of 29 degrees Rock wall contact",
        "Unaltered joint walls at residual frictional angle of 30 degrees Rock wall contact",
        "Unaltered joint walls at residual frictional angle of 31 degrees Rock wall contact",
        "Unaltered joint walls at residual frictional angle of 32 degrees Rock wall contact",
        "Unaltered joint walls at residual frictional angle of 33 degrees Rock wall contact",
        "Unaltered joint walls at residual frictional angle of 34 degrees Rock wall contact",
        "Unaltered joint walls at residual frictional angle of 55 degrees Rock wall contact",
        "surface staining only at residual frictional angle of 25 degrees Rock wall contact",
        "surface staining only at residual frictional angle of 26 degrees Rock wall contact",
        "surface staining only at residual frictional angle of 27 degrees Rock wall contact",
        "surface staining only at residual frictional angle of 28 degrees Rock wall contact",
        "surface staining only at residual frictional angle of 29 degrees Rock wall contact",
        "surface staining only at residual frictional angle of 30 degrees Rock wall contact",
        "surface staining only at residual frictional angle of 31 degrees Rock wall contact",
        "surface staining only at residual frictional angle of 32 degrees Rock wall contact",
        "surface staining only at residual frictional angle of 33 degrees Rock wall contact",
        "surface staining only at residual frictional angle of 34 degrees Rock wall contact",
        "surface staining only at residual frictional angle of 35 degrees Rock wall contact",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks Rock wall contact",
        "SLightly altered joint walls disintegrated rocks Rock wall contact",
        "SLightly altered joint walls non softening mineral coatings Rock wall contact",
        "SLightly altered joint sandy particles Rock wall contact",
        "SLightly altered joint walls clay free Rock wall contact",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks at residual frictional angle of 25 degrees Rock wall contact",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks at residual frictional angle of 26 degrees Rock wall contact",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks at residual frictional angle of 27 degrees Rock wall contact",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks at residual frictional angle of 28 degrees Rock wall contact",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks at residual frictional angle of 29 degrees Rock wall contact",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks at residual frictional angle of 30 degrees Rock wall contact",
        "SLightly altered joint walls disintegrated rocks at residual frictional angle of 25 degrees Rock wall contact",
        "SLightly altered joint walls disintegrated rocks at residual frictional angle of 26 degrees Rock wall contact",
        "SLightly altered joint walls disintegrated rocks at residual frictional angle of 27 degrees Rock wall contact",
        "SLightly altered joint walls disintegrated rocks at residual frictional angle of 28 degrees Rock wall contact",
        "SLightly altered joint walls disintegrated rocks at residual frictional angle of 29 degrees Rock wall contact",
        "SLightly altered joint walls disintegrated rocks at residual frictional angle of 30 degrees Rock wall contact",
        "SLightly altered joint walls non softening mineral coatings at residual frictional angle of 25 degrees Rock wall contact",
        "SLightly altered joint walls non softening mineral coatings at residual frictional angle of 26 degrees Rock wall contact",
        "SLightly altered joint walls non softening mineral coatings at residual frictional angle of 27 degrees Rock wall contact",
        "SLightly altered joint walls non softening mineral coatings at residual frictional angle of 28 degrees Rock wall contact",
        "SLightly altered joint walls non softening mineral coatings at residual frictional angle of 29 degrees Rock wall contact",
        "SLightly altered joint walls non softening mineral coatings at residual frictional angle of 30 degrees Rock wall contact",
        "SLightly altered joint sandy particles at residual frictional angle of 25 degrees Rock wall contact",
        "SLightly altered joint sandy particles at residual frictional angle of 26 degrees Rock wall contact",
        "SLightly altered joint sandy particles at residual frictional angle of 27 degrees Rock wall contact",
        "SLightly altered joint sandy particles at residual frictional angle of 28 degrees Rock wall contact",
        "SLightly altered joint sandy particles at residual frictional angle of 29 degrees Rock wall contact",
        "SLightly altered joint sandy particles at residual frictional angle of 30 degrees Rock wall contact",
        "SLightly altered joint walls clay free at residual frictional angle of 25 degrees Rock wall contact",
        "SLightly altered joint walls clay free at residual frictional angle of 26 degrees Rock wall contact",
        "SLightly altered joint walls clay free at residual frictional angle of 27 degrees Rock wall contact",
        "SLightly altered joint walls clay free at residual frictional angle of 28 degrees Rock wall contact",
        "SLightly altered joint walls clay free at residual frictional angle of 29 degrees Rock wall contact",
        "SLightly altered joint walls clay free at residual frictional angle of 30 degrees Rock wall contact",
        "Silty or sandy clay coatings small clay fractions non softening Rock wall contact",
        "Silty small clay fractions non softening Rock wall contact",
        "Silty non softening Rock wall contact",
        "Sandy clay coatings non softening Rock wall contact",
        "Sandy clay coatings with small clay fractions Rock wall contact",
        "Silty or sandy clay coatings small clay fractions non softening at residual frictional angle of 20 degrees Rock wall contact",
        "Silty or sandy clay coatings small clay fractions non softening at residual frictional angle of 21 degrees Rock wall contact",
        "Silty or sandy clay coatings small clay fractions non softening at residual frictional angle of 22 degrees Rock wall contact",
        "Silty or sandy clay coatings small clay fractions non softening at residual frictional angle of 23 degrees Rock wall contact",
        "Silty or sandy clay coatings small clay fractions non softening at residual frictional angle of 24 degrees Rock wall contact",
        "Silty or sandy clay coatings small clay fractions non softening at residual frictional angle of 25 degrees Rock wall contact",
        "Silty small clay fractions non softening at residual frictional angle of 20 degrees Rock wall contact",
        "Silty small clay fractions non softening at residual frictional angle of 21 degrees Rock wall contact",
        "Silty small clay fractions non softening at residual frictional angle of 22 degrees Rock wall contact",
        "Silty small clay fractions non softening at residual frictional angle of 23 degrees Rock wall contact",
        "Silty small clay fractions non softening at residual frictional angle of 24 degrees Rock wall contact",
        "Silty small clay fractions non softening at residual frictional angle of 25 degrees Rock wall contact",
        "Silty non softening at residual frictional angle of 20 degrees Rock wall contact",
        "Silty non softening at residual frictional angle of 21 degrees Rock wall contact",
        "Silty non softening at residual frictional angle of 22 degrees Rock wall contact",
        "Silty non softening at residual frictional angle of 23 degrees Rock wall contact",
        "Silty non softening at residual frictional angle of 24 degrees Rock wall contact",
        "Silty non softening at residual frictional angle of 25 degrees Rock wall contact",
        "Sandy clay coatings non softening at residual frictional angle of 20 degrees Rock wall contact",
        "Sandy clay coatings non softening at residual frictional angle of 21 degrees Rock wall contact",
        "Sandy clay coatings non softening at residual frictional angle of 22 degrees Rock wall contact",
        "Sandy clay coatings non softening at residual frictional angle of 23 degrees Rock wall contact",
        "Sandy clay coatings non softening at residual frictional angle of 24 degrees Rock wall contact",
        "Sandy clay coatings non softening at residual frictional angle of 25 degrees Rock wall contact",
        "Sandy clay coatings with small clay fractions at residual frictional angle of 20 degrees Rock wall contact",
        "Sandy clay coatings with small clay fractions at residual frictional angle of 21 degrees Rock wall contact",
        "Sandy clay coatings with small clay fractions at residual frictional angle of 22 degrees Rock wall contact",
        "Sandy clay coatings with small clay fractions at residual frictional angle of 23 degrees Rock wall contact",
        "Sandy clay coatings with small clay fractions at residual frictional angle of 24 degrees Rock wall contact",
        "Sandy clay coatings with small clay fractions at residual frictional angle of 25 degrees Rock wall contact",
        "Softening or low friction coatings that it kaolinite mica Also chlorite talc gypsum and graphite and small quantities of swelling clays discontinous quotiing between 1 to 2 mm or less Rock wall contact",
        "Softening or low friction coatings that it kaolinite mica Also chlorite talc gypsum and graphite and small quantities of swelling clays discontinous quotiing between 1 to 2 mm or less at a residual frictional angle of 8 degrees Rock wall contact",
        "Softening or low friction coatings that it kaolinite mica Also chlorite talc gypsum and graphite and small quantities of swelling clays discontinous quotiing between 1 to 2 mm or less at a residual frictional angle of 9 degrees Rock wall contact",
        "Softening or low friction coatings that it kaolinite mica Also chlorite talc gypsum and graphite and small quantities of swelling clays discontinous quotiing between 1 to 2 mm or less at a residual frictional angle of 10 degrees Rock wall contact",
        "Softening or low friction coatings that it kaolinite mica Also chlorite talc gypsum and graphite and small quantities of swelling clays discontinous quotiing between 1 to 2 mm or less at a residual frictional angle of 11 degrees Rock wall contact",
        "Softening or low friction coatings that it kaolinite mica Also chlorite talc gypsum and graphite and small quantities of swelling clays discontinous quotiing between 1 to 2 mm or less at a residual frictional angle of 12 degrees Rock wall contact",
        "Softening or low friction coatings that it kaolinite mica Also chlorite talc gypsum and graphite and small quantities of swelling clays discontinous quotiing between 1 to 2 mm or less at a residual frictional angle of 13 degrees Rock wall contact",
        "Softening or low friction coatings that it kaolinite mica Also chlorite talc gypsum and graphite and small quantities of swelling clays discontinous quotiing between 1 to 2 mm or less at a residual frictional angle of 14 degrees Rock wall contact",
        "Softening or low friction coatings that it kaolinite mica Also chlorite talc gypsum and graphite and small quantities of swelling clays discontinous quotiing between 1 to 2 mm or less at a residual frictional angle of 15 degrees Rock wall contact",
        "Softening or low friction coatings that it kaolinite mica Also chlorite talc gypsum and graphite and small quantities of swelling clays discontinous quotiing between 1 to 2 mm or less at a residual frictional angle of 16 degrees Rock wall contact",
        "softening clay mineral coatings that is kaolinite and small quantities of clay Rock wall contact",
        "softening clay mineral coatings that is mica and small quantities of clay Rock wall contact",
        "softening clay mineral coatings that is chlorite and small quantities of clay Rock wall contact",
        "softening clay mineral coatings that is talc and small quantities of clay Rock wall contact",
        "softening clay mineral coatings that is gypsum and small quantities of clay Rock wall contact",
        "softening clay mineral coatings that is graphite and small quantities of clay Rock wall contact",
        "softening clay mineral coatings that is kaolinite and small quantities of clay at a residual frictional angle of 8 degrees Rock wall contact",
        "softening clay mineral coatings that is kaolinite and small quantities of clay at a residual frictional angle of 9 degrees Rock wall contact",
        "softening clay mineral coatings that is kaolinite and small quantities of clay at a residual frictional angle of 10 degrees Rock wall contact",
        "softening clay mineral coatings that is kaolinite and small quantities of clay at a residual frictional angle of 11 degrees Rock wall contact",
        "softening clay mineral coatings that is kaolinite and small quantities of clay at a residual frictional angle of 12 degrees Rock wall contact",
        "softening clay mineral coatings that is kaolinite and small quantities of clay at a residual frictional angle of 13 degrees Rock wall contact",
        "softening clay mineral coatings that is kaolinite and small quantities of clay at a residual frictional angle of 14 degrees Rock wall contact",
        "softening clay mineral coatings that is kaolinite and small quantities of clay at a residual frictional angle of 15 degrees Rock wall contact",
        "softening clay mineral coatings that is kaolinite and small quantities of clay at a residual frictional angle of 16 degrees Rock wall contact",
        "softening clay mineral coatings that is mica and small quantities of clay at a residual frictional angle of 8 degrees Rock wall contact",
        "softening clay mineral coatings that is mica and small quantities of clay at a residual frictional angle of 9 degrees Rock wall contact",
        "softening clay mineral coatings that is mica and small quantities of clay at a residual frictional angle of 10 degrees Rock wall contact",
        "softening clay mineral coatings that is mica and small quantities of clay at a residual frictional angle of 11 degrees Rock wall contact",
        "softening clay mineral coatings that is mica and small quantities of clay at a residual frictional angle of 12 degrees Rock wall contact",
        "softening clay mineral coatings that is mica and small quantities of clay at a residual frictional angle of 13 degrees Rock wall contact",
        "softening clay mineral coatings that is mica and small quantities of clay at a residual frictional angle of 14 degrees Rock wall contact",
        "softening clay mineral coatings that is mica and small quantities of clay at a residual frictional angle of 15 degrees Rock wall contact",
        "softening clay mineral coatings that is mica and small quantities of clay at a residual frictional angle of 16 degrees Rock wall contact",
        "softening clay mineral coatings that is chlorite and small quantities of clay at a residual frictional angle of 8 degrees Rock wall contact",
        "softening clay mineral coatings that is chlorite and small quantities of clay at a residual frictional angle of 9 degrees Rock wall contact",
        "softening clay mineral coatings that is chlorite and small quantities of clay at a residual frictional angle of 10 degrees Rock wall contact",
        "softening clay mineral coatings that is chlorite and small quantities of clay at a residual frictional angle of 11 degrees Rock wall contact",
        "softening clay mineral coatings that is chlorite and small quantities of clay at a residual frictional angle of 12 degrees Rock wall contact",
        "softening clay mineral coatings that is chlorite and small quantities of clay at a residual frictional angle of 13 degrees Rock wall contact",
        "softening clay mineral coatings that is chlorite and small quantities of clay at a residual frictional angle of 14 degrees Rock wall contact",
        "softening clay mineral coatings that is chlorite and small quantities of clay at a residual frictional angle of 15 degrees Rock wall contact",
        "softening clay mineral coatings that is chlorite and small quantities of clay at a residual frictional angle of 16 degrees Rock wall contact",
        "softening clay mineral coatings that is talc and small quantities of clay at a residual frictional angle of 8 degrees Rock wall contact",
        "softening clay mineral coatings that is talc and small quantities of clay at a residual frictional angle of 9 degrees Rock wall contact",
        "softening clay mineral coatings that is talc and small quantities of clay at a residual frictional angle of 10 degrees Rock wall contact",
        "softening clay mineral coatings that is talc and small quantities of clay at a residual frictional angle of 11 degreesRock wall contact",
        "softening clay mineral coatings that is talc and small quantities of clay at a residual frictional angle of 12 degrees Rock wall contact",
        "softening clay mineral coatings that is talc and small quantities of clay at a residual frictional angle of 13 degrees Rock wall contact",
        "softening clay mineral coatings that is talc and small quantities of clay at a residual frictional angle of 14 degrees Rock wall contact",
        "softening clay mineral coatings that is talc and small quantities of clay at a residual frictional angle of 15 degrees Rock wall contact",
        "softening clay mineral coatings that is talc and small quantities of clay at a residual frictional angle of 16 degrees Rock wall contact",
        "softening clay mineral coatings that is gypsum and small quantities of clay at a residual frictional angle of 8 degrees Rock wall contact",
        "softening clay mineral coatings that is gypsum and small quantities of clay at a residual frictional angle of 9 degrees Rock wall contact",
        "softening clay mineral coatings that is gypsum and small quantities of clay at a residual frictional angle of 10 degrees Rock wall contact",
        "softening clay mineral coatings that is gypsum and small quantities of clay at a residual frictional angle of 11 degrees Rock wall contact",
        "softening clay mineral coatings that is gypsum and small quantities of clay at a residual frictional angle of 12 degrees Rock wall contact",
        "softening clay mineral coatings that is gypsum and small quantities of clay at a residual frictional angle of 13 degrees Rock wall contact",
        "softening clay mineral coatings that is gypsum and small quantities of clay at a residual frictional angle of 14 degrees Rock wall contact",
        "softening clay mineral coatings that is gypsum and small quantities of clay at a residual frictional angle of 15 degrees Rock wall contact",
        "softening clay mineral coatings that is gypsum and small quantities of clay at a residual frictional angle of 16 degrees Rock wall contact",
        "softening clay mineral coatings that is graphite and small quantities of clay at a residual frictional angle of 8 degrees Rock wall contact",
        "softening clay mineral coatings that is graphite and small quantities of clay at a residual frictional angle of 9 degrees Rock wall contact",
        "softening clay mineral coatings that is graphite and small quantities of clay at a residual frictional angle of 10 degrees Rock wall contact",
        "softening clay mineral coatings that is graphite and small quantities of clay at a residual frictional angle of 11 degrees Rock wall contact",
        "softening clay mineral coatings that is graphite and small quantities of clay at a residual frictional angle of 12 degrees Rock wall contact",
        "softening clay mineral coatings that is graphite and small quantities of clay at a residual frictional angle of 13 degrees Rock wall contact",
        "softening clay mineral coatings that is graphite and small quantities of clay at a residual frictional angle of 14 degrees Rock wall contact",
        "softening clay mineral coatings that is graphite and small quantities of clay at a residual frictional angle of 15 degrees Rock wall contact",
        "softening clay mineral coatings that is graphite and small quantities of clay at a residual frictional angle of 16 degrees Rock wall contact",
        "Sandy particles clay free disintegrated rock rock wall contact before 10cm shear rock wall contact before 10cm shear at a residual frictional angle of 25 degrees",
        "Sandy particles clay free disintegrated rock rock wall contact before 10cm shear rock wall contact before 10cm shear at a residual frictional angle of 26 degrees",
        "Sandy particles clay free disintegrated rock rock wall contact before 10cm shear rock wall contact before 10cm shear at a residual frictional angle of 27 degrees",
        "Sandy particles clay free disintegrated rock rock wall contact before 10cm shear rock wall contact before 10cm shear at a residual frictional angle of 28 degrees",
        "Sandy particles clay free disintegrated rock rock wall contact before 10cm shear rock wall contact before 10cm shear at a residual frictional angle of 29 degrees",
        "Sandy particles clay free disintegrated rock rock wall contact before 10cm shear rock wall contact before 10cm shear at a residual frictional angle of 30 degrees",
        "Strongle over consolidated non softening clay mineral filings rock wall contact before 10cm shear at a residual frictional angle of 16 degrees",
        "Strongle over consolidated non softening clay mineral filings rock wall contact before 10cm shear at a residual frictional angle of 17 degrees",
        "Strongle over consolidated non softening clay mineral filings rock wall contact before 10cm shear at a residual frictional angle of 18 degrees",
        "Strongle over consolidated non softening clay mineral filings rock wall contact before 10cm shear at a residual frictional angle of 19 degrees",
        "Strongle over consolidated non softening clay mineral filings rock wall contact before 10cm shear at a residual frictional angle of 20 degrees",
        "Strongle over consolidated non softening clay mineral filings rock wall contact before 10cm shear at a residual frictional angle of 21 degrees",
        "Strongle over consolidated non softening clay mineral filings rock wall contact before 10cm shear at a residual frictional angle of 22 degrees",
        "Strongle over consolidated non softening clay mineral filings rock wall contact before 10cm shear at a residual frictional angle of 23 degrees",
        "Strongle over consolidated non softening clay mineral filings rock wall contact before 10cm shear at a residual frictional angle of 24 degrees",
        "Medium or low over consolidated softening clay mineral filings rock wall contact before 10cm shear at a residual frictional angle of 12 degrees",
        "Medium or low over consolidated softening clay mineral filings rock wall contact before 10cm shear at a residual frictional angle of 13 degrees",
    ]
    # Create a LabelEncoder instance
    labelEncoder = LabelEncoder()

    # Fit and transform the categorical value using LabelEncoder
    encoded_Ja = labelEncoder.fit_transform(Ja_Description)

    for i in range(0, len(Ja_Description)):
        if str(data['Ja_Description']) in str(Ja_Description[i]):
            encoded_val = encoded_Ja[i]
            # Reshape features and make prediction using the loaded model
            features = np.array([encoded_val])
            prediction = Ja_model.predict(features.reshape(-1, 1))

            return jsonify({'prediction': prediction.tolist()})

    return jsonify({'prediction': ["Error"]})

    # ends here

@app.route('/api/Ja_model_save', methods=['POST'])
def Ja_Pred_save():
    if request.method == 'POST':
        data = request.get_json() 
        

        Ja_PredictedValue = data['Ja_PredictedValue']
        Ja_description = data['Ja_description']

        # Connect to the SQLite database
        conn = sqlite3.connect('capstonedb.db')
        cursor = conn.cursor()

        # Update data in the database for the row with the maximum MainID
        cursor.execute("UPDATE MainDataTable SET Ja_description=?, Ja_PredictedValue=? WHERE MainID=(SELECT MAX(MainID) FROM MainDataTable)", (Ja_description, Ja_PredictedValue,))

        # Commit the transaction and close the connection
        conn.commit()
        conn.close()

        return 'Data updated successfully'


@app.route('/api/get_Ja_model', methods=['GET'])
def Get_Ja():
    conn = sqlite3.connect('capstonedb.db')
    cursor = conn.cursor()

    cursor.execute('SELECT Ja_description, Ja_PredictedValue FROM MainDataTable WHERE Ja_description IS NOT NULL and Ja_PredictedValue IS NOT NULL ORDER BY MainID DESC LIMIT 5')
    rows = cursor.fetchall()

    conn.close()

    # Define the column names
    column_names = ['Ja_description', 'Ja_PredictedValue']

    # Convert the fetched rows to a list of dictionaries
    data = [dict(zip(column_names, row)) for row in rows]

    # Return the data as JSON
    return jsonify({'Ja_historical_data': data})



# 6. Jw Model
with open('models/update/RFC_Jw.pkl','rb') as f:
    Jw_model = pickle.load(f)


@app.route('/api/Jw_model', methods=['POST'])
def Jw_Pred():
    data = request.get_json()  # Assuming you are sending JSON data from the frontend
    Jw_Description = [
        "Dry excavation or minor inflow 5 decays per minute locally with head water less than 10m",
        "Medium inflow occasionally outwash of joints or fissues filings with head water between 10 to 25m",
        "large inflow in competent ground with unfilled joints or fissues",
        "large inflow with considerable outwash of joints or fissues filings",
        "exceptionally high inflow upon excavation decaying with time",
        "exceptionally high inflow continuing without noticeable decay",
        "large inflow with considerable outwash of joints or fissues filings with installed drainage",
        "exceptionally high inflow upon excavation decaying with time with installed drainage",
        "exceptionally high inflow continuing without noticeable decay with installed drainage",
        "Dry excavation or minor inflow that is less than 5litre per meter locally",
        "Medium inflow or pressure occasionally outwash of joints filings",
        "Medium inflow or pressure occasionally outwash of joints filings approximate water pressure of 1 pascals",
        "Medium inflow or pressure occasionally outwash of joints filings approximate water pressure of 1.1 pascals",
        "Medium inflow or pressure occasionally outwash of joints filings approximate water pressure of 1.2 pascals",
        "Medium inflow or pressure occasionally outwash of joints filings approximate water pressure of 1.3 pascals",
        "Medium inflow or pressure occasionally outwash of joints filings approximate water pressure of 1.4 pascals",
        "Medium inflow or pressure occasionally outwash of joints filings approximate water pressure of 1.5 pascals",
        "Medium inflow or pressure occasionally outwash of joints filings approximate water pressure of 1.6 pascals",
        "Medium inflow or pressure occasionally outwash of joints filings approximate water pressure of 1.7 pascals",
        "Medium inflow or pressure occasionally outwash of joints filings approximate water pressure of 1.8 pascals",
        "Medium inflow or pressure occasionally outwash of joints filings approximate water pressure of 1.9 pascals",
        "Medium inflow or pressure occasionally outwash of joints filings approximate water pressure of 2 pascals",
        "Medium inflow or pressure occasionally outwash of joints filings approximate water pressure of 2.1 pascals",
        "Medium inflow or pressure occasionally outwash of joints filings approximate water pressure of 2.2 pascals",
        "Medium inflow or pressure occasionally outwash of joints filings approximate water pressure of 2.3 pascals",
        "Medium inflow or pressure occasionally outwash of joints filings approximate water pressure of 2.4 pascals",
        "Medium inflow or pressure occasionally outwash of joints filings approximate water pressure of 2.5 pascals",
        "Medium inflow occasionally outwash of joints filings approximate water pressure of 1 pascals",
        "Medium inflow occasionally outwash of joints filings approximate water pressure of 1.1 pascals",
        "Medium inflow occasionally outwash of joints filings approximate water pressure of 1.2 pascals",
        "Medium inflow occasionally outwash of joints filings approximate water pressure of 1.3 pascals",
        "Medium inflow occasionally outwash of joints filings approximate water pressure of 1.4 pascals",
        "Medium inflow occasionally outwash of joints filings approximate water pressure of 1.5 pascals",
        "Medium inflow occasionally outwash of joints filings approximate water pressure of 1.6 pascals",
        "Medium inflow occasionally outwash of joints filings approximate water pressure of 1.7 pascals",
        "Medium inflow occasionally outwash of joints filings approximate water pressure of 1.8 pascals",
        "Medium inflow occasionally outwash of joints filings approximate water pressure of 1.9 pascals",
        "Medium inflow occasionally outwash of joints filings approximate water pressure of 2 pascals",
        "Medium inflow occasionally outwash of joints filings approximate water pressure of 2.1 pascals",
        "Medium inflow occasionally outwash of joints filings approximate water pressure of 2.2 pascals",
        "Medium inflow occasionally outwash of joints filings approximate water pressure of 2.3  pascals",
        "Medium inflow occasionally outwash of joints filings approximate water pressure of 2.4  pascals",
        "Medium inflow occasionally outwash of joints filings approximate water pressure of 2.5  pascals",
        "Pressure occasionally outwash of joints filings approximate water pressure of 1 pascals",
        "Pressure occasionally outwash of joints filings approximate water pressure of 1.1 pascals",
        "Pressure occasionally outwash of joints filings approximate water pressure of 1.2 pascals",
        "Pressure occasionally outwash of joints filings approximate water pressure of 1.3 pascals",
        "Pressure occasionally outwash of joints filings approximate water pressure of 1.4 pascals",
        "Pressure occasionally outwash of joints filings approximate water pressure of 1.5 pascals",
        "Pressure occasionally outwash of joints filings approximate water pressure of 1.6 pascals",
        "Pressure occasionally outwash of joints filings approximate water pressure of 1.7 pascals ",
        "Pressure occasionally outwash of joints filings approximate water pressure of 1.8 pascals",
        "Pressure occasionally outwash of joints filings approximate water pressure of 1.9 pascals",
        "Pressure occasionally outwash of joints filings approximate water pressure of 2 pascals",
        "Pressure occasionally outwash of joints filings approximate water pressure of 2.1 pascals",
        "Pressure occasionally outwash of joints filings approximate water pressure of 2.2 pascals",
        "Pressure occasionally outwash of joints filings approximate water pressure of 2.3 pascals",
        "Pressure occasionally outwash of joints filings approximate water pressure of 2.4 pascals",
        "Pressure occasionally outwash of joints filings approximate water pressure of 2.5 pascals",
        "Large inflow or high pressure in competent rock wit unfilled joints",
        "Large inflow or high pressure in competent rock wit unfilled joints approximate water pressure of 2.5 pascals",
        "Large inflow in competent rock with unfilled joints",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 2.5 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 2.6 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 2.7 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 2.8 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 2.9 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 3 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 3.1 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 3.2 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 3.3 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 3.4 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 3.5 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 3.6 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 3.7 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 3.8 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 3.9 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 4 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 4.1 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 4.2 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 4.3 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 4.4 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 4.5 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 4.6 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 4.7 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 4.8 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 4.9 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 5 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 5.1 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 5.2 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 5.3 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 5.4 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 5.5 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 5.6 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 5.7 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 5.8 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 5.9 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 6 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 6.1 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 6.2 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 6.3 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 6.4 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 6.5 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 6.6 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 6.7 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 6.8 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 6.9 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 7 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 7.1 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 7.2 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 7.3 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 7.4 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 7.5 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 7.6 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 7.7 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 7.8 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 8 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 8.1 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 8.2 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 8.3 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 8.4 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 8.5 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 8.6 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 8.7 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 8.8 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 8.9 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 9 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 9.1 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 9.2 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 9.3 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 9.4 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 9.5 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 9.6 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 9.7 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 9.8 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 9.9 pascals",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 10 pascals",
        "High pressure in competent rock with unfilled joints",
        "High pressure in competent rock with unfilled joints approximate water pressure of 2.5 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 2.6 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 2.7 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 2.8 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 2.9 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 3 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 3.1 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 3.2 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 3.3 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 3.4 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 3.5 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 3.6 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 3.7 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 3.8 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 3.9 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 4 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 4.1 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 4.2 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 4.3 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 4.4 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 4.5 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 4.6 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 4.7 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 4.8 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 4.9 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 5 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 5.1 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 5.2 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 5.3 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 5.4 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 5.5 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 5.6 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 5.7 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 5.8 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 5.9 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 6 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 6.1 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 6.2 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 6.3 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 6.4 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 6.5 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 6.6 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 6.7 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 6.8 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 6.9 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 7 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 7.1 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 7.2 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 7.3 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 7.4 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 7.5 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 7.6 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 7.7 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 7.8 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 8 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 8.1 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 8.2 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 8.3 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 8.4 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 8.5 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 8.6 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 8.7 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 8.8 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 8.9 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 9 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 9.1 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 9.2 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 9.3 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 9.4 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 9.5 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 9.6 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 9.7 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 9.8 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 9.9 pascals",
        "High pressure in competent rock with unfilled joints approximate water pressure of 10 pascals",
        "Large inflow or high pressure",
        "Large inflow with approximate water pressure of 2.5 pascals",
        "Large inflow with approximate water pressure of 2.6 pascals",
        "Large inflow with approximate water pressure of 2.7 pascals",
        "Large inflow with approximate water pressure of 2.8 pascals",
        "Large inflow with approximate water pressure of 2.9 pascals",
        "Large inflow with approximate water pressure of 3 pascals",
        "Large inflow with approximate water pressure of 3.1 pascals",
        "Large inflow with approximate water pressure of 3.2 pascals",
        "Large inflow with approximate water pressure of 3.3 pascals",
        "Large inflow with approximate water pressure of 3.4 pascals",
        "Large inflow with approximate water pressure of 3.5 pascals",
        "Large inflow with approximate water pressure of 3.6 pascals",
        "Large inflow with approximate water pressure of 3.8 pascals",
        "Large inflow with approximate water pressure of 3.7 pascals",
        "Large inflow with approximate water pressure of 3.9 pascals",
        "Large inflow with approximate water pressure of 4 pascals",
        "Large inflow with approximate water pressure of 4.1 pascals",
        "Large inflow with approximate water pressure of 4.2 pascals",
        "Large inflow with approximate water pressure of 4.3 pascals",
        "Large inflow with approximate water pressure of 4.4 pascals",
        "Large inflow with approximate water pressure of 4.5 pascals",
        "Large inflow with approximate water pressure of 4.6 pascals",
        "Large inflow with approximate water pressure of 4.7 pascals",
        "Large inflow with approximate water pressure of 4.8 pascals",
        "Large inflow with approximate water pressure of 4.9 pascals",
        "Large inflow with approximate water pressure of 5 pascals",
        "Large inflow with approximate water pressure of 5.1 pascals",
        "Large inflow with approximate water pressure of 5.2 pascals",
        "Large inflow with approximate water pressure of 5.3 pascals",
        "Large inflow with approximate water pressure of 5.4 pascals",
        "Large inflow with approximate water pressure of 5.5 pascals",
        "Large inflow with approximate water pressure of 5.6 pascals",
        "Large inflow with approximate water pressure of 5.7 pascals",
        "Large inflow with approximate water pressure of 5.8 pascals",
        "Large inflow with approximate water pressure of 5.9 pascals",
        "Large inflow with approximate water pressure of 6 pascals",
        "Large inflow with approximate water pressure of 6.1 pascals",
        "Large inflow with approximate water pressure of 6.2 pascals",
        "Large inflow with approximate water pressure of 6.3 pascals",
        "Large inflow with approximate water pressure of 6.4 pascals",
        "Large inflow with approximate water pressure of 6.5 pascals",
        "Large inflow with approximate water pressure of 6.6 pascals",
        "Large inflow with approximate water pressure of 6.7 pascals",
        "Large inflow with approximate water pressure of 6.8 pascals",
        "Large inflow with approximate water pressure of 6.9 pascals",
        "Large inflow with approximate water pressure of 7 pascals",
        "Large inflow with approximate water pressure of 7.1 pascals",
        "Large inflow with approximate water pressure of 7.2 pascals",
        "Large inflow with approximate water pressure of 7.3 pascals",
        "Large inflow with approximate water pressure of 7.4 pascals",
        "Large inflow with approximate water pressure of 7.5 pascals",
        "Large inflow with approximate water pressure of 7.6 pascals",
        "Large inflow with approximate water pressure of 7.7 pascals",
        "Large inflow with approximate water pressure of 7.8 pascals",
        "Large inflow with approximate water pressure of 7.9 pascals",
        "Large inflow with approximate water pressure of 8 pascals",
        "Large inflow with approximate water pressure of 8.1 pascals",
        "Large inflow with approximate water pressure of 8.2 pascals",
        "Large inflow with approximate water pressure of 8.3 pascals",
        "Large inflow with approximate water pressure of 8.4 pascals",
        "Large inflow with approximate water pressure of 8.5 pascals",
        "Large inflow with approximate water pressure of 8.6 pascals",
        "Large inflow with approximate water pressure of 8.7 pascals",
        "Large inflow with approximate water pressure of 8.8 pascals",
        "Large inflow with approximate water pressure of 8.9 pascals",
        "Large inflow with approximate water pressure of 9 pascals",
        "Large inflow with approximate water pressure of 9.1 pascals",
        "Large inflow with approximate water pressure of 9.2 pascals",
        "Large inflow with approximate water pressure of 9.3 pascals",
        "Large inflow with approximate water pressure of 9.4 pascals",
        "Large inflow with approximate water pressure of 9.5 pascals",
        "Large inflow with approximate water pressure of 9.6 pascals",
        "Large inflow with approximate water pressure of 9.7 pascals",
        "Large inflow with approximate water pressure of 9.8 pascals",
        "Large inflow with approximate water pressure of 9.9 pascals",
        "Large inflow with approximate water pressure of 10 pascals",
        "Large pressure with approximate water pressure of 2.5 pascals",
        "Large pressure with approximate water pressure of 2.6 pascals",
        "Large pressure with approximate water pressure of 2.7 pascals",
        "Large pressure with approximate water pressure of 2.8 pascals",
        "Large pressure with approximate water pressure of 2.9 pascals",
        "Large pressure with approximate water pressure of 3 pascals",
        "Large pressure with approximate water pressure of 3.1 pascals",
        "Large pressure with approximate water pressure of 3.2 pascals",
        "Large pressure with approximate water pressure of 3.3 pascals",
        "Large pressure with approximate water pressure of 3.4 pascals",
        "Large pressure with approximate water pressure of 3.5 pascals",
        "Large pressure with approximate water pressure of 3.6 pascals",
        "Large pressure with approximate water pressure of 3.8 pascals",
        "Large pressure with approximate water pressure of 3.7 pascals",
        "Large pressure with approximate water pressure of 3.9 pascals",
        "Large pressure with approximate water pressure of 4 pascals",
        "Large pressure with approximate water pressure of 4.1 pascals",
        "Large pressure with approximate water pressure of 4.2 pascals",
        "Large pressure with approximate water pressure of 4.3 pascals",
        "Large pressure with approximate water pressure of 4.4 pascals",
        "Large pressure with approximate water pressure of 4.5 pascals",
        "Large pressure with approximate water pressure of 4.6 pascals",
        "Large pressure with approximate water pressure of 4.7 pascals",
        "Large pressure with approximate water pressure of 4.8 pascals",
        "Large pressure with approximate water pressure of 4.9 pascals",
        "Large pressure with approximate water pressure of 5 pascals",
        "Large pressure with approximate water pressure of 5.1 pascals",
        "Large pressure with approximate water pressure of 5.2 pascals",
        "Large pressure with approximate water pressure of 5.3 pascals",
        "Large pressure with approximate water pressure of 5.4 pascals",
        "Large pressure with approximate water pressure of 5.5 pascals",
        "Large pressure with approximate water pressure of 5.6 pascals",
        "Large pressure with approximate water pressure of 5.7 pascals",
        "Large pressure with approximate water pressure of 5.8 pascals",
        "Large pressure with approximate water pressure of 5.9 pascals",
        "Large pressure with approximate water pressure of 6 pascals",
        "Large pressure with approximate water pressure of 6.1 pascals",
        "Large pressure with approximate water pressure of 6.2 pascals",
        "Large pressure with approximate water pressure of 6.3 pascals",
        "Large pressure with approximate water pressure of 6.4 pascals",
        "Large pressure with approximate water pressure of 6.5 pascals",
        "Large pressure with approximate water pressure of 6.6 pascals",
        "Large pressure with approximate water pressure of 6.7 pascals",
        "Large pressure with approximate water pressure of 6.8 pascals",
        "Large pressure with approximate water pressure of 6.9 pascals",
        "Large pressure with approximate water pressure of 7 pascals",
        "Large pressure with approximate water pressure of 7.1 pascals",
        "Large pressure with approximate water pressure of 7.2 pascals",
        "Large pressure with approximate water pressure of 7.3 pascals",
        "Large pressure with approximate water pressure of 7.4 pascals",
        "Large pressure with approximate water pressure of 7.5 pascals",
        "Large pressure with approximate water pressure of 7.6 pascals",
        "Large pressure with approximate water pressure of 7.7 pascals",
        "Large pressure with approximate water pressure of 7.8 pascals",
        "Large pressure with approximate water pressure of 7.9 pascals",
        "Large pressure with approximate water pressure of 8 pascals",
        "Large pressure with approximate water pressure of 8.1 pascals",
        "Large pressure with approximate water pressure of 8.2 pascals",
        "Large pressure with approximate water pressure of 8.3 pascals",
        "Large pressure with approximate water pressure of 8.4 pascals",
        "Large pressure with approximate water pressure of 8.5 pascals",
        "Large pressure with approximate water pressure of 8.6 pascals",
        "Large pressure with approximate water pressure of 8.7 pascals",
        "Large pressure with approximate water pressure of 8.8 pascals",
        "Large pressure with approximate water pressure of 8.9 pascals",
        "Large pressure with approximate water pressure of 9 pascals",
        "Large pressure with approximate water pressure of 9.1 pascals",
        "Large pressure with approximate water pressure of 9.2 pascals",
        "Large pressure with approximate water pressure of 9.3 pascals",
        "Large pressure with approximate water pressure of 9.4 pascals",
        "Large pressure with approximate water pressure of 9.5 pascals",
        "Large pressure with approximate water pressure of 9.6 pascals",
        "Large pressure with approximate water pressure of 9.7 pascals",
        "Large pressure with approximate water pressure of 9.8 pascals",
        "Large pressure with approximate water pressure of 9.9 pascals",
        "Large pressure with approximate water pressure of 10 pascals",
        "Exceptionally high inflow with apprpximate water pressure greater than 10 pascals",
        "Exceptionally high pressure with apprpximate water pressure greater than 10 pascals",
    ]

    # Create a LabelEncoder instance
    labelEncoder = LabelEncoder()

    # Fit and transform the categorical value using LabelEncoder
    encoded_Jw = labelEncoder.fit_transform(Jw_Description)

    for i in range(0, len(Jw_Description)):
        if str(data['Jw_Description']) in str(Jw_Description[i]):
            encoded_val = encoded_Jw[i]
            # Reshape features and make prediction using the loaded model
            features = np.array([encoded_val])
            prediction = Jw_model.predict(features.reshape(-1, 1))

            return jsonify({'prediction': prediction.tolist()})

    return jsonify({'prediction': ["Error"]})

    # ends here

@app.route('/api/Jw_model_save', methods=['POST'])
def Jw_Pred_save():
    if request.method == 'POST':
        data = request.get_json()
        Jw_description = data['Jw_description']
        Jw_PredictedValue = data['Jw_PredictedValue']

        # Connect to the SQLite database
        conn = sqlite3.connect('capstonedb.db')
        cursor = conn.cursor()

        # Update data in the database for the row with the maximum MainID
        cursor.execute("UPDATE MainDataTable SET Jw_description=?, Jw_PredictedValue=? WHERE MainID=(SELECT MAX(MainID) FROM MainDataTable)", (Jw_description, Jw_PredictedValue,))

        # Commit the transaction and close the connection
        conn.commit()
        conn.close()

        return 'Data updated successfully'


@app.route('/api/get_Jw_model', methods=['GET'])
def Get_Jw():
    conn = sqlite3.connect('capstonedb.db')
    cursor = conn.cursor()

    cursor.execute('SELECT Jw_description, Jw_PredictedValue FROM MainDataTable WHERE Jw_description IS NOT NULL and Jw_PredictedValue IS NOT NULL ORDER BY MainID DESC LIMIT 10')
    rows = cursor.fetchall()

    conn.close()

    # Define the column names
    column_names = ['Jw_description', 'Jw_PredictedValue']

    # Convert the fetched rows to a list of dictionaries
    data = [dict(zip(column_names, row)) for row in rows]

    # Return the data as JSON
    return jsonify({'Jw_historical_data': data})



# 7. RQD
with open('models/update/RQD/Random_Forest_regresor_rqd.pkl', 'rb') as f:
    rqd_model = pickle.load(f)


@app.route('/api/rqd_model', methods=['POST'])
def RQD_Pred():
    if request.method == 'POST':
        data = request.get_json()
        # Extract the features from the data
        DepthFrom = float(data['DepthFrom'])
        DepthTo = float(data['DepthTo'])
        Truethickness = float(data['Truethickness'])
        Hardness = float(data['Hardness'])

        # Reshape features and make prediction using the loaded model
        features = np.array([[DepthFrom, DepthTo, Truethickness, Hardness]])
        prediction = rqd_model.predict(features)[0]

        return jsonify({'prediction': prediction.tolist()})

@app.route('/api/RQD_model_save', methods=['POST'])
def RQD_Pred_save():
    if request.method == 'POST':
        data = request.get_json()

        # Extract data from the JSON
        Depth_From = float(data['Depth_From'])
        Depth_To = float(data['Depth_To'])
        True_Thickness = float(data['True_Thickness'])
        Hardness = float(data['Hardness'])
        RQD_PredictedValue = float(data['RQD_PredictedValue'])
       

        # Connect to the SQLite database
        conn = sqlite3.connect('capstonedb.db')
        cursor = conn.cursor()

        # Insert data into the database
        cursor.execute("UPDATE MainDataTable SET Depth_From=?, Depth_To=?, True_Thickness=?, Hardness=?, RQD_PredictedValue=? WHERE MainID=(SELECT MAX(MainID) FROM MainDataTable)",
                       (Depth_From, Depth_To, True_Thickness, Hardness, RQD_PredictedValue))
        


        # Commit the transaction and close the connection
        conn.commit()
        conn.close()

        return 'Data successfully added to the database'
    

@app.route('/api/get_RQD_model', methods=['GET'])
def Get_RQD():
    conn = sqlite3.connect('capstonedb.db')
    cursor = conn.cursor()

    cursor.execute('SELECT MainID, Depth_From, Depth_To, True_Thickness, Hardness, RQD_PredictedValue FROM MainDataTable WHERE RQD_PredictedValue IS NOT NULL ORDER BY MainDataTable.MainID DESC LIMIT 5')
    rows = cursor.fetchall()

    conn.close()

    # Define the column names
    column_names = ['MainID', 'Depth_From', 'Depth_To', 'True_Thickness', 'Hardness', 'RQD_PredictedValue']

    # Convert the fetched rows to a list of dictionaries
    data = [dict(zip(column_names, row)) for row in rows]

    # Return the data as JSON
    return jsonify({'rqd_historical_data': data})



# 8. Q working both online and offline
with open('models/update/RFC_Q.pkl', 'rb') as f:
    q_model = pickle.load(f)


@app.route('/api/q_model', methods=['POST'])
def Q_Pred():
    if request.method == 'POST':
        data = request.get_json()
        # Extract the features from the data
        RQD = float(data['RQD'])
        Jn = float(data['Jn'])
        Jr = float(data['Jr'])
        Ja = float(data['Ja'])
        Jw = float(data['Jw'])
        SRF = float(data['SRF'])

        # Reshape features and make prediction using the loaded model
        features = np.array([[RQD, Jn, Jr, Ja, Jw, SRF]])
        prediction = q_model.predict(features)[0]

        return jsonify({'prediction': prediction.tolist()})

@app.route('/api/Q_model_save', methods=['POST'])
def Q_Pred_save():
    if request.method == 'POST':
        data = request.get_json()

        # Extract data from the JSON
        
        Jn_PredictedValue = float(data['Jn_PredictedValue'])
        Jr_PredictedValue = float(data['Jr_PredictedValue'])
        Ja_PredictedValue = float(data['Ja_PredictedValue'])
        Jw_PredictedValue = float(data['Jw_PredictedValue'])
        SRF_PredictedValue = float(data['SRF_PredictedValue'])
        RQD_PredictedValue = float(data['RQD_PredictedValue'])
        Q_Value_PredictedValue = float(data['Q_Value_PredictedValue'])
       

        # Connect to the SQLite database
        conn = sqlite3.connect('capstonedb.db')
        cursor = conn.cursor()

        # Insert data into the database
        cursor.execute("UPDATE MainDataTable SET Jn_PredictedValue=?, Jr_PredictedValue=?, Ja_PredictedValue=?, Jw_PredictedValue=?, SRF_PredictedValue=?, RQD_PredictedValue=?, Q_Value_PredictedValue=? WHERE MainID=(SELECT MAX(MainID) FROM MainDataTable)",
                       (Jn_PredictedValue, Jr_PredictedValue, Ja_PredictedValue, Jw_PredictedValue, SRF_PredictedValue, RQD_PredictedValue, Q_Value_PredictedValue))
        


        # Commit the transaction and close the connection
        conn.commit()
        conn.close()

        return 'Data successfully added to the database'
    

@app.route('/api/get_Q_model', methods=['GET'])
def Get_Q():
    conn = sqlite3.connect('capstonedb.db')
    cursor = conn.cursor()

    cursor.execute('SELECT MainID, SRF_PredictedValue, Jn_PredictedValue, Jr_PredictedValue, Ja_PredictedValue, Jw_PredictedValue, RQD_PredictedValue, Q_Value_PredictedValue FROM MainDataTable WHERE SRF_PredictedValue IS NOT NULL and Jn_PredictedValue IS NOT NULL and Jr_PredictedValue IS NOT NULL and Ja_PredictedValue IS NOT NULL and Jw_PredictedValue IS NOT NULL and RQD_PredictedValue IS NOT NULL and Q_Value_PredictedValue IS NOT NULL ORDER BY MainDataTable.MainID DESC LIMIT 5') 
                   
                       
                   
    rows = cursor.fetchall()

    conn.close()

    # Define the column names
    column_names = ['MainID', 'SRF_PredictedValue', 'Jn_PredictedValue', 'Jr_PredictedValue', 'Ja_PredictedValue', 'Jw_PredictedValue', 'RQD_PredictedValue', 'Q_Value_PredictedValue']

    # Convert the fetched rows to a list of dictionaries
    data = [dict(zip(column_names, row)) for row in rows]

    # Return the data as JSON
    return jsonify({'Q_historical_data': data})



# 9. RMR
with open('models/update/RFC_RMR.pkl', 'rb') as f:
    rmr_model = pickle.load(f)


@app.route('/api/rmr_model', methods=['POST'])
def RMR_Pred():
    if request.method == 'POST':
        data = request.get_json()
        # Extract the features from the data
        Q_Value = float(data['Q_Value'])

        # Reshape features and make prediction using the loaded model
        features = np.array([[Q_Value]])
        prediction = rmr_model.predict(features)[0]

        return jsonify({'prediction': prediction.tolist()})

@app.route('/api/RMR_model_save', methods=['POST'])
def RMR_Pred_save():
    if request.method == 'POST':
        data = request.get_json()

        # Extract data from the JSON
        RMR_PredictedValue = float(data['RMR_PredictedValue'])
       

        # Connect to the SQLite database
        conn = sqlite3.connect('capstonedb.db')
        cursor = conn.cursor()

        # Insert data into the database
        cursor.execute("UPDATE MainDataTable SET RMR_PredictedValue=? WHERE MainID=(SELECT MAX(MainID) FROM MainDataTable)", (RMR_PredictedValue,))
        


        # Commit the transaction and close the connection
        conn.commit()
        conn.close()

        return 'Data successfully added to the database'
    

@app.route('/api/get_RMR_model', methods=['GET'])
def Get_RMR():
    conn = sqlite3.connect('capstonedb.db')
    cursor = conn.cursor()

    cursor.execute('SELECT MainID, SRF_PredictedValue, Jn_PredictedValue, Jr_PredictedValue, Ja_PredictedValue, Jw_PredictedValue, RQD_PredictedValue, Q_Value_PredictedValue, RMR_PredictedValue FROM MainDataTable ORDER BY MainDataTable.MainID DESC LIMIT 5')
    rows = cursor.fetchall()

    conn.close()

    # Define the column names
    column_names = ['MainID', 'SRF_PredictedValue', 'Jn_PredictedValue', 'Jr_PredictedValue', 'Ja_PredictedValue', 'Jw_PredictedValue', 'RQD_PredictedValue', 'Q_Value_PredictedValue', 'RMR_PredictedValue']

    # Convert the fetched rows to a list of dictionaries
    data = [dict(zip(column_names, row)) for row in rows]

    # Return the data as JSON
    return jsonify({'RMR_historical_data': data})




 # 11. MUS


# 10. ESR
with open('models/update/RFC_ESR.pkl', 'rb') as f:
    model_esr = pickle.load(f)


@app.route('/api/esr_model', methods=['POST'])
def ESR_Pred():
    data = request.get_json()  # Assuming you are sending JSON data from the frontend
    ESR_Conditions = [
        "Temporary mine openings",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
        "Power stations major road and railway tunnels civil defence chambers portal intersections",
        "Underground nuclear power stations railway stations sports and public facilities factories",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers  access tunnels",
    ]
    # Create a LabelEncoder instance
    labelEncoder = LabelEncoder()

    # Fit and transform the categorical value using LabelEncoder
    encoded_esr = labelEncoder.fit_transform(ESR_Conditions)

    for i in range(0, len(ESR_Conditions)):
        if str(data['ESR_Conditions']) in str(ESR_Conditions[i]):
            encoded_val = encoded_esr[i]
            # Reshape features and make prediction using the loaded model
            features = np.array([encoded_val])
            prediction = model_esr.predict(features.reshape(-1, 1))

            return jsonify({'prediction': prediction.tolist()})

    return jsonify({'prediction': ["Error"]})

    # ends here

    # 11. MUS

@app.route('/api/ESR_model_save', methods=['POST'])
def ESR_Pred_save():
    if request.method == 'POST':
        data = request.get_json()

        # Extract data from the JSON
        
        ESR_Conditions = data['ESR_Conditions']
        ESR_PredictedValue = float(data['ESR_PredictedValue'])
       

        # Connect to the SQLite database
        conn = sqlite3.connect('capstonedb.db')
        cursor = conn.cursor()

        # Insert data into the database
        cursor.execute("UPDATE MainDataTable SET ESR_Conditions=?, ESR_PredictedValue=? WHERE MainID=(SELECT MAX(MainID) FROM MainDataTable)", (ESR_Conditions, ESR_PredictedValue,))
        


        # Commit the transaction and close the connection
        conn.commit()
        conn.close()

        return 'Data successfully added to the database'
    

@app.route('/api/get_ESR_model', methods=['GET'])
def Get_ESR():
    conn = sqlite3.connect('capstonedb.db')
    cursor = conn.cursor()

    cursor.execute('SELECT ESR_Conditions, ESR_PredictedValue FROM MainDataTable WHERE ESR_Conditions IS NOT NULL and ESR_PredictedValue IS NOT NULL ORDER BY MainDataTable.MainID DESC LIMIT 5')
    rows = cursor.fetchall()

    conn.close()

    # Define the column names
    column_names = ['ESR_Conditions', 'ESR_PredictedValue']

    # Convert the fetched rows to a list of dictionaries
    data = [dict(zip(column_names, row)) for row in rows]

    # Return the data as JSON
    return jsonify({'ESR_historical_data': data})




 # 11. MUS


# 11 MUS
with open('models/update/RFC_MUS.pkl', 'rb') as f:
    mus_model = pickle.load(f)


@app.route('/api/mus_model', methods=['POST'])
def MUS_Pred():
    if request.method == 'POST':
        data = request.get_json()
        # Extract the features from the data
        Q_Value = float(data['Q_Value'])
        ESR_VALUE = float(data['ESR_VALUE'])

        # Reshape features and make prediction using the loaded model
        features = np.array([[Q_Value, ESR_VALUE]])
        prediction = mus_model.predict(features)[0]

        return jsonify({'prediction': prediction.tolist()})

@app.route('/api/MUS_model_save', methods=['POST'])
def MUS_Pred_save():
    if request.method == 'POST':
        data = request.get_json()

        # Extract data from the JSON
        Maximum_unsupported_span = float(data['Maximum_unsupported_span'])
       

        # Connect to the SQLite database
        conn = sqlite3.connect('capstonedb.db')
        cursor = conn.cursor()

        # Insert data into the database
        cursor.execute("UPDATE MainDataTable SET Maximum_unsupported_span=? WHERE MainID=(SELECT MAX(MainID) FROM MainDataTable)", (Maximum_unsupported_span,))
        


        # Commit the transaction and close the connection
        conn.commit()
        conn.close()

        return 'Data successfully added to the database'
    

@app.route('/api/get_MUS_model', methods=['GET'])
def Get_MUS():
    conn = sqlite3.connect('capstonedb.db')
    cursor = conn.cursor()

    cursor.execute('SELECT MainID, SRF_PredictedValue, RMR_PredictedValue, RQD_PredictedValue,  Q_Value_PredictedValue, ESR_PredictedValue, Maximum_unsupported_span FROM MainDataTable ORDER BY MainDataTable.MainID DESC LIMIT 5')
    rows = cursor.fetchall()

    conn.close()

    # Define the column names
    column_names = ['MainID', 'SRF_PredictedValue', 'Q_Value_PredictedValue', 'RMR_PredictedValue', 'RQD_PredictedValue', 'ESR_PredictedValue', 'Maximum_unsupported_span']

    # Convert the fetched rows to a list of dictionaries
    data = [dict(zip(column_names, row)) for row in rows]

    # Return the data as JSON
    return jsonify({'MUS_historical_data': data})




 # 11. MUS



# Create SQLite capstone and table
conn = sqlite3.connect('capstonedb.db')
c = conn.cursor()
c.execute('''CREATE TABLE IF NOT EXISTS users
             (id INTEGER PRIMARY KEY AUTOINCREMENT,
              username TEXT UNIQUE,

              password TEXT)''')
conn.commit()
conn.close()


# Function to hash the password
def hash_password(password):
    return generate_password_hash(password)

# Function to verify hashed password


def verify_password(hashed_password, password):
    return check_password_hash(hashed_password, password)

# ... (existing code)


@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        # role = request.form['role']
        password = request.form['password']

        # Hash the password
        hashed_password = hash_password(password)

        conn = sqlite3.connect('capstonedb.db')
        c = conn.cursor()
        c.execute("INSERT INTO users (username,  password) VALUES (?, ?)",
                  (username, hashed_password))
        conn.commit()
        conn.close()

        return render_template('login.html')

    return render_template('register.html')


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        conn = sqlite3.connect('capstonedb.db')
        c = conn.cursor()
        c.execute("SELECT * FROM users WHERE username=?", (username,))
        user = c.fetchone()
        conn.close()

        if user and verify_password(user[2], password):
            session['username'] = username
            return redirect(url_for('home'))
        else:
            return 'Invalid credentials. Please try again.'

    return render_template('login.html')


@app.route('/')
def home():
    username = session.get('username')
    if username:
        return render_template('index.html')
    else:
        return render_template('login.html')


@app.route('/logout')
def logout():
    session.pop('username', None)
    return redirect(url_for('home'))


# retrieve historical data
@app.route('/api/historical_data/')
def historical_data():
    conn = sqlite3.connect('capstonedb.db')
    c = conn.cursor()
    c.execute("SELECT Jn_PredictedValue,Ja_PredictedValue,Jr_PredictedValue,Jw_PredictedValue,UCS_PredictedValue,RQD_PredictedValue,SRF_PredictedValue,Q_Value_PredictedValue, RMR_PredictedValue,ESR_PredictedValue,Maximum_unsupported_span FROM MainDataTable ORDER BY MainID DESC LIMIT 7")
    rows = c.fetchall()  # Fetch all rows from the cursor
    conn.close()

    
    # Define the column names
    column_names = ['Jn_PredictedValue','Ja_PredictedValue','Jr_PredictedValue','Jw_PredictedValue','UCS_PredictedValue', 'RQD_PredictedValue', 'SRF_PredictedValue', 'Q_Value_PredictedValue', 'RMR_PredictedValue', 'ESR_PredictedValue', 'Maximum_unsupported_span']

    # Convert the fetched rows to a list of dictionaries
    data = [dict(zip(column_names, row)) for row in rows]

    # Return the data as JSON
    return jsonify({'historical_data': data})


# historical_data()


if __name__ == '__main__':
    # db.create_all()
    app.run(debug=True)