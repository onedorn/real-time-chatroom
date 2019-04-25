// dom queries
const chatList = document.querySelector('.chat-list');

// class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('gaming', 'shaun');

// get the chat render
chatroom.getChats((data) => {
    chatUI.render(data);
});