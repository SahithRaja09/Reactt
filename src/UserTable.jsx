import { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

function UsersTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
 
    fetch("https://jsonplaceholder.typicode.com/users") 
      .then((response) => response.json())
      .then((data) => {
        setUsers(data); 
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={3} align="center">
                Loading
              </TableCell>
            </TableRow>
          ) : (
            users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UsersTable;
