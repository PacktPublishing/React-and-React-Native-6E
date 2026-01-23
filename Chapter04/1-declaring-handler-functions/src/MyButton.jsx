function MyButton(props) {
  const handleClick = () => {
    console.log("clicked");
  };

  return <button onClick={handleClick}>{props.children}</button>;
}

export default MyButton;
