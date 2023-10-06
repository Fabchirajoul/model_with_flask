import sqlite3
import pickle
import sys
import numpy as np
# from flask_sqlalchemy import SQLAlchemy
from flask import Flask, render_template, request, jsonify, redirect, url_for, session
from werkzeug.security import generate_password_hash, check_password_hash



import os

app = Flask(__name__)
app.secret_key = 'Group_1_Raj_the_leader'

conn = sqlite3.connect('capstonedb.db')
c = conn.cursor()

# UCS
with open('models/ucsvsr.pkl','rb') as f:
        ucsvsr_model = pickle.load(f)


# RQD
with open('models/rqd_GBR_rqd.pkl','rb') as f:
        RQD_model_GBR = pickle.load(f)


# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///capstonedb.db'
# db = SQLAlchemy(app)

# class UCSVirginStress(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     Density = db.Column(db.Float)
#     Depth = db.Column(db.Float)
#     UCS = db.Column(db.Float)
#     PredictedValue = db.Column(db.Float)


# @app.route('/api/ucs_model', methods=['POST'])
# def UCS_Pred():
#     if request.method == 'POST':
#         data = request.get_json()
#         Density = float(data['Density'])
#         Depth = float(data['Depth'])
#         UCS = float(data['UCS'])

#         features = np.array([[Density, Depth, UCS]])
#         prediction = ucsvsr_model.predict(features)[0]

#         db.create_all()

#         # Create a UCSRecord instance and add it to the database
#         record = UCSVirginStress(Density=Density, Depth=Depth, UCS=UCS, PredictedValue=prediction)
#         db.session.add(record)
#         db.session.commit()

#         return jsonify({'prediction': prediction.tolist()})


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

        # Save the input and prediction to the database
        # c.execute("INSERT INTO ucs_virgin_stress  VALUES (?, ?, ?, ?)", (Density, Depth, UCS, prediction))
        # conn.commit()

        return jsonify({'prediction': prediction.tolist()})
    


# RQD 
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
        prediction = RQD_model_GBR.predict(features)[0]

        # Save the input and prediction to the database
        # c.execute("INSERT INTO ucs_virgin_stress  VALUES (?, ?, ?, ?)", (DepthFrom, DepthTo, Truethickness, Hardness, prediction))
        # conn.commit()

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
        c.execute("INSERT INTO users (username,  password) VALUES (?, ?)", (username, hashed_password))
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
    results = [{"id": row[0], "column1": row[1], "column2": row[2], "column2": row[2],"column2": row[2]} for row in data]

    return jsonify({"RESULTS": results})

# historical_data()







if __name__ == '__main__':
    # db.create_all()
    app.run(debug=True)
