﻿using FormulaOne.ChatService.Model;
using Microsoft.AspNetCore.SignalR;

namespace FormulaOne.ChatService.Hubs
{
    public class ChatHub :Hub
    {
        public async Task JoinChat(UserConnection connection) {

            await Clients.All.SendAsync("ReceiveMessage","admin",$"{ connection.Username} has joined ");
        }
        public async Task JoinSepecificChatRoom(UserConnection connection) {
            await Groups.AddToGroupAsync(Context.ConnectionId,connection.ChatRoom);
            await Clients.Group(connection.ChatRoom).SendAsync("ReceiveMessage", "admin",$"{connection.Username} has joined {connection.ChatRoom}");
        }

    }
}
