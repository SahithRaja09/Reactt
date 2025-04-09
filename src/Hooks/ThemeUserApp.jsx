import React, {
    useState,
    useEffect,
    useRef,
    useContext,
    useMemo,
    useCallback,
    createContext
  } from "react";
  
  const ThemeContext = createContext();
  
  export default function ThemeUserApp() {
    const [theme, setTheme] = useState("light");
  
    const toggleTheme = () =>
      setTheme((prev) => (prev === "light" ? "dark" : "light"));
  
    return (
      <ThemeContext.Provider value={theme}>
        <div className={`App ${theme}`}>
          <h1>User List</h1>
          <button onClick={toggleTheme}>Toggle Theme</button>
          <UserManager />
        </div>
      </ThemeContext.Provider>
    );
  }
  
  function UserManager() {
    const inputRef = useRef(null);
    const theme = useContext(ThemeContext);
  
    const [users, setUsers] = useState([]);
    const [input, setInput] = useState("");
    const [search, setSearch] = useState("");
    const [editingIndex, setEditingIndex] = useState(null);
  
    useEffect(() => {
      const fetchedUsers = ["Alice", "Bob", "Charlie"];
      setUsers(fetchedUsers);
    }, []);
  
    const filterUsers = useCallback(() => {
      return users.filter((user) =>
        user.toLowerCase().includes(search.toLowerCase())
      );
    }, [users, search]);
  
    const filtered = useMemo(() => filterUsers(), [filterUsers]);
  
    const handleAddOrUpdate = () => {
      if (!input.trim()) return;
      if (editingIndex !== null) {
        const updated = [...users];
        updated[editingIndex] = input;
        setUsers(updated);
        setEditingIndex(null);
      } else {
        setUsers([...users, input]);
      }
      setInput("");
      inputRef.current.focus();
    };
  
    const handleEdit = (index) => {
      setInput(users[index]);
      setEditingIndex(index);
      inputRef.current.focus();
    };
  
    const handleDelete = (index) => {
      setUsers(users.filter((_, i) => i !== index));
    };
  
    return (
      <div style={{ padding: "1rem", background: theme === "dark" ? "#333" : "#eee" }}>
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter name"
        />
        <button onClick={handleAddOrUpdate}>
          {editingIndex !== null ? "Update" : "Add"}
        </button>
  
        <br />
        <input
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
  
        <ul>
          {filtered.map((user, index) => (
            <li key={index}>
              {user}
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  