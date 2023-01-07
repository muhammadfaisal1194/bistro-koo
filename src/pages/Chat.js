import React, { useState, useEffect, useRef, useContext } from "react";
import "../App.css";
import axios from "axios";
import { API_URL } from "../utils/api";
import moment from "moment";
import { SocketContext } from "../context/socket";

const Chat = () => {
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const { socket } = useContext(SocketContext);

  const [notifications, setNotifications] = useState(null);
  useEffect(() => {
    async function invokeSocket() {
      await socket.on("sendNotification", (data) => {
        console.log("data", data);
        fetchAllNotification();
      });
    }
    invokeSocket();
  }, []);

  useEffect(() => {
    async function invokeSocket() {
      await socket.on("receive_message", (data) => {
        console.log("data", data);
        getChat();
      });
    }
    invokeSocket();
  }, []);

  //************************** Fetch All-Menu Handler ***********************//
  const fetchAllNotification = async () => {
    const response = await axios.get(`${API_URL}/notification/index`);
    setNotifications(response.data.data);
  };
  const removeHandler = async (id) => {
    try {
      const response = await axios.delete(
        `${API_URL}/notification/delete/${id}`
      );
      fetchAllNotification();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchAllNotification();
  }, []);

  const getChat = async () => {
    const response = await axios.get(`${API_URL}/chat/index`);
    setChat(response.data.data);
  };

  const createChatHandler = async () => {
    try {
      const response = await axios.post(`${API_URL}/chat/create/`, {
        author: userName,
        message: message,
      });
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getChat();
    const role = JSON.parse(localStorage.getItem("role"));
    setUserName(role);
  }, []);

  const sendMessage = async () => {
    let messageContent = {
      content: {
        author: userName,
        message: message,
      },
    };
    await socket.emit("send_message", messageContent);
    setChat([...chat, messageContent.content]);
    console.log(chat);
    createChatHandler();
    setMessage("");
  };

  const bottomRef = useRef(null);
  useEffect(() => {
    document.querySelector(".messages").scrollTop =
      document.querySelector(".messages").scrollHeight;
  }, [chat]);

  return (
    <>
      <div
        style={{
          maxHeight: 350,
          overflow: "scroll",
          border: "2px solid black",
          borderRadius: 5,
          marginBottom: 5,
        }}
      >
        {notifications &&
          notifications.map((notification) => (
            <div className="alert success">
              <span
                className="closebtn"
                key={notification._id}
                onClick={() => removeHandler(notification._id)}
                style={{ cursor: "pointer", fontSize: 22, fontWeight: 800 }}
              >
                &times;
              </span>
              <strong>{notification.notificationText} !!</strong>
              <br></br>
              <span>
                <small>
                  {moment(notification.createdAt).format(
                    "MMMM Do YYYY, h:mm:ss a"
                  )}
                </small>
              </span>
            </div>
          ))}
      </div>
      <div className="chatContainer">
        <div className="messages mt-3 mb-3">
          {chat.map((val, key) => {
            return (
              <div
                key={key}
                className="messageContainer"
                id={val.author == userName ? "You" : "Other"}
              >
                <div className="messageIndividual">
                  {val.message}
                  <br />
                  <small>
                    {moment(val.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
                  </small>
                </div>
              </div>
            );
          })}
        </div>

        <div className="messageInputs">
          <input
            type="text"
            placeholder="Message..."
            value={message}
            onKeyUp={(e) => {
              if (e.keyCode == 13) {
                sendMessage();
              }
            }}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <button className="btn btn-common" onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default Chat;
