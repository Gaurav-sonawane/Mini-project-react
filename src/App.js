import { useState } from "react";

export default function App() {
  return (
    <div>
      <Hello />
    </div>
  );
}

function Hello() {
  const [username, setUsername] = useState("");

  const handleUser = (e) => {
    const newUsername = e.target.value;
    setUsername(newUsername);
  };
  return (
    <div>
      <input type="text" value={username} onChange={handleUser} />

      <h1>{username}</h1>
      <hr />
      <h1>{username}</h1>
      <hr />
      <h1>{username}</h1>
    </div>
  );
}
