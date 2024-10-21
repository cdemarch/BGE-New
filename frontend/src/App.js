import React from 'react';
import './App.css';
import UserList from './UserList'; // Import the UserList component

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to the BGE App</h1>
          <UserList /> {/* Include the UserList component */}
        </header>
      </div>
  );
}

export default App;
