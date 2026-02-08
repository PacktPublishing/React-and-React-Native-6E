import useCounterStore from './useCounterStore';
import useCounterStoreAsync from './useCounterStoreAsync';

function Counter() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const { countAsync, incrementAsync, loading } = useCounterStoreAsync();

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <div>Count async: {countAsync}</div>
      <button disabled={loading} onClick={() => incrementAsync()}>{loading ? 'Loading...' : 'Increment async'}</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;