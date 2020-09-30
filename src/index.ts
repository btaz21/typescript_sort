class Sorter {
  constructor(public collection: number[] | string) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection instanceof Array) {
          if (this.collection[j] > this.collection[j + 1]) {
            [this.collection[j], this.collection[j + 1]] = [
              this.collection[j + 1],
              this.collection[j],
            ];
          }
        }
      }
    }
  }
}

const sorter = new Sorter([10, 100, -3, -300]);
sorter.sort();
console.log(sorter.collection);
