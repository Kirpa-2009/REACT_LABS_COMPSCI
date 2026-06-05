import { useState } from "react";
import "./index.css";

const App = () => {
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [search, setSearch] = useState("");

  const [contacts, setContacts] = useState([
    { id: 1, name: "John Doe", email: "johndoe@gmail.com" },
    { id: 2, name: "Jane Smith", email: "janesmith@gmail.com" },
    { id: 3, name: "Michael Johnson", email: "michaeljohnson@gmail.com" },
    { id: 4, name: "Emily Davis", email: "emilydavis@gmail.com" },
    { id: 5, name: "David Brown", email: "davidbrown@gmail.com" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedName = newName.trim();
    const trimmedEmail = newEmail.trim();

    if (!trimmedName || !trimmedEmail) {
      alert("Name and Email are required");
      return;
    }

    const duplicate = contacts.find(
      (contact) =>
        contact.name.toLowerCase() === trimmedName.toLowerCase()
    );

    if (duplicate) {
      alert(`${trimmedName} is already in contacts`);
      return;
    }

    const newContact = {
      id: Date.now(),
      name: trimmedName,
      email: trimmedEmail,
    };

    setContacts([...contacts, newContact]);
    setNewName("");
    setNewEmail("");
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="contacts-app">
      <h2>Add a New Contact</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter contact name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
        />

        <button type="submit">Add Contact</button>
      </form>

      <h2>Contact List</h2>

      <input
        className="search-input"
        type="text"
        placeholder="Search contacts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="contact-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {filteredContacts.length > 0 ? (
            filteredContacts.map((contact, index) => (
              <tr
                key={contact.id}
                className={
                  index % 2 === 0 ? "green-row" : "green-row-dark"
                }
              >
                <td>{contact.name}</td>
                <td>{contact.email}</td>
              </tr>
            ))
          ) : (
            <tr className="green-row">
              <td colSpan="2">No Contact Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default App;