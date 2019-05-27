import io from 'socket.io-client';

const socketURL = 'http://localhost:5000/user/chat';
class SocketManagerClient {
  constructor(){
    this.socket = '';
  }
  getSocket = () => this.socket;

  initSocketUser = (chatID) => this.socket = io(`${socketURL}/${chatID}`);
}

let socketManagerClient = new SocketManagerClient();
export default socketManagerClient;