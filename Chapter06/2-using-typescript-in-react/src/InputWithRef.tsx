import { useRef } from "react";

const InputWithRef = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocusInput}>Focus the input</button>
    </div>
  );
};

export default InputWithRef;
