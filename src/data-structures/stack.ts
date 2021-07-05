export class Stack<T> {
  private _elements: T[] = [];

  push(element: T): void {
    this._elements.push(element);
    console.log("Elemento agregado!");
  }
  pop(): void {
    if (this.isEmpty()) {
      console.log("Stack vacío");
    }
    this._elements.pop();
    console.log("Elemento eliminado!");
  }

  top(): T | null {
    if (this.isEmpty()) {
      console.log("No hay elementos en el Stack");
      return null;
    }
    console.log(
      "Elemento en el top es: ",
      this._elements[this._elements.length - 1]
    );
    return this._elements[this._elements.length - 1];
  }

  isEmpty(): boolean {
    return this._elements.length === 0;
  }

  getElements(): T[] | null {
    if (this.isEmpty()) {
      return null;
    }

    console.log(this._elements);

    return this._elements;
  }
}
