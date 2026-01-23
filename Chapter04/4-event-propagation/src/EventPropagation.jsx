function EventPropagationDemo() {
  const handleGrandparent = (e) => {
    alert('Grandparent - bubbling phase');
  };

  const handleParent = (e) => {
    alert('Parent - bubbling phase');
  };

  const handleChild = (e) => {
    alert('Child - target');
    e.stopPropagation(); // Comment this line to see full propagation
  };

  const handleParentCapture = (e) => {
    alert('Parent - capture phase');
  };
  const handleGrandparentCapture = (e) => {
    alert('Grandparent - capture phase');
  };

  return (
    <>
    <h2>Event Propagation: capturing and bubbling</h2>
    <div onClick={handleGrandparent} onClickCapture={handleGrandparentCapture} style={{ padding: "20px", border: "2px solid black" }}>
        <p>Grandparent</p>
      <div onClick={handleParent} onClickCapture={handleParentCapture} style={{ padding: "20px", border: "1px solid black" }}>
        <p>Parent</p>
          <button onClick={handleChild}>(Child) Click Me</button>
      </div>
    </div>
    </>
  );
}

export default EventPropagationDemo;