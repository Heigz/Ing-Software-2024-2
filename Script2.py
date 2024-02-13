class tour:
    def cuenta_valles(self,cadena: str):
        numero_valles = 0
        nivel_mar = 0
        suma = 0

        for x in range(len(cadena)):
            if (cadena[x] == 'U'):
                suma += 1

                if x % 2 == 1 and nivel_mar < 0 and suma == 0:
                    numero_valles += 1
                nivel_mar += 1
            else:
                suma -= 1
                nivel_mar -= 1
        return numero_valles


class Nodo:
    def __init__(self, valor):
        self.valor = valor
        self.izquierdo = None
        self.derecho = None

class ArbolBinario:
    def __init__(self):
        self.raiz = None

    def agregar(self, valor):
        if self.raiz is None:
            self.raiz = Nodo(valor)
        else:
            self._agregar_recursivo(self.raiz, valor)

    def _agregar_recursivo(self, nodo_actual, valor):
        if valor <= nodo_actual.valor:
            if nodo_actual.izquierdo is None:
                nodo_actual.izquierdo = Nodo(valor)
            else:
                self._agregar_recursivo(nodo_actual.izquierdo, valor)
        else:
            if nodo_actual.derecho is None:
                nodo_actual.derecho = Nodo(valor)
            else:
                self._agregar_recursivo(nodo_actual.derecho, valor)

    def preorden(self):
        return self._preorden_recursivo(self.raiz)

    def _preorden_recursivo(self, nodo):
        if nodo is not None:
            resultado = [nodo.valor]
            resultado.extend(self._preorden_recursivo(nodo.izquierdo))
            resultado.extend(self._preorden_recursivo(nodo.derecho))
            return resultado
        else:
            return []

    def inorden(self):
        return self._inorden_recursivo(self.raiz)

    def _inorden_recursivo(self, nodo):
        if nodo is not None:
            resultado = self._inorden_recursivo(nodo.izquierdo)
            resultado.append(nodo.valor)
            resultado.extend(self._inorden_recursivo(nodo.derecho))
            return resultado
        else:
            return []

    def postorden(self):
        return self._postorden_recursivo(self.raiz)

    def _postorden_recursivo(self, nodo):
        if nodo is not None:
            resultado = self._postorden_recursivo(nodo.izquierdo)
            resultado.extend(self._postorden_recursivo(nodo.derecho))
            resultado.append(nodo.valor)
            return resultado
        else:
            return []





if __name__ == "__main__":
    t = tour()
    print("--CUENTA VALLES--")
    cadena = input("Ingrese cadena de la forma especificada en la practica: ")
    print("Numero de valles: " + str(t.cuenta_valles(cadena)))

    print("--ARBOL--")
    # Ejemplo de uso
    arbol = ArbolBinario()
    arbol.agregar(10)
    arbol.agregar(5)
    arbol.agregar(15)
    arbol.agregar(3)
    arbol.agregar(7)
    arbol.agregar(12)
    arbol.agregar(20)

    print("Recorrido preorden:", arbol.preorden())
    print("Recorrido inorden:", arbol.inorden())
    print("Recorrido postorden:", arbol.postorden())