from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from controllers.UsuarioController import usuario_blueprint
from controllers.PeliculaController import pelicula_blueprint
from controllers.RentaController import renta_blueprint
from model.model_usuario import *
from model.model_pelicula import *
from alchemyClasses import db
from hashlib import sha256


app = Flask(__name__)


app.config["SQLALCHEMY_DATABASE_URI"] = (
    "mysql+pymysql://lab:Developer123!@localhost:3306/lab_ing_software"
)
app.config.from_mapping(SECRET_KEY="dev")
db.init_app(app)

app.register_blueprint(usuario_blueprint)
app.register_blueprint(pelicula_blueprint)
app.register_blueprint(renta_blueprint)


@app.route("/")
def home():
    return render_template("home.html")


if __name__ == "__main__":
    app.run()
