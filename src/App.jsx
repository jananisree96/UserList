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
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id} className="table-row" style={{ animationDelay: `${index * 0.1}s` }}>
              <td data-label="ID">{user.id}</td>
              <td data-label="Name">{user.name}</td>
              <td data-label="Email">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
