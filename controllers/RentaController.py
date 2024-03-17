from flask import Blueprint, render_template, request, flash, redirect, url_for
from model.model_renta import *

from alchemyClasses.Renta import Renta


renta_blueprint = Blueprint("renta", __name__, url_prefix="/renta")


@renta_blueprint.route("/")  # localhost:5000/renta
def administra_usuarios():
    return render_template("CRU_renta.html", titulo="renta")


# /////////////////////////////////////////////////////////////////////////////////////////////////////// CREATE
@renta_blueprint.route("/create")
def seccion_create():
    return render_template("create_renta.html")


@renta_blueprint.route("/create", methods=["POST", "GET"])
def create_renta():
    if request.method == "GET":
        return render_template("create_renta.html")
    else:
        print("Form data received:", request.form)
        idUsuario = request.form["idUsuario"]
        idPelicula = request.form["idPelicula"]
        fecha_renta = request.form["fecha_renta"]
        dias_de_renta = request.form["dias_de_renta"]
        estatus = request.form["estatus"]
        mensaje = crear_renta(
            idUsuario, idPelicula, fecha_renta, dias_de_renta, estatus
        )
        if mensaje == "Renta creada con éxito.":
            flash(mensaje)
            return redirect(url_for("renta.create_renta"))
        else:
            flash(mensaje)
            return redirect(url_for("renta.seccion_create"))


# ///////////////////////////////////////////////////////////////////////////////////////////////////////


# /////////////////////////////////////////////////////////////////////////////////////////////////////// READ


@renta_blueprint.route("/read")
def mostrar_peliculas():
    return render_template("read_renta_all.html", rentas=muestra_todas_rentas())


# ///////////////////////////////////////////////////////////////////////////////////////////////////////


# /////////////////////////////////////////////////////////////////////////////////////////////////////// UPDATE
@renta_blueprint.route("/update/id", methods=["POST", "GET"])
def update_renta_id():
    if request.method == "GET":
        return render_template("update_r_id.html", name="Update", titulo="renta")
    else:
        print("Form data received:", request.form)
        idRentar = request.form["idRentar"]
        if filtrar_por_id_renta_bool(idRentar):
            renta = filtrar_por_id_renta(idRentar)
        else:
            renta = None
        if renta is not None:
            return redirect(
                url_for(
                    "renta.update_renta_id_change",
                    renta_id=idRentar,
                    renta_estatus=renta.estatus,
                )
            )
        else:
            flash("renta no existente.")
            return redirect(url_for("renta.update_renta_id"))


@renta_blueprint.route("/update/id/change", methods=["POST", "GET"])
# //////////////////////////////////////////// Actualizar solo el valor de estatus
def update_renta_id_change():
    if request.method == "GET":
        renta_id = request.args.get("renta_id")
        renta_estatus = request.args.get("renta_estatus")
        return render_template(
            "change_r_id.html",
            name="Update",
            titulo="renta",
            renta_id=renta_id,
            renta_estatus=renta_estatus,
        )
    else:
        print("Form data received:", request.form)
        idRentar = request.form["idRentar"]
        estatus = request.form["estatus"]
        mensaje = actualizar_estatus_renta(idRentar, estatus)
        if mensaje == "Actualizacion realizada con exito":
            flash(mensaje)
            return render_template("update_r_id_sin_boton.html", titulo="renta")
        else:
            flash(mensaje)
            return redirect(url_for("renta.update_renta_id_change"))


# ///////////////////////////////////////////////////////////////////////////////////////////////////////
