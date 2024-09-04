import React, { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  setDoc,
  doc,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { database } from "../config/firebase";
import {
  Button,
  TextField,
  Container,
  Paper,
  Typography,
  Grid,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Dashboard = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const addData = async () => {
    try {
      let userObj = {
        name,
        email,
        password,
      };

      const postData = await addDoc(collection(database, "users"), userObj);
      setRefresh(!refresh);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getData();
  }, [refresh]);

  const getData = async () => {
    try {
      const arr = [];
      const getData = await getDocs(collection(database, "users"));
      getData.forEach((doc) => {
        arr.push({ ...doc.data(), id: doc.id });
      });
      setUserData(arr);
    } catch (error) {
      console.log(error);
    }
  };

  const EditData = async (id) => {
    let updateVal = prompt("Enter edit value");
    let updateObj = { name: updateVal };
    await updateDoc(doc(database, "users", id), updateObj);
    setRefresh(!refresh);
  };

  const DeleteData = async (id) => {
    await deleteDoc(doc(database, "users", id));
    setRefresh(!refresh);
  };

  return (
    <>
      <Container>
        <Typography variant="h4" component="h1" gutterBottom>
          Todo App
        </Typography>

        <Paper style={{ padding: 16 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Add Task"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={addData}
              >
                Add
              </Button>
            </Grid>
          </Grid>
        </Paper>

        <div style={{ marginTop: 24 }}>
          {userData.map((e, i) => (
            <Paper
              key={i}
              style={{
                padding: 16,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 16,
              }}
            >
              <Typography variant="h6">{e.name}</Typography>
              <div>
                <IconButton color="primary" onClick={() => EditData(e.id)}>
                  <EditIcon />
                </IconButton>
                <IconButton color="secondary" onClick={() => DeleteData(e.id)}>
                  <DeleteIcon />
                </IconButton>
              </div>
            </Paper>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Dashboard;
