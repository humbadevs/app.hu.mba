import React from 'react'
import {StyleSheet, Text} from 'react-native'
import { GiftedChat, Bubble } from 'react-native-gifted-chat'

export default class ChatScreen extends React.Component {
  state = {
    messages: [],
  }

  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
            //hier mihilfe von API alte Nachrichten laden
          },
        },
      ],
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  //renderMessageText (props){
  //  return(
  //  <Text
  //      {...props}
  //      style={{
  //        color:'#FFF'
  //      }}
  //    />
  //  );
  //}

  renderBubble (props) {
    return(
    <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#FA7268',
          },
          left: {
            backgroundColor: '#252525',
          }
        }}
      />
    );
  }


  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
        renderBubble={this.renderBubble}
        placeholder={'test'}
        renderMessageText={this.renderMessageText}
      />
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151515',
  }
});
