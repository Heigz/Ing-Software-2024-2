from alchemyClasses.Renta import Renta
from alchemyClasses import db


# ///////////////////////////////////////////0) Crear un nuevo registro
def crear_renta(idUsuario, idPelicula, fecha_renta, dias_de_renta, estatus):
    nueva_renta = Renta(
        idUsuario=idUsuario,
        idPelicula=idPelicula,
        fecha_renta=fecha_renta,
        dias_de_renta=dias_de_renta,
        estatus=estatus,
    )
    try:
        db.session.add(nueva_renta)
        db.session.commit()

    except Exception as e:
        print(e)
    return "Renta creada con éxito."


# /////////////////////////////////////////1)Ver los registros de una tabla
def muestra_todas_rentas():
    return Renta.query.all()


# ///////////////////////////////////////////2)existe registro por id
def filtrar_por_id_renta_bool(id):
    renta_seleccionada = Renta.query.filter(Renta.idRentar == id).first()
    if renta_seleccionada:
        return True
    else:
        return False


# ///////////////////////////////////////////2)Filtrar los registros por id
def filtrar_por_id_renta(id):
    for renta in Renta.query.filter(Renta.idRentar == id):
        renta_seleccionada = renta
    return renta_seleccionada


# ////////////////////////////////////////////3) Actualizar la columna nombre de un registro


def actualizar_fecha_renta(id, fecha):
    renta = Renta.query.filter(Renta.idRentar == id).first()
    renta.fecha_renta = fecha
    db.session.commit()
    print("Actualizacion realizada con exito")


# //////////////////////////////////////////// Actualizar solo el valor de estatus
def actualizar_estatus_renta(id, estatus):
    renta = Renta.query.filter(Renta.idRentar == id).first()
    renta.estatus = estatus
    db.session.commit()
    return "Actualizacion realizada con exito"


# //////////////////////////////////////////4) Borrar registro por id o todos los registros
def borra_renta(id):
    renta = Renta.query.filter(Renta.idRentar == id).first()
    if renta:
        db.session.delete(renta)
        db.session.commit()
        print(f"Renta con el ID {id} ha sido eliminado.")
    else:
        print(f"No se encontró ningúna renta con el ID {id}.")


def borra_todas_rentas():
    rentas = Renta.query.all()
    for renta in rentas:
        db.session.delete(renta)
    db.session.commit()
    print("Todos los registros de rentas han sido eliminadas.")
