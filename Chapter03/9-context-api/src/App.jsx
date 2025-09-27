import Header from './Header';
import Profile from './Profile';
import  UserProvider  from './UserProvider';


function App() {
  return (
    <UserProvider>
      <div>
        <Header />
        <Profile />
      </div>
    </UserProvider>
  );
}

export default App;