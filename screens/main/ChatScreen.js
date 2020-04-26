import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import { GiftedChat, Bubble, MessageText, Day, Composer } from 'react-native-gifted-chat'

export default class ChatScreen extends React.Component {
  state = {
    messages: [],
  }
  static navigationOptions = {
    header: null,
  };
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

  renderMessageText (props){
   return(
   <MessageText
       {...props}
       customTextStyle={{
         color:'#FFF',
         fontFamily: "monserrat",
         fontSize: 13
       }}
     />
   );
  }

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

  renderDay (props){
    return(
      <Day
        {...props}
          containerStyle={{
            backgroundColor: '#FA7268',
            height: 24,
            width: 123,
            alignSelf: 'center',
            borderRadius: 15
          }}
          textStyle={{
            color:'#FFF',
            fontFamily: "monserrat-bold",
            fontSize: 11
          }}
      />
    )
  }

  renderComposer (props){
    return(
      <Composer
        {...props}
          textInputStyle={{
            backgroundColor: 'rgba(250, 114, 104, 0.7)',
            fontFamily: 'monserrat',
            color:'#FFF',
            fontSize: 14,
            borderRadius: 30,
            
          }}
          placeholderTextColor={
            "#FFF"
          }
      />
    )
  }


  render() {
    return (
      <View style={styles.container}>
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
        renderBubble={this.renderBubble}
        placeholder={'Hier tippen um zu schreiben'}
        renderMessageText={this.renderMessageText}
        renderDay={this.renderDay}
        timeFormat={"HH:mm"}
        dateFormat={"DD.MM.YYYY"}
        renderComposer={this.renderComposer}
      />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151515',
  }
});
