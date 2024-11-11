from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/cart')
def cart():
    return render_template('cart.html')

from flask import Flask, render_template, request, redirect, url_for, session, flash
import mysql.connector  # Replace with the correct module for your database (e.g., psycopg2 for PostgreSQL)
from werkzeug.security import check_password_hash  # If using hashed passwords

app = Flask(__name__)
app.secret_key = 'your_secret_key'  # Make sure this is securely generated

# Replace with your database connection function
def get_db_connection():
    conn = mysql.connector.connect(
        host='your-db-host',
        user='your-db-user',
        password='your-db-password',
        database='your-db-name'
    )
    return ConnectionError
if __name__ == '_main_':
    app.run(debug=True)