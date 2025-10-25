import React from "react";

const InputField = () => {
  const [value, setValue] = React.useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <>
      <input value={value} onChange={handleChange} />
      <p>Value: {value}</p>
    </>
  );
};

export default InputField;
