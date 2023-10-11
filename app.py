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
with open('models/KNR_UCSVirgin.pkl', 'rb') as f:
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


# 2. SRF
with open('models/DTR_srf.pkl', 'rb') as f:
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


# 7. RQD
with open('models/mlp_rqd.pkl', 'rb') as f:
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


# 8. Q working both online and offline
with open('models/KNR_q.pkl', 'rb') as f:
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


# 9. RMR
with open('models/rmr.pkl', 'rb') as f:
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


# 10. ESR
with open('models/RFR_ESR.pkl', 'rb') as f:
    model_esr = pickle.load(f)


@app.route('/api/esr_model', methods=['POST'])
def ESR_Pred():
        data = request.get_json()  # Assuming you are sending JSON data from the frontend
        ESR_Conditions = ["Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers  access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers  access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers  access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              "Underground nuclear power stations railway stations sports and public facilities factories",
                              "Temporary mine openings",
                              "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
                              "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
                              "Power stations major road and railway tunnels civil defence chambers portal intersections",
                              ]

        # Create a LabelEncoder instance
        labelEncoder = LabelEncoder()

        # Fit and transform the categorical value using LabelEncoder
        encoded_esr = labelEncoder.fit_transform(ESR_Conditions)

        print('Encoded Data: ', encoded_esr)

        print('Data Input', data)

        print(ESR_Conditions[2])

        for i in range(0, len(ESR_Conditions)-1):
            if str(data['ESR_Conditions']) in str(ESR_Conditions[i]):
                encoded_val = encoded_esr[i]
                       # Reshape features and make prediction using the loaded model
                features = np.array([encoded_val])
                prediction = model_esr.predict(features.reshape(-1, 1))

                return jsonify({'prediction': prediction.tolist()})

        return jsonify({'prediction': ["Error"]})   
    

    # ends here

    # 11. MUS




with open('models/ababoost_us.pkl', 'rb') as f:
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
    c.execute("SELECT Jn,Ja,Jr,Jw,UCS_Mpa,RQD_p,Q_Value,SRF,RMR,ESR_VALUE,Maximum_unsupported_span FROM dataset ORDER BY id DESC LIMIT 7")
    data = c.fetchall()  # Fetch all rows from the cursor
    conn.close()

    # Convert the data to a list of dictionaries for JSON serialization
    results = [{"id": row[0], "column1": row[1], "column2": row[2],
                "column2": row[2], "column2": row[2]} for row in data]

    return jsonify({"RESULTS": results})

# historical_data()


if __name__ == '__main__':
    # db.create_all()
    app.run(debug=True)
