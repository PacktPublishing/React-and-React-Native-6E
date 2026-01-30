import { useReducer } from "react";
import AsyncUpdatesPending from "./AsyncUpdatesPending";
import AsyncUpdatesLoading from "./AsyncUpdatesLoading";

interface State {
  asyncUpdatesPending: boolean;
  asyncUpdatesLoading: boolean;
}

type Action =
  | { type: "asyncUpdatesPending" }
  | { type: "asyncUpdatesLoading" };

const initialState: State = {
  asyncUpdatesPending: false,
  asyncUpdatesLoading: false,
};

const reducer = (_: State, action: Action): State => {
  switch (action.type) {
    case "asyncUpdatesPending":
      return { ...initialState, asyncUpdatesPending: true };
    case "asyncUpdatesLoading":
      return { ...initialState, asyncUpdatesLoading: true };
    default:
      throw new Error(`Invalid action`);
  }
};

export default function App() {
  let [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: 20,
        }}
      >
        <button
          disabled={state.asyncUpdatesPending}
          onClick={() => dispatch({ type: "asyncUpdatesPending" })}
        >
          Async Updates Pending
        </button>
        <button
          disabled={state.asyncUpdatesLoading}
          onClick={() => dispatch({ type: "asyncUpdatesLoading" })}
        >
          Async Updates Loading
        </button>
      </nav>
      <main style={{ margin: 20 }}>
        {state.asyncUpdatesPending && <AsyncUpdatesPending />}
        {state.asyncUpdatesLoading && <AsyncUpdatesLoading />}
      </main>
    </div>
  );
}
