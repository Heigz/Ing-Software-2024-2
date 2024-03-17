from flask import Blueprint, render_template, request, flash, redirect, url_for
from model.model_pelicula import *

from alchemyClasses.Pelicula import Pelicula


pelicula_blueprint = Blueprint("pelicula", __name__, url_prefix="/pelicula")


@pelicula_blueprint.route("/")  # localhost:5000/pelicula
def administra_usuarios():
    return render_template("CRUD_usuario.html", titulo="pelicula")


# /////////////////////////////////////////////////////////////////////////////////////////////////////// CREATE
@pelicula_blueprint.route("/create")
def seccion_create():
    return render_template("create_pelicula.html")


@pelicula_blueprint.route("/create", methods=["POST", "GET"])
def create_pelicula():
    if request.method == "GET":
        return render_template("create_pelicula.html")
    else:
        print("Form data received:", request.form)
        nombre = request.form["nombre"]
        genero = request.form["genero"]
        duracion = request.form["duracion"]
        inventario = request.form["inventario"]
        mensaje = crear_pelicula(nombre, genero, duracion, inventario)
        if mensaje == "Pelicula creada con éxito.":
            flash(mensaje)
            return redirect(url_for("pelicula.create_pelicula"))
        else:
            flash(mensaje)
            return redirect(url_for("pelicula.seccion_create"))


# ///////////////////////////////////////////////////////////////////////////////////////////////////////


# /////////////////////////////////////////////////////////////////////////////////////////////////////// READ
@pelicula_blueprint.route("/read")
def seccion_read():
    return render_template("read_usuario.html", titulo="pelicula")


@pelicula_blueprint.route("/read/all")
def mostrar_peliculas():
    return render_template(
        "read_pelicula_all.html", peliculas=muestra_todas_peliculas()
    )


@pelicula_blueprint.route("/read/id", methods=["POST", "GET"])
def read_pelicula_id():
    if request.method == "GET":
        return render_template("read_pelicula_id.html", titulo="pelicula")
    else:
        print("Form data received:", request.form)
        idPelicula = request.form["idPelicula"]
        if filtrar_por_id_pelicula_bool(idPelicula):
            return render_template(
                "show_p_id_info.html", pelicula=filtrar_por_id_pelicula(idPelicula)
            )
        else:
            flash("Pelicula no existente.")
            return redirect(url_for("pelicula.read_pelicula_id"))


# ///////////////////////////////////////////////////////////////////////////////////////////////////////


# /////////////////////////////////////////////////////////////////////////////////////////////////////// UPDATE
@pelicula_blueprint.route("/update/id", methods=["POST", "GET"])
def update_pelicula_id():
    if request.method == "GET":
        return render_template("update_p_id.html", name="Update", titulo="pelicula")
    else:
        print("Form data received:", request.form)
        idPelicula = request.form["idPelicula"]
        if filtrar_por_id_pelicula_bool(idPelicula):
            pelicula = filtrar_por_id_pelicula(idPelicula)
        else:
            pelicula = None
        if pelicula is not None:
            return redirect(
                url_for(
                    "pelicula.update_pelicula_id_change",
                    pelicula_id=idPelicula,
                    pelicula_nombre=pelicula.nombre,
                    pelicula_genero=pelicula.genero,
                    pelicula_duracion=pelicula.duracion,
                    pelicula_inventario=pelicula.inventario,
                )
            )
        else:
            flash("Pelicula no existente.")
            return redirect(url_for("pelicula.update_pelicula_id"))


@pelicula_blueprint.route("/update/id/change", methods=["POST", "GET"])
def update_pelicula_id_change():
    if request.method == "GET":
        pelicula_id = request.args.get("pelicula_id")
        pelicula_nombre = request.args.get("pelicula_nombre")
        pelicula_genero = request.args.get("pelicula_genero")
        pelicula_duracion = request.args.get("pelicula_duracion")
        pelicula_inventario = request.args.get("pelicula_inventario")
        return render_template(
            "change_p_id.html",
            pelicula_id=pelicula_id,
            pelicula_nombre=pelicula_nombre,
            pelicula_genero=pelicula_genero,
            pelicula_duracion=pelicula_duracion,
            pelicula_inventario=pelicula_inventario,
        )
    else:
        print("Form data received:", request.form)
        idPelicula = request.form["idPelicula"]
        nombre = request.form["nombre"]
        genero = request.form["genero"]
        duracion = request.form["duracion"]
        inventario = request.form["inventario"]
        mensaje = actualizar_pelicula(idPelicula, nombre, genero, duracion, inventario)
        if mensaje == "Pelicula creada con éxito.":
            flash(mensaje)
            return render_template("update_p_id_sin_boton.html", name="Update")
        else:
            flash(mensaje)
            return redirect(url_for("pelicula.update_pelicula_id"))


# ///////////////////////////////////////////////////////////////////////////////////////////////////////


# /////////////////////////////////////////////////////////////////////////////////////////////////////// DELETE


@pelicula_blueprint.route("/delete/id", methods=["POST", "GET"])
def delete_pelicula_id():
    if request.method == "GET":
        return render_template("delete_p_id.html")
    else:
        print("Form data received:", request.form)
        idPelicula = request.form["idPelicula"]
        if filtrar_por_id_pelicula_bool(idPelicula):
            borra_pelicula(idPelicula)
            flash("Pelicula eliminada con éxito.")
            return render_template("delete_p_id.html")
        else:
            flash("Pelicula no existente.")
            return redirect(url_for("pelicula.delete_pelicula_id"))


# ///////////////////////////////////////////////////////////////////////////////////////////////////////
