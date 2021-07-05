import { Queue } from "./data-structures/queue";

class Main {
  public static Main(): void {
    const queue = new Queue<number>();

    queue.add(1);
    queue.add(2);
    queue.add(3);
    queue.top();
    queue.getElements();
    queue.remove();
    queue.getElements();
  }
}

Main.Main();
