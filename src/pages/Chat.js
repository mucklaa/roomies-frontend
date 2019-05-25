import React, { Component } from 'react';
import { withAuth } from '../../src/lib/AuthProvider';
import chatService from "./../lib/chat-service";

import socketManagerClient from "../socketClient";

class Chat extends Component {

  state={
    message: '',
    messageList: [],
  }

  componentDidMount(){
    this.handleGetMessages(this.props.user.flat)
    socketManagerClient.initSocketUser(this.props.user.flat);
    let socket = socketManagerClient.getSocket();
    console.log('socket', socket);
    socket.on('NEW_MESSAGE', () => {
       this.handleGetMessages();
    });
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
        return (
          <div key={index}>
            <p className="text-message">{message.user}: {message.text}</p>
          </div>
        )
    })
    return (
      <div>
        <div>
          <div className="message-box">{formatedMessages}</div>
        </div>
        <form onSubmit={this.handleSendMessage} className="message-form">
          <input autoComplete="off" className="input message-input" placeholder="Write a message" type="text" name="message" onChange={this.handleChange} value={this.state.message}/>
          <input className="button message-button" type="submit" value="Send" />
        </form>
      </div>
    )
  }
}

export default withAuth(Chat);
