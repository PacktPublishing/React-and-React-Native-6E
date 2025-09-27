import { useState } from 'react';
import { UserContext } from './UserContext';

function UserProvider({ children }) {
  const [user, setUser] = useState('John Doe');
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;