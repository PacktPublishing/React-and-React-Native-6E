import { useEffect, useState } from "react";

function App() {
  const [id, setId] = useState("Loading...");
  const [name, setName] = useState("Loading...");

  const fetchUser = () => {
    console.count("fetching user");
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: Math.random(), name: "Mike" }); // random number
      }, 500);
    });
  };

  useEffect(() => {
    fetchUser().then((user) => {
      setId(user.id); // ✅ state changes, triggers re-render
      setName(user.name);
    });
  }); // ❌ no dependency array

  return (
    <>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
    </>
  );
}

export default App;
