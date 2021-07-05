import { Queue } from "./queue";

describe("queue", () => {
  test("test adding 1 to queue", () => {
    const queue = new Queue<number>();

    queue.add(1);

    expect(queue.getElements()).toStrictEqual([1]);
  });

  test("test adding 1, 2, 3 to queue", () => {
    const queue = new Queue<number>();

    queue.add(1);
    queue.add(2);
    queue.add(3);

    expect(queue.getElements()).toStrictEqual([3, 2, 1]);
  });
});
