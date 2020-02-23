import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import * as Font from 'expo-font';


export default class Preregister extends React.Component {
    componentDidMount() {
        Font.loadAsync({
            'monserrat-bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
            'monserrat': require('../../assets/fonts/Montserrat-Regular.ttf'),
        });
    }
    static navigationOptions = {
        header: null,
    };
    render() {

        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.contentContainer}>
                    <View style={styles.welcome}>
                        <View style={styles.space}></View>
                        <View style={styles.space}>
                            <View style={styles.space}></View>
                            <Image source={require('../../assets/images/Group1(1).png')} style={styles.image}></Image>
                            <View style={styles.space}></View>
                            <Text style={styles.text3}>humba.</Text>
                            <View style={styles.space}></View>

                        </View>
                        <View style={styles.space}>
                            <View style={styles.space}></View>
                            <Text style={styles.text2}>Deine freie Zeit ist wertvoll. Nutze sie.</Text>
                            <View style={styles.space}></View>
                        </View>
                        <View style={styles.space}>
                            <View style={styles.space}></View>
                            <Text style={styles.text}>humba ist die App mit der du deine Freistunde oder Pause endlich sinnvoller verbringen kannst. Suche einfach Andere, die auch frei haben, lerne neue Menschen kennen, lass dir von uns Aktivitäten vorschlagen oder gehe günstiger bei unseren Partnern essen.</Text>
                            <View style={styles.space}></View>
                        </View>
                    </View>
                    <View style={styles.space}>
                        <View style={styles.space}></View>
                        <View style={styles.buttonContainer}>
                            <View style={styles.space}></View>
                            <TouchableOpacity style={styles.button} onPress={this._Registerasync}>
                                <Text style={styles.buttonText}>Ich möchte das!</Text>
                            </TouchableOpacity>
                            <View style={styles.space}></View>

                        </View>
                        <View style={styles.space}></View>
                    </View>

                </View>
            </SafeAreaView>
        );

    }

    _Registerasync = async () => {

        this.props.navigation.navigate('Register');
    }

}






//Style
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#151515',

        //backgroundColor: 'black'

    },
    space: {
        flex: 1,
        flexDirection: 'row'
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'column',

    },
    welcome: {
        flex: 5,
        flexDirection: 'column'
    },
    buttonContainer: {
        flex: 7,
        flexDirection: 'column',

    },
    button: {
        flex: 2,
        backgroundColor: '#FA7268',
        borderRadius: 10,


        justifyContent: 'center'

    },
    button2: {
        flex: 4,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 10,
        justifyContent: 'center'

    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'monserrat-bold',
        fontSize: 17,
    },
    image: {
        flex: 10,
        resizeMode: 'contain',
        height: 100,
        width: 100
    },
    text: {
        flex: 10,
        color: 'white',
        fontFamily: 'monserrat-bold',
        fontSize:12
    },
    text2: {
        flex: 10,
        color: 'white',
        fontFamily: 'monserrat-bold',
        fontSize: 35
    },
    text3: {
        flex: 10,
        color: '#FA7268',
        fontFamily: 'monserrat-bold',
        fontSize: 40
    },

});
