import { useState } from "react";

export default function App() {
  const [name] = useState("Mike");
  const [age] = useState(32);

  return (
    <section>
      <p>My name is {name}</p>
      <p>My age is {age}</p>
    </section>
  );
}
