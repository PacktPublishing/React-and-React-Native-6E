import { Provider, useDispatch, useSelector } from "react-redux";
import {
  decremented,
  incremented,
  incrementAsync,
} from "./CounterSlice";
import { store } from "./store";
import type { AppDispatch, RootState } from "./store";

function Counter() {
  const count = useSelector((state: RootState) => state.count);
  const loading = useSelector((state: RootState) => state.loading);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={() => dispatch(incremented())}>+</button>
      <button onClick={() => dispatch(decremented())}>-</button>
      <button
        disabled={loading}
        onClick={() => dispatch(incrementAsync())}
      >
        {loading ? "Loading…" : "Increment async"}
      </button>
    </>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
