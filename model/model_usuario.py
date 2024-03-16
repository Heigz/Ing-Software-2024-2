from alchemyClasses.Usuario import Usuario
from alchemyClasses import db
import re

# ///////////////////////////////////////////0) Crear un nuevo registro


def validar_datos(nombre, apPat, apMat, email):
    # Validar que el nombre solo contenga letras
    if not re.match("^[A-Za-z ]+$", nombre):
        return False

    # Validar que el apellido paterno solo contenga letras
    if not re.match("^[A-Za-z ]+$", apPat):
        return False

    # Validar que el apellido materno solo contenga letras
    if not re.match("^[A-Za-z ]+$", apMat):
        return False

    # Validar el formato del correo electrónico
    if "@" not in email or ".com" not in email:
        return False

    return True


def crear_usuario(nombre, apPat, apMat, password, email, superUser):

    if not validar_datos(nombre, apPat, apMat, email):
        return "Datos no válidos. Verifica solo contengan letras en el nombre legal."

    nuevo_usuario = Usuario(
        nombre=nombre,
        apPat=apPat,
        apMat=apMat,
        password=password,
        email=email,
        profilePicture=None,
        superUser=superUser,
    )
    try:
        db.session.add(nuevo_usuario)
        db.session.commit()

    except Exception as e:
        return "Error al crear el usuario."
    return "Usuario creado con éxito."


# /////////////////////////////////////////1)Ver los registros de una tabla
def muestra_todos_usuarios():

    return Usuario.query.all()


# ///////////////////////////////////////////2)Filtrar los registros por id
def filtrar_por_id_usuario(id):

    for usuario in Usuario.query.filter(Usuario.idUsuario == id):
        usuario_seleccionado = usuario
    return usuario_seleccionado


# ///////////////////////////////////////////2)existe registro por id
def filtrar_por_id_usuario_bool(id):
    usuario_seleccionado = Usuario.query.filter(Usuario.idUsuario == id).first()
    if usuario_seleccionado:
        return True
    else:
        return False


# ////////////////////////////////////////////3) Actualizar la columna nombre de un registro


def actualizar_nombre_usuario(id, nombre):
    usuario = Usuario.query.filter(Usuario.idUsuario == id).first()
    usuario.nombre = nombre
    db.session.commit()
    print("Actualizacion realizada con exito")


# ////////////////////////////////////////////3) Actualizar todos los campos de un registro
def actualizar_usuario(id, nombre, apPat, apMat, password, email, superUser):

    usuario = Usuario.query.filter(Usuario.idUsuario == id).first()
    usuario.nombre = nombre
    usuario.apPat = apPat
    usuario.apMat = apMat
    usuario.password = password
    usuario.email = email
    usuario.superUser = superUser

    if not validar_datos(nombre, apPat, apMat, email):
        print("Datos no válidos. Verifica solo contengan letras en el nombre legal.")
        return "Datos no válidos. Verifica solo contengan letras en el nombre legal."
    db.session.commit()
    return "Actualizacion realizada con exito"


# //////////////////////////////////////////4) Borrar registro por id o todos los registros
def borra_usuario(id):
    usuario = Usuario.query.filter(Usuario.idUsuario == id).first()
    if usuario:
        db.session.delete(usuario)
        db.session.commit()
        print(f"Usuario con el ID {id} ha sido eliminado.")
    else:
        print(f"No se encontró ningún usuario con el ID {id}.")


def borra_todos_usuarios():
    usuarios = Usuario.query.all()
    for usuario in usuarios:
        db.session.delete(usuario)
    db.session.commit()
    print("Todos los registros de usuarios han sido eliminados.")
