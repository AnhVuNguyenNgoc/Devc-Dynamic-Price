import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, Dimensions, KeyboardAvoidingView } from 'react-native';
import { Item, Input, Button } from 'native-base'

import { facebookLogIn } from '../components/OtherLogin'

export default class OtherLogin extends Component {
    render() {
        return (
            <View>
                <Text style={styles.inputText}>Hoặc</Text>
                <Button
                    iconLeft
                    rounded
                    style={styles.buttonContainer}
                    onPress={() => facebookLogIn()}
                >
                    <Image
                        style={styles.image}
                        source={require('../assets/images/icon-facebook.png')}
                    />
                    <Text style={styles.buttonText}>Đăng nhập bằng Facebook</Text>
                </Button>
                <Button transparent style={styles.forgotContainer}>
                    <Text style={[styles.inputText, { color: '#3B5998' }]}>Quên mật khẩu?</Text>
                </Button>
            </View>
        )
    }
}

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
    inputText: {
        color: '#C4C4C4',
        paddingHorizontal: 10,
        fontSize: 20,
        textAlign: 'center'
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    image: {
        width: 60,
        height: 60,
    },
    forgotContainer: {
        marginTop: 70,
        justifyContent: 'center'
    },
    buttonContainer: {
        backgroundColor: '#3B5998',
        height: 60,
        marginVertical: 15,
        marginHorizontal: 30,
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700'
    }
})