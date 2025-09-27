import * as React from "react";

function App() {
  const [id, setId] = React.useState("loading...");
  const [name, setName] = React.useState("loading...");

  const fetchUser = () => {
    console.count("fetching user");
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: Math.random(), name: "Mike" });
      }, 500);
    });
  };

  React.useEffect(() => {
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
