function MyInput() {
  const onChange = (e) => {
    console.log("changed", e.target.value);
  };

  const onBlur = () => {
    console.log("blured");
  };

  const onFocus = () => {
    console.log("focused");
  }

  return <input onChange={onChange} onBlur={onBlur} onFocus={onFocus} />;
}

export default MyInput;
