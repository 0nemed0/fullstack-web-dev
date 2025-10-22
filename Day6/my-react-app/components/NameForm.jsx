import { useState } from "react";

function NameForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); // Added state for email

  return (
    <div>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p>Hello , {name}</p>
      <p>Email : {email}</p>
    </div>
  );
}

export default NameForm;
