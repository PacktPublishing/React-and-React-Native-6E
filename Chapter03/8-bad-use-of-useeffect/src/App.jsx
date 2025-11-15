import { useEffect, useState } from "react";

function App() {
  const [id, setId] = useState("loading...");
  const [name, setName] = useState("loading...");

  const fetchUser = () => {
    console.count("fetching user");
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: Math.random(), name: "Mike" });
      }, 500);
    });
  };

  useEffect(() => {
    fetchUser().then((user) => {
      setId(user.id); 
      setName(user.name); 
    });
  });

  return (
    <>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
    </>
  );
}

export default App;
