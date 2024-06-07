class Nodo {
    constructor(dato, anterior = null) {
        this.dato = dato;
        this.anterior = anterior;
    }
}

class Pila {
    constructor(nodo = null) {
        this.cima = nodo;
    }

    push(dato) {
        const nuevoNodo = new Nodo(dato, this.cima);
        this.cima = nuevoNodo;
    }

    pop() {
        if (!this.cima) {
            console.log("La pila está vacía");
            return null;
        }
        const dato = this.cima.dato;
        this.cima = this.cima.anterior;
        return dato;
    }

    peek() {
        if (!this.cima) {
            console.log("La pila está vacía");
            return null;
        }
        return this.cima.dato;
    }

    print() {
        let nodoActual = this.cima;
        while (nodoActual) {
            console.log(nodoActual.dato);
            console.log("anterior");
            nodoActual = nodoActual.anterior;
        }
        console.log("null");
    }
}

let pilaNumeros = new Pila();

pilaNumeros.push(5);
pilaNumeros.push(8);
pilaNumeros.push(12);
pilaNumeros.push(9);

pilaNumeros.print();