import { create } from 'zustand';

interface CounterStateAsync{
  countAsync: number;
  loading: boolean;
  incrementAsync: () => Promise<void>;
}

function fetchIncrementValue(): Promise<number> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Math.floor(Math.random() * 5) + 1);
      }, 1000);
    });
  }

  
const useCounterStoreAsync = create<CounterStateAsync>((set) => ({
  countAsync: 0,
  loading: false,
  incrementAsync: async () => {
    set({ loading: true });
    const amount = await fetchIncrementValue();
    set((state) => ({ countAsync: state.countAsync + amount }));
    set({ loading: false });
  },
}));

export default useCounterStoreAsync;