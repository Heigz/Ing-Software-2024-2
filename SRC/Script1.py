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
            self.puntos = 40  # Cambio a 40 en lugar de "Adv"
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


        if self.puntaje ==4:
            if(self.puntos=="Adv"):
                self.puntos=40
            else:
                self.puntaje-=1
                self.puntos=40
        elif self.puntaje ==3 :
            if (self.puntos == "Adv"):
                self.puntaje+=1
                self.puntos = 40
            else:
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

    def tenis_cinco_sets(self):
        juegos_en_set = 0
        while True:
            if self.jugador1.sets == "GANADOR" or self.jugador2.sets == "GANADOR":
                if self.jugador1.sets == "GANADOR":
                    print("EL GANADOR ES:")
                    print(self.jugador1.print_Jugador())
                else:
                    print("EL GANADOR ES:")
                    print(self.jugador2.print_Jugador())
                break

            print("Ingrese el nombre del jugador que anota el punto (o 'fin' para terminar el juego):")
            nombre_jugador = input()

            if nombre_jugador.lower() == 'fin':
                break

            if nombre_jugador == self.jugador1.nombre:
                jugador_anotador = self.jugador1
                jugador_no_anotador = self.jugador2
            elif nombre_jugador == self.jugador2.nombre:
                jugador_anotador = self.jugador2
                jugador_no_anotador = self.jugador1
            else:
                print("Nombre de jugador no valido.")
                continue

            jugador_anotador.increment_puntos()

            if jugador_anotador.puntos == "GAME" and jugador_no_anotador.puntos != "GAME" or \
                    jugador_anotador.puntos != "GAME" and jugador_no_anotador.puntos == "GAME":
                if jugador_anotador.puntos == "GAME" and jugador_no_anotador.puntos != "GAME":

                    jugador_anotador.increment_juegos()
                    jugador_anotador.puntaje = 0
                    jugador_anotador.puntos = 0
                    jugador_no_anotador.decrement_puntos()
                    juegos_en_set += 1
                else:
                    jugador_no_anotador.increment_juegos()
                    jugador_no_anotador.puntaje = 0
                    jugador_no_anotador.puntos = 0
                    jugador_anotador.decrement_puntos()
                    juegos_en_set += 1

                # Reiniciar puntaje y puntos del jugador perdedor
                jugador_no_anotador.puntaje = 0
                jugador_no_anotador.puntos = 0

                if jugador_anotador.juegos == 6 and abs(jugador_anotador.juegos - jugador_no_anotador.juegos) >= 2:
                    jugador_anotador.increment_sets()
                    jugador_anotador.juegos = 0
                    jugador_no_anotador.juegos = 0
                    juegos_en_set = 0

            elif jugador_anotador.puntos == 40 and jugador_no_anotador.puntos == 40:
                self.jugador1.print_Jugador()
                self.jugador2.print_Jugador()
                jugador_anotador.puntos = "Adv"

            elif jugador_anotador.puntos == "Adv" and jugador_no_anotador == 40:
                jugador_anotador.increment_juegos()
                jugador_anotador.puntaje = 0
                jugador_anotador.puntos = 0
                jugador_no_anotador.puntaje = 0
                jugador_no_anotador.puntos = 0
                juegos_en_set += 1

                if jugador_anotador.juegos == 6 and abs(jugador_anotador.juegos - jugador_no_anotador.juegos) >= 2:
                    jugador_anotador.increment_sets()
                    jugador_anotador.juegos = 0
                    jugador_no_anotador.juegos = 0
                    juegos_en_set = 0

            elif jugador_anotador.puntos == 40 and jugador_no_anotador == "Adv":
                jugador_no_anotador.decrement_puntos()

            if juegos_en_set % 2 != 0:
                print("CAMBIO DE CANCHA")

            self.jugador1.print_Jugador()
            self.jugador2.print_Jugador()

        print("juego terminado")


if __name__ == "__main__":
    while True:
        try:
            nombre_jugador1 = input("Ingrese el nombre del primer jugador: ")
            nombre_jugador2 = input("Ingrese el nombre del segundo jugador: ")

            # Check if both inputs contain only alphabetical characters
            if not nombre_jugador1.isalpha() or not nombre_jugador2.isalpha():
                raise ValueError("Por favor, ingrese solo cadenas de texto.")

            jugador1 = Jugador(nombre_jugador1)
            jugador2 = Jugador(nombre_jugador2)

            partida = Partida(jugador1, jugador2)
            partida.tenis_cinco_sets()
            break  # Exit the loop if all inputs are valid
        except ValueError as e:
            print(e)



