import { observer } from "mobx-react-lite";
import counterStore from "./CounterStore";
import asyncCounterStore from "./AsyncCounterStore";

const Counter = observer(() => (
  <>
    <div>Count: {counterStore.count}</div>
    <button onClick={() => counterStore.increment()}>+</button>
    <button onClick={() => counterStore.decrement()}>-</button>
  </>
));

const AsyncCounter = observer(() => (
  <>
    Async count: {asyncCounterStore.count}
    <button
      disabled={asyncCounterStore.loading}
      onClick={() => asyncCounterStore.incrementAsync()}
    >
      {asyncCounterStore.loading ? "Loading…" : "Increment async"}
    </button>
  </>
));

function App() {
  return (
    <>
      <Counter />
      <br />
      <AsyncCounter />
    </>
  );
}

export default App;
