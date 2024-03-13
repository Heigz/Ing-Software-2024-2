from alchemyClasses.Pelicula import Pelicula
from alchemyClasses import db


def crear_pelicula(nombre, genero, duracion, inventario):

    nueva_pelicula = Pelicula(
        nombre=nombre,
        genero=genero,
        duracion=duracion,
        inventario=inventario,
    )
    try:
        db.session.add(nueva_pelicula)
        db.session.commit()

    except Exception as e:
        print(e)
    return "Pelicula creada con éxito."


# /////////////////////////////////////////1)Ver los registros de una tabla
def muestra_todas_peliculas():
    return Pelicula.query.all()


# ///////////////////////////////////////////2)existe registro por id
def filtrar_por_id_pelicula_bool(id):
    pelicula_seleccionada = Pelicula.query.filter(Pelicula.idPelicula == id).first()
    if pelicula_seleccionada:
        return True
    else:
        return False


# ///////////////////////////////////////////2)Filtrar los registros por id
def filtrar_por_id_pelicula(id):
    for pelicula in Pelicula.query.filter(Pelicula.idPelicula == id):
        pelicula_seleccionada = pelicula
    return pelicula_seleccionada


# ////////////////////////////////////////////3) Actualizar todos los campos de un registro
def actualizar_pelicula(id, nombre, genero, duracion, inventario):
    pelicula = Pelicula.query.filter(Pelicula.idPelicula == id).first()
    pelicula.nombre = nombre
    pelicula.genero = genero
    pelicula.duracion = duracion
    pelicula.inventario = inventario
    db.session.commit()
    return "Actualizacion realizada con exito"


# ////////////////////////////////////////////3) Actualizar la columna nombre de un registro


def actualizar_nombre_pelicula(id, nombre):
    pelicula = Pelicula.query.filter(Pelicula.idPelicula == id).first()
    pelicula.nombre = nombre
    db.session.commit()
    print("Actualizacion realizada con exito")


# //////////////////////////////////////////4) Borrar registro por id o todos los registros
def borra_pelicula(id):
    pelicula = Pelicula.query.filter(Pelicula.idPelicula == id).first()
    if pelicula:
        db.session.delete(pelicula)
        db.session.commit()
        print(f"Pelicula con el ID {id} ha sido eliminado.")
    else:
        print(f"No se encontró ningúna pelicula con el ID {id}.")


def borra_todas_peliculas():
    peliculas = Pelicula.query.all()
    for pelicula in peliculas:
        db.session.delete(pelicula)
    db.session.commit()
    print("Todos los registros de peliculas han sido eliminadas.")
