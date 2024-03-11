from flask import Blueprint, render_template, request
from model.model_usuario import *


usuario_blueprint = Blueprint("usuario", __name__, url_prefix="/usuario")


@usuario_blueprint.route("/")  # localhost:5000/usuario
def administra_usuarios():
    return render_template("CRUD_usuario.html")


# /////////////////////////////////////////////////////////////////////////////////////////////////////// CREATE
@usuario_blueprint.route("/create")
def seccion_create():
    return "Crear usuario"


# ///////////////////////////////////////////////////////////////////////////////////////////////////////


# /////////////////////////////////////////////////////////////////////////////////////////////////////// READ
@usuario_blueprint.route("/read")
def seccion_read():
    return "Mostrar todos los usuarios <br> Mostrar usuarios por id <br> "


@usuario_blueprint.route("/read/all")
def mostrar_usuarios():
    return muestra_todos_usuarios()


@usuario_blueprint.route("/read/id")
def seccion_read_id():
    return "Seleccionar id de usuario"


@usuario_blueprint.route("/read/id/<int:idUsuario>")
def mostrar_usuario_por_id(idUsuario):
    return filtrar_por_id_usuario(idUsuario)


# ///////////////////////////////////////////////////////////////////////////////////////////////////////


# /////////////////////////////////////////////////////////////////////////////////////////////////////// UPDATE
@usuario_blueprint.route("/update")
def seccion_update():
    return "Slectar id de usuario a actualizar"


@usuario_blueprint.route("/update/<int:idUsuario>")
def seleccionar_id_usuario_a_actualizar(idUsuario):
    return "update del id: " + str(idUsuario)


# ///////////////////////////////////////////////////////////////////////////////////////////////////////


# /////////////////////////////////////////////////////////////////////////////////////////////////////// DELETE
@usuario_blueprint.route("/delete")
def seccion_delete():
    return "Borrar usuario por id <br> Borrar todos los usuarios"


@usuario_blueprint.route("/delete/id")
def seccion_delete_id():
    return "Seleccionar id de usuario a borrar"


@usuario_blueprint.route("/delete/id/<int:idUsuario>")
def borrar_usuario_por_id(idUsuario):
    return "Borrando usuario con id " + str(idUsuario)


@usuario_blueprint.route("/delete/all")
def borrar_todos_los_usuarios():
    return "Borrando todos los usuarios"


# ///////////////////////////////////////////////////////////////////////////////////////////////////////
