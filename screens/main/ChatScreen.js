import React from 'react'
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native'
import { GiftedChat, Bubble, MessageText, Day, Composer, SystemMessage, Send, InputToolbar, GiftedAvatar} from 'react-native-gifted-chat';
import Space from '../../components/Space';

export default class ChatScreen extends React.Component {
  state = {
    messages: [],
    user: {},
  }
  static navigationOptions = {
    header: null,
  };
  componentDidMount() {
    this.setState({

      user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any',
        //hier mihilfe von API alte Nachrichten laden
      },
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),

        },

        {
          _id: 42,
          text: 'This is a system message',
          createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
          system: true,
          // Any additional custom parameters are passed through
        },
        {
          _id: 3,
          text: 'This is a quick reply. Do you love Gifted Chat? (radio) KEEP IT',
          createdAt: new Date(),
          quickReplies: {
            type: 'radio', // or 'checkbox',
            keepIt: true,
            values: [
              {
                title: '😋 Yes',
                value: 'yes',
              },
              {
                title: '📷 Yes, let me show you with a picture!',
                value: 'yes_picture',
              },
              {
                title: '😞 Nope. What?',
                value: 'no',
              },
            ],
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
        width: 95,
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
        backgroundColor: 'rgba(0, 0, 0, 0.15)',
        fontFamily: 'monserrat',
        color:'#FFF',
        fontSize: 13,
        borderRadius: 30,
        paddingLeft: 20,
        marginBottom: 7,

      }}
      placeholderTextColor={
        "#FFF"
      }
      />
    )
  }

  renderSystemMessage (props){
    return(
      <SystemMessage
      {...props}
      textStyle={{
        color:'#FFF',
        fontFamily: "monserrat",
        fontSize: 12
      }}
      />

    )
  }

  renderInputToolbar (props){
    return(
      <InputToolbar
      {...props}
      containerStyle={{
        backgroundColor:'#FA7268',
        borderTopColor: '#FA7268',
        borderTopWidth: 1
      }}
      composerHeight={45}
      />


    )
  }

  renderSend (props){
    return(
      <Send
      {...props}
      >
      <View style={{
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 300,
        margin: 7,

      }}>
      <Image
      source={require('../../assets/images/Send.png')}
      resizeMode={'center'}
      style={{
        height: 25,
        width: 25,
        margin: 10,
        aspectRatio: 1
      }}/>

      </View>
      </Send>
    )
  }

  renderChatFooter (props){
    return(
      <View style={{
        backgroundColor:'#FA7268',
        height: 110,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        flexDirection: 'row',
        paddingBottom: 15,

      }}>
      <View style={{flex: 1, justifyContent: 'center'}}>
      <Space/>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
      <TouchableOpacity style={{
        backgroundColor: 'rgba(0, 0, 0, 0.15)',
        height: 40,
        width: 40,
        borderRadius: 100,
        left: 5
      }}
      //onPress={() => this.props.navigation.navigate('Home')} <- Hier zurückbutton implementieren
      >
      <Image
      source={require('../../assets/images/Back.png')}
      resizeMode={'center'}
      style={{
        height: 23,
        width: 23,
        margin: 10,
        aspectRatio: 1
      }}/>
      </TouchableOpacity>
      </View>
      <Space/>
      </View>
      <View style={{flex: 5,
        flexDirection: 'row',
        margin: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.15)',
        borderRadius: 20
      }}>
      <GiftedAvatar
      user= {{
        _id: 2,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any',}}
        avatarStyle={{
          height: 60,
          width: 60,
          borderRadius: 100,
          margin: 7
        }}
        />
        <View style={{flexDirection: 'column',flex: 1,}}>
        <Space/>
        <Text style={{
          color: 'rgba(255,255,255,0.5);',
          fontFamily: 'monserrat-bold',
          fontSize: 20 ,
          flex: 1,
          paddingLeft: 20
        }}>
          USer adfjldlf
          </Text>
          <Space/>
          </View>
          </View>
          <Space/>
          </View>
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
          renderSystemMessage={this.renderSystemMessage}
          renderAvatar={null}   //Das könnte ein ProblemKind sein, er könnte dich überfallen wenn er ausgewachsen ist
          alwaysShowSend={true}
          renderInputToolbar={this.renderInputToolbar}
          renderSend={this.renderSend}
          renderComposer={this.renderComposer}
          renderChatFooter={this.renderChatFooter}

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
