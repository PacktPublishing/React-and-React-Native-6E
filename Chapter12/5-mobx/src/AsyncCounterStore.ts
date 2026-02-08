import { makeAutoObservable, runInAction } from "mobx";

function fetchIncrementValue(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.floor(Math.random() * 5) + 1);
    }, 1000);
  });
}

class AsyncCounterStore {
  count = 0;
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }
  async incrementAsync() {
    this.loading = true;
    const amount = await fetchIncrementValue();
    runInAction(() => {
      this.count += amount;
      this.loading = false;
    });
  }
}

const asyncCounterStore = new AsyncCounterStore();
export default asyncCounterStore;
