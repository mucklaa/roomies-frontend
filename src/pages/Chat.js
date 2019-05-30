import React, { Component } from 'react';
import { withAuth } from '../../src/lib/AuthProvider';
import chatService from "./../lib/chat-service";
import NavbarFooter from "./../components/NavbarFooter";
import Logout from "./../components/buttons/LogoutButton";
import io from 'socket.io-client';
import './../css/Chat.css'

class Chat extends Component {

  state = {
    message: '',
    messageList: [],
    socket: io(`${process.env.REACT_APP_API_URL}/user/chat/${this.props.user.flat}`),
    pathPage: "chat",
  }

  componentDidMount(){
    this.handleGetMessages(this.props.user.flat)
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
              <p className="message-text">{message.text}</p>
              <div>
                <p className="initials-chat initials-light margin-null">{message.user[0]}</p>
                <p className="chat-name">{message.user}</p>
              </div>
            </div>
              {<p className="chat-time">{`${(message.createdAt).split('T')[0]} ${(message.createdAt).split('T')[1].split('.')[0]}`}</p>}
          </div>
        )
      } else {
        return (
          <div key={index}>
            <div className="left-message">
             <div>
                <p className="initials-chat margin-null">{message.user[0]}</p>
                <p className="chat-name">{message.user}</p>
              </div>
              <p className="message-text">{message.text}</p>
            </div>
            { <p className="chat-time text-align-left">{`${(message.createdAt).split('T')[0]} ${(message.createdAt).split('T')[1].split('.')[0]}`}</p> }
          </div>
        )
      }
    })
    return (
      <div id="main-body">
        <Logout />
        <div className="header">
          <h1 className="header-h1">Chat</h1>
        </div>
        <div className="margin-from-fixed-header">
        <div className="fixed-bottom">
          <div>
            <div className="message-box"><div className="message-box-scroll">{formatedMessages}</div></div>
          </div>
          <form onSubmit={this.handleSendMessage} className="message-form">
            <input autoComplete="off" className="input message-input" placeholder="Write a message" type="text" name="message" onChange={this.handleChange} value={this.state.message}/>
            <button className="button message-button" type="submit"><img src="/send.png" alt="Send" width="20px"/></button>
          </form>
        </div>
        </div>
        <NavbarFooter pathPage={this.state.pathPage}/>
      </div>
    )
  }
}

export default withAuth(Chat);
