import React, { Component } from 'react';
import { withAuth } from '../../src/lib/AuthProvider';
import chatService from "./../lib/chat-service";
import io from 'socket.io-client';
import NavbarFooter from "./../components/NavbarFooter";
import './../css/Chat.css'
import Logout from "./../components/buttons/LogoutButton";

class Chat extends Component {

  state = {
    message: '',
    messageList: [],
    socket: io('http://localhost:5000/user/chat/'+this.props.user.flat)
  }

  componentDidMount(){
    this.handleGetMessages(this.props.user.flat)
    console.log('socket', this.state.socket);
    this.state.socket.on('NEW_MESSAGE', () => {
       this.handleGetMessages();
    });
  }

  componentWillUnmount(){
    this.state.socket.disconnect()
  }

  handleChange = (event) =>{
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleSendMessage = (event) => {
    event.preventDefault()
    chatService.sendMessage(this.props.user.flat, this.state.message)
      .then((apiResponse) => {
        console.log(apiResponse)
        this.setState({
          message: '',
          messageList: apiResponse.data.history
        })
      })
  }

  handleGetMessages = () => {
    chatService.getChat(this.props.user.flat)
      .then((apiResponse) => {
        this.setState({
          messageList: apiResponse.data.history
        })
      })
  }

  render() {
      const formatedMessages = this.state.messageList.map((message, index) => {
      if (message.user === this.props.user.username) {
        return (
          <div className="align-message-right" key={index}>
            <div className="right-message">
              <p>{message.text}</p>
              <p className="initials initials-light margin-null">{message.user[0]}</p>
            </div>
          </div>
        )
      } else {
        return (
          <div key={index}>
            <div className="left-message">
              <p className="initials margin-null">{message.user[0]}</p>
              <p>{message.text}</p>
              </div>
          </div>
        )
      }
    })
    return (
      <div id="chat-body">
        <nav className="navbar-chat">
        <Logout />
        </nav>
        <div className="fixed-bottom">
        <div>
          <div className="message-box"><div class="message-box-scroll">{formatedMessages}</div></div>
        </div>
        <form onSubmit={this.handleSendMessage} className="message-form">
          <input autoComplete="off" className="input message-input" placeholder="Write a message" type="text" name="message" onChange={this.handleChange} value={this.state.message}/>
          <button className="button message-button" type="submit"><img src="/send.png" alt="Send" width="20px"/></button>
        </form>
      </div>
      <NavbarFooter />
      </div>
    )
  }
}

export default withAuth(Chat);
