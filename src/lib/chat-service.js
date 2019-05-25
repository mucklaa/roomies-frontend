import axios from "axios";

class ChatService {
  constructor() {
    this.chat = axios.create({
      baseURL: "http://localhost:5000/user/chat",
      withCredentials: true
    });
  }

  getChat(chatID){
    return this.chat
      .get(`/${chatID}`)
        .then((apiResponse) => apiResponse)
  }
  
  sendMessage(chatID, text){
    console.log(text)
    return this.chat
      .post(`/${chatID}`, { text })
        .then((apiResponse) => apiResponse)
  }
}



const chatService = new ChatService();

export default chatService;