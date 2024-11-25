import React from "react";
import { useFetchUsersQuery } from "./services/userApi";
import "./index.css"; 

const App = () => {
  const { data: users, error, isLoading } = useFetchUsersQuery();

  if (isLoading) return <div className="loading">Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="table-container">
      <h1>User List</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id} className="table-row" style={{ animationDelay: `${index * 0.1}s` }}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>
                {user.address?.street}, {user.address?.suite}, {user.address?.city}, {user.address?.zipcode}
              </td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
