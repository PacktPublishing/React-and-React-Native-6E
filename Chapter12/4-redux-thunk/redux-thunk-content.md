## Handling Asynchronous Operations with Redux Thunk

Managing asynchronous operations in Redux requires special handling because reducers must be pure, synchronous functions. To bridge this gap, Redux provides a middleware mechanism that enables asynchronous behavior. Redux Toolkit includes redux-thunk middleware by default, eliminating the need for manual configuration.

redux-thunk allows you to write action creators that return functions instead of plain action objects. These thunk functions receive `dispatch` as an argument, enabling you to dispatch multiple actions sequentially—perfect for coordinating async operations like API calls, timers, or any operation that requires waiting for a result before updating state.

Let's examine a practical example that simulates an asynchronous operation. In our counter application, we'll implement an async increment that fetches a random value after a delay:

```typescript
function fetchIncrementValue(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.floor(Math.random() * 5) + 1);
    }, 1000);
  });
}

export function incrementAsync() {
  return async (
    dispatch: (action: ReturnType<typeof setLoading> | ReturnType<typeof addedBy>) => void
  ) => {
    dispatch(setLoading(true));
    const amount = await fetchIncrementValue();
    dispatch(addedBy(amount));
    dispatch(setLoading(false));
  };
}
```

The `incrementAsync` function demonstrates the thunk pattern: it returns an async function that receives `dispatch` as a parameter. This allows us to orchestrate multiple state updates throughout the async operation's lifecycle. First, we dispatch `setLoading(true)` to indicate the operation has started. Then we await the result from `fetchIncrementValue()`. Once the value arrives, we dispatch `addedBy(amount)` to update the counter, and finally dispatch `setLoading(false)` to signal completion.

Using this thunk in a component is straightforward—dispatch it like any regular action:

```typescript
function Counter() {
  const count = useSelector((state: RootState) => state.count);
  const loading = useSelector((state: RootState) => state.loading);
  const dispatch = useDispatch();

  return (
    <>
      Count: {count}
      <button
        disabled={loading}
        onClick={() => dispatch(incrementAsync())}
      >
        {loading ? "Loading…" : "Increment async"}
      </button>
    </>
  );
}
```

The component remains unaware of the async complexity—it simply dispatches the thunk and observes state changes through selectors. The `loading` state enables us to provide user feedback by disabling the button and showing a loading message during the operation.

While thunks provide a straightforward approach to async logic, Redux Toolkit also offers more sophisticated solutions like `createAsyncThunk` for scenarios requiring advanced error handling, request cancellation, or complex loading state management. For many applications, however, the thunk pattern shown here offers an excellent balance of simplicity and capability.
