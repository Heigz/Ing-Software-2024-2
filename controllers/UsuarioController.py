from flask import Blueprint, render_template, request, flash, redirect, url_for
from model.model_usuario import *

from alchemyClasses.Usuario import Usuario


usuario_blueprint = Blueprint("usuario", __name__, url_prefix="/usuario")


@usuario_blueprint.route("/")  # localhost:5000/usuario
def administra_usuarios():
    return render_template("CRUD_usuario.html", titulo="usuario")


# /////////////////////////////////////////////////////////////////////////////////////////////////////// CREATE
@usuario_blueprint.route("/create")
def seccion_create():
    return render_template("create_usuario.html")


@usuario_blueprint.route("/create", methods=["POST", "GET"])
def create_usuario():
    if request.method == "GET":
        return render_template("create_usuario.html")
    else:
        print("Form data received:", request.form)
        nombre = request.form["nombre"]
        apPat = request.form["apPat"]
        apMat = request.form["apMat"]
        password = request.form["password"]
        email = request.form["email"]
        superUser = request.form["superUser"]
        mensaje = crear_usuario(nombre, apPat, apMat, password, email, superUser)
        if mensaje == "Usuario creado con éxito.":
            flash("Usuario creado con éxito.")
            return render_template("create_usuario_sin_boton.html")
        else:
            flash(mensaje)
            return redirect(url_for("usuario.seccion_create"))


# ///////////////////////////////////////////////////////////////////////////////////////////////////////


# /////////////////////////////////////////////////////////////////////////////////////////////////////// READ
@usuario_blueprint.route("/read")
def seccion_read():
    return render_template("read_usuario.html", titulo="usuario")


@usuario_blueprint.route("/read/all")
def mostrar_usuarios():
    return render_template("read_usuario_all.html", usuarios=muestra_todos_usuarios())


@usuario_blueprint.route("/read/id", methods=["POST", "GET"])
def read_usuario_id():
    if request.method == "GET":
        return render_template("read_usuario_id.html")
    else:
        print("Form data received:", request.form)
        idUsuario = request.form["idUsuario"]
        if filtrar_por_id_usuario_bool(idUsuario):
            return render_template(
                "show_u_id_info.html", usuario=filtrar_por_id_usuario(idUsuario)
            )
        else:
            flash("Usuario no existente.")
            return redirect(url_for("usuario.read_usuario_id"))


# ///////////////////////////////////////////////////////////////////////////////////////////////////////


# /////////////////////////////////////////////////////////////////////////////////////////////////////// UPDATE
@usuario_blueprint.route("/update/id", methods=["POST", "GET"])
def update_usuario_id():
    if request.method == "GET":
        return render_template("update_u_id.html", name="Update")
    else:
        print("Form data received:", request.form)
        idUsuario = request.form["idUsuario"]
        if filtrar_por_id_usuario_bool(idUsuario):
            usuario = filtrar_por_id_usuario(idUsuario)
        else:
            usuario = None
        if usuario is not None:
            return redirect(
                url_for(
                    "usuario.update_usuario_id_change",
                    usuario_id=idUsuario,
                    usuario_nombre=usuario.nombre,
                    usuario_apPat=usuario.apPat,
                    usuario_apMat=usuario.apMat,
                    usuario_password=usuario.password,
                    usuario_email=usuario.email,
                    usuario_superUser=usuario.superUser,
                )
            )
        else:
            flash("Usuario no existente.")
            return redirect(url_for("usuario.update_usuario_id"))


@usuario_blueprint.route("/update/id/change", methods=["POST", "GET"])
def update_usuario_id_change():
    if request.method == "GET":
        usuario_id = request.args.get("usuario_id")
        usuario_nombre = request.args.get("usuario_nombre")
        usuario_apPat = request.args.get("usuario_apPat")
        usuario_apMat = request.args.get("usuario_apMat")
        usuario_password = request.args.get("usuario_password")
        usuario_email = request.args.get("usuario_email")
        usuario_superUser = request.args.get("usuario_superUser")
        return render_template(
            "change_u_id.html",
            usuario_id=usuario_id,
            usuario_nombre=usuario_nombre,
            usuario_apPat=usuario_apPat,
            usuario_apMat=usuario_apMat,
            usuario_password=usuario_password,
            usuario_email=usuario_email,
            usuario_superUser=usuario_superUser,
        )
    else:
        print("Form data received:", request.form)
        idUsuario = request.form["idUsuario"]
        nombre = request.form["nombre"]
        apPat = request.form["apPat"]
        apMat = request.form["apMat"]
        password = request.form["password"]
        email = request.form["email"]
        superUser = request.form["superUser"]
        mensaje = actualizar_usuario(
            idUsuario, nombre, apPat, apMat, password, email, superUser
        )
        if mensaje == "Actualizacion realizada con exito":
            flash("Usuario actualizado con exito.")
            return render_template("update_u_id_sin_boton.html", name="Update")
        else:
            flash(mensaje)
            return redirect(url_for("usuario.update_usuario_id"))


# ///////////////////////////////////////////////////////////////////////////////////////////////////////


# /////////////////////////////////////////////////////////////////////////////////////////////////////// DELETE


@usuario_blueprint.route("/delete/id", methods=["POST", "GET"])
def delete_usuario_id():
    if request.method == "GET":
        return render_template("delete_u_id.html")
    else:
        print("Form data received:", request.form)
        idUsuario = request.form["idUsuario"]
        if filtrar_por_id_usuario_bool(idUsuario):
            borra_usuario(idUsuario)
            flash("Usuario eliminado con éxito.")
            return render_template("delete_u_id.html")
        else:
            flash("Usuario no existente.")
            return redirect(url_for("usuario.delete_usuario_id"))


# ///////////////////////////////////////////////////////////////////////////////////////////////////////
