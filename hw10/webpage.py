from flask import Flask, render_template
from decorations import *

app = Flask(__name__)

@function_time
@print_function
@app.route("/")
def home():
    return render_template("home.html")

@function_time
@print_function
@app.route("/mlb")
def mlb():
    mlb = {'favteam':"New York Yankees",
           'favplayer': "Derek Jeter"}
    return render_template("mlb.html", league = mlb)

@function_time
@print_function
@app.route("/nba")
def nba():
    nba = {'favteam':"New York Knicks",
           'favplayer': "Steve Nash"}
    return render_template("nba.html", league = nba)

@function_time
@print_function
@app.route("/epl")
def epl():
    epl = {'favteam':"Manchester City",
           'favplayer':"Sergio Aguero"}
    return render_template("epl.html", league = epl)


if __name__ == "__main__":
    app.debug = True
    app.run(host='127.0.0.1', port=8000)
