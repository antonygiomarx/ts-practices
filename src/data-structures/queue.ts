export class Queue<T> {
  private _elements: T[] = [];

  add(element: T) {
    this._elements.unshift(element);

    console.log("Elemento agregado!");
  }

  remove() {
    if (this.isEmpty()) {
      console.log("La cola está vacía!");
      return;
    }

    this._elements.pop();
    console.log("Elemento eliminado de la lista!");
  }

  top() {
    if (this.isEmpty()) {
      console.log("La cola está vacía!");
      return null;
    }

    console.log("El elemento del top es: ", this._elements[0]);

    return this._elements[0];
  }

  getElements() {
    if (this.isEmpty()) {
      console.log("La cola está vacía!");
      return null;
    }

    console.log(this._elements);
    return this._elements;
  }

  isEmpty() {
    return this._elements.length === 0;
  }
}
