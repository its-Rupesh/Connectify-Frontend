import React from "react";
import { Stack } from "@mui/material";
import ChatItem from "../shared/ChatItem";
const ChatList = ({
  w = "100%",
  chats = [],
  chatId,
  onlineUsers = [],
  newMessagesAlert = [{ chatId: "", count: 0 }],
  handleDeleteChat,
}) => {
  return (
    <Stack width={w} direction={"column"} overflow={"auto"} height={"100%"}>
      {chats?.map((data, index) => {
        const { avatar, _id, name, groupchat, members } = data;

        const newMessageAlert = newMessagesAlert.find(
          (data) => data.chatId === _id
        );
        //console.log("newmessage", newMessageAlert);
        // Members online Hae ki nahi
        const isOnline = members?.some((member) => onlineUsers.includes(_id));
        console.log(isOnline);
        console.log(onlineUsers, _id);
        return (
          <ChatItem
            index={index}
            newMessageAlert={newMessageAlert}
            isOnline={isOnline}
            avatar={avatar}
            name={name}
            _id={_id}
            key={_id}
            groupchat={groupchat}
            sameSender={chatId === _id}
            handleDeleteChat={handleDeleteChat}
          />
        );
      })}
    </Stack>
  );
};

export default ChatList;
