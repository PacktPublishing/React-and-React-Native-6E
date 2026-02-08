import { useReducer } from 'react';

const initialState: { count: number } = { count: 0 };

function reducer(state: { count: number }, action: { type: "increment" | "decrement" }) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>Count: {state.count}</div>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
}

function App() {
  return (
    <Counter />
  );
}

export default App
