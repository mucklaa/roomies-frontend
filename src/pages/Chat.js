import React, { Component } from 'react';
import { withAuth } from '../../src/lib/AuthProvider';
import chatService from "./../lib/chat-service";
import io from 'socket.io-client';

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
          <div key={index}>
            <p className="right-message">{message.user}: {message.text}</p>
          </div>
        )
      } else {
        return (
          <div key={index}>
            <p className="left-message">{message.user}: {message.text}</p>
          </div>
        )
      }
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
