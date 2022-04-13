import { useState, createContext } from 'react';
import { users as usersData } from 'data/users';

export const UsersContext = createContext({
  users: [],
  deleteUser: () => {},
  handleAddUser: () => {},
});

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState(usersData);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleAddUser = (values) => {
    const newUser = {
      name: values.name,
      attendance: values.attendance,
      average: values.average,
    };

    setUsers([newUser, ...users]);
  };

  return (
    <UsersContext.Provider
      value={{
        users,
        deleteUser,
        handleAddUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
