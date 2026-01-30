import { useReducer } from "react";
import PrioritizingUpdates from "./PrioritizingUpdates";
import NotPrioritizingUpdates from "./NotPrioritizingUpdates";

interface State {
  prioritizingUpdates: boolean;
  notPrioritizingUpdates: boolean;
}

type Action =
  | { type: "prioritizingUpdates" }
  | { type: "notPrioritizingUpdates" };

const initialState: State = {
  prioritizingUpdates: false,
  notPrioritizingUpdates: false,
};

const reducer = (_: State, action: Action): State => {
  switch (action.type) {
    case "prioritizingUpdates":
      return { ...initialState, prioritizingUpdates: true };
    case "notPrioritizingUpdates":
      return { ...initialState, notPrioritizingUpdates: true };
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
          disabled={state.notPrioritizingUpdates}
          onClick={() => dispatch({ type: "notPrioritizingUpdates" })}
        >
          Not Prioritizing Updates
        </button>
        <button
          disabled={state.prioritizingUpdates}
          onClick={() => dispatch({ type: "prioritizingUpdates" })}
        >
          Prioritizing Updates
        </button>
      </nav>
      <main style={{ margin: 20 }}>
        {state.notPrioritizingUpdates && <NotPrioritizingUpdates />}
        {state.prioritizingUpdates && <PrioritizingUpdates />}
      </main>
    </div>
  );
}
