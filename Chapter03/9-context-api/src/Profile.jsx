import { useUser } from "./UserContext";

function Profile() {
  const { user, setUser } = useUser();

  return (
    <div >
      <h2 >User Profile</h2>
      <p >Current user: {user}</p>
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        placeholder="Enter your name"
      />
    </div>
  );
}
export default Profile;
