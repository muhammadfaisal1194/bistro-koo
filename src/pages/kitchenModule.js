import React from "react";
import axios from "axios";
import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { API_URL } from "../utils/api";
import { API_URL_SOCKET } from "../utils/api";
import { io } from "socket.io-client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container } from "@mui/system";

const Kitchen = () => {
  const [notificationText, setNotificationText] = useState("");

  const socket = io(API_URL_SOCKET);

  const notifyHandler = () => {
    socket.emit("sendNotification", {
      notificationText: notificationText,
    });
    postNotificationHandler();
  };

  const postNotificationHandler = async () => {
    try {
      const response = await axios.post(`${API_URL}/notification/create`, {
        notificationText: notificationText,
      });
      if (response.status == 200) {
        setTimeout(() => {
          toast.success("Notified To Kitchen!");
          setNotificationText("");
        }, 500);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        label="Notification"
        name="name"
        autoFocus
        onChange={(e) => setNotificationText(e.target.value)}
      />
      <Button
        sx={{
          mt: 2,
          background: "#162e4d",
          ":hover": { backgroundColor: "#002655", color: "#fff" },
        }}
        variant="contained"
        type="submit"
        onClick={() => notifyHandler()}
      >
        Notify
      </Button>
      <ToastContainer />
    </Container>
  );
};

export default Kitchen;
