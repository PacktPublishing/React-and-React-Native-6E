import { useUser } from "./UserContext";

function Header() {
  const { user } = useUser();

  return (
    <header>
      <h1>Welcome, {user}!</h1>
    </header>
  );
}

export default Header;
