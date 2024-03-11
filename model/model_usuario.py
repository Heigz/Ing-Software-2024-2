from alchemyClasses.Usuario import Usuario
from alchemyClasses import db


# ///////////////////////////////////////////0) Crear un nuevo registro
def crear_usuario(nombre, apPat, apMat, password, email, superUser=False):
    nuevo_usuario = Usuario(
        nombre=nombre,
        apPat=apPat,
        apMat=apMat,
        password=password,
        email=email,
        superUser=superUser,
    )
    db.session.add(nuevo_usuario)
    db.session.commit()
    print("Usuario creado con éxito.")
    return nuevo_usuario


# /////////////////////////////////////////1)Ver los registros de una tabla
def muestra_todos_usuarios():
    s = ""
    for usuario in Usuario.query.all():
        s += str(usuario) + "<br>"
    return s


# ///////////////////////////////////////////2)Filtrar los registros por id
def filtrar_por_id_usuario(id):
    usuario_seleccionado = ""
    for usuario in Usuario.query.filter(Usuario.idUsuario == id):
        # print(usuario)
        usuario_seleccionado = str(usuario)
    return usuario_seleccionado


# ////////////////////////////////////////////3) Actualizar la columna nombre de un registro


def actualizar_nombre_usuario(id, nombre):
    usuario = Usuario.query.filter(Usuario.idUsuario == id).first()
    usuario.nombre = nombre
    db.session.commit()
    print("Actualizacion realizada con exito")


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
