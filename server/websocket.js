class WebSocket {
  constructor() {
    this.io = null;
    this.users = [];
    this.messages = {};
  }
  // initialize websocket connection
  init(io) {
    this.io = io;
  }
  connection() {
    this.io.on("connection", (socket) => {
      console.log(`New user connected : ${socket.id}`);

      socket.emit("test", "Boom , we are done !");

      // take userId and socketId from user
      socket.on("addUser", (userId) => {
        this.addUser(userId, socket.id);
        this.io.emit("getUsers", users);
      });

      // send and get message
      socket.on("sendMessage", ({ senderId, receiverId, text, images }) => {
        const message = this.createMessage({
          senderId,
          receiverId,
          text,
          images,
        });

        const user = this.getUser(receiverId);

        // Store the messages in the `messages` object
        if (!this.messages[receiverId]) {
          this.messages[receiverId] = [message];
        } else {
          this.messages[receiverId].push(message);
        }

        // send the message to the recevier
        io.to(user?.socketId).emit("getMessage", message);
      });

      socket.on("messageSeen", ({ senderId, receiverId, messageId }) => {
        const user = this.getUser(senderId);

        // update the seen flag for the message
        if (this.messages[senderId]) {
          const message = this.messages[senderId].find(
            (message) =>
              message.receiverId === receiverId && message.id === messageId
          );
          if (message) {
            message.seen = true;

            // send a message seen event to the sender
            io.to(user?.socketId).emit("messageSeen", {
              senderId,
              receiverId,
              messageId,
            });
          }
        }
      });

      // update and get last message
      socket.on("updateLastMessage", ({ lastMessage, lastMessagesId }) => {
        io.emit("getLastMessage", {
          lastMessage,
          lastMessagesId,
        });
      });

      //when disconnect
      socket.on("disconnect", () => {
        console.log(`a user disconnected!`);
        this.removeUser(socket.id);
        this.io.emit("getUsers", this.users);
      });
    });
  }

  addUser = (userId, socketId) => {
    !this.users.some((user) => user.userId === userId) &&
      this.users.push({ userId, socketId });
  };
  removeUser = (socketId) => {
    this.users = this.users.filter((user) => user.socketId !== socketId);
  };

  getUser = (receiverId) => {
    return this.users.find((user) => user.userId === receiverId);
  };

  // Define a message object with a seen property
  createMessage = ({ senderId, receiverId, text, images }) => ({
    senderId,
    receiverId,
    text,
    images,
    seen: false,
  });
}

module.exports = WebSocket;
