/**
 * Creates circle iterator from list (Array)
 */
class CircleIterator {
  constructor(list) {
    this.list = list;
    this.calls = 0;
  }

  next() {
    this.calls++;
    const cursor = this.calls % this.list.length;

    return this.list[cursor];
  }

  [Symbol.iterator]() {
    return this;
  }
}

export default CircleIterator;
