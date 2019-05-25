import React, { Component } from 'react';
import { withAuth } from '../../src/lib/AuthProvider';

import socketManagerClient from "../socketClient";

class Chat extends Component {

  state={
    message:"",
    messageList: [],
    firstGet: true
  }

  componentDidMount(){
    
  }

  handleChange = (event) =>{
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleSendMessage = (event) => {
  
  }

  handleGetMessages = () => {

  
  }

  render() {

    const formatedMessages = this.state.messageList.map(message => {
      if(this.props.user.type === message.type){
        return <div key={''+message.time} className="message-text right-message"><p className="text-message"  >{message.text}</p><div className="arrow-right"></div></div>
      }else{
        return <div key={''+message.time} className="message-text left-message"><div className="arrow-left"></div><p className="text-message left"  >{message.text}</p></div>
      }
      
    })

    

    return (
      <div>
        <div>
          <div  className="message-box">
          {formatedMessages}
          <div style={{ float:"left", clear: "both" }}
             ref={(el) => { this.messagesEnd = el; }}>
          </div>
          </div>
          
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
