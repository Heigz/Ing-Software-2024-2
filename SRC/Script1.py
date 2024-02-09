class Jugador:
    nombre = ''
    sets= ''
    juegos=''
    puntos = ''
    puntaje = ''

    def __init__(self, nombre,sets,juegos, puntaje, puntos):
        self.nombre = nombre
        self.sets = sets
        self.juegos = juegos
        self.puntaje = puntaje
        self.puntos = puntos

    def __init__(self, nombre):
        self.nombre = nombre
        self.sets=0
        self.juegos=0
        self.puntaje = 0
        self.puntos = 0

    def print_Jugador(self):
        print("Jugador: " + str(self.nombre))
        print("Sets: " + str(self.sets))
        print("Juegos: " + str(self.juegos))
        print("Puntaje: " + str(self.puntaje))
        print("Puntos: " + str(self.puntos))
        print("------------------------------------")

    def set_nombre(self, nombre):
        self.nombre = nombre

    def get_nombre(self):
        return self.nombre

    def set_sets(self, sets):
        self.sets = sets

    def get_sets(self):
        return self.sets
    def set_juegos(self, juegos):
        self.juegos = juegos

    def get_juegos(self):
        return self.juegos

    def set_puntaje(self, puntaje):
        self.puntaje = puntaje

    def get_puntaje(self):
        return self.puntaje

    def set_puntos(self, puntos):
        self.puntos = puntos

    def get_puntos(self):
        return self.puntos

    def increment_sets(self):
        self.sets+=1
        if self.sets==3:
            self.sets="GANADOR"
    def increment_juegos(self):
        self.juegos +=1

    def increment_puntos(self):
        self.puntaje += 1

        if self.puntaje == 1:
            self.puntos += 15
        elif self.puntaje == 2:
            self.puntos += 15
        elif self.puntaje == 3:
            self.puntos += 10
        elif self.puntaje == 4:
            self.puntos = "GAME"

    def decrement_sets(self):
        if self.sets=="GANADOR":
            self.sets=2
        elif self.sets>0:
            self.sets-=1

    def decrement_juegos(self):
        if(self.juegos>0):
            self.juegos-=1

    def decrement_puntos(self):
        if self.puntaje ==4 | self.puntaje == "Adv.":
            self.puntaje-=1
            self.puntos=40
        elif self.puntaje ==3 :
            self.puntaje-=1
            self.puntos-=10
        elif self.puntaje ==2:
            self.puntaje-=1
            self.puntos-=15
        elif self.puntaje==1:
            self.puntaje-=1
            self.puntos-=15
        elif self.puntaje==0:
            self.puntaje=0
            self.puntos=0

class Partida:

    def __init__(self, jugador1: Jugador, jugador2: Jugador):
        self.jugador1 = jugador1
        self.jugador2 = jugador2

    #def tenis_cinco_sets(self):



#if __name__ == "__main__":





