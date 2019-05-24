import io from 'socket.io-client';

const socketURL = 'https://bughunt-website.herokuapp.com';
class SocketManagerClient {
  constructor(){
    this.socket='';
    this.socketFile='';
    this.connectedSocket='';
    this.uploader='';
  }
  getSocket = () => {
    return this.socket;
  }
  initSocketUser = (chatId) => {
    this.socket = io(socketURL + '/' + chatId);
  }
}

let socketManagerClient = new SocketManagerClient();
export default socketManagerClient;