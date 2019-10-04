import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, Dimensions, KeyboardAvoidingView, TextInput } from 'react-native';
import { Item, Input, Button } from 'native-base'

export default function LoginForm(props) {
    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <Item
                rounded
                style={styles.input}
            >
                <Input
                    placeholder='Username or email'
                    placeholderTextColor='#C4C4C4'
                    style={styles.inputText}
                    keyboardType='email-address'
                />
            </Item>
            <Item
                rounded
                style={styles.input}
            >
                <Input
                    placeholder='Password'
                    placeholderTextColor='#C4C4C4'
                    style={styles.inputText}
                    secureTextEntry
                />
            </Item>
            <Button
                rounded
                info
                style={styles.buttonContainer}
                onPress={() => props.navigateMain.navigate('Details')}
            >
                <Text style={styles.buttonText}>Đăng nhập</Text>
            </Button>
        </KeyboardAvoidingView>
    )
}

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
    input: {
        height: 60,
        backgroundColor: '#ECE9F6',
        marginVertical: 5,
        // marginHorizontal: 30,
        marginLeft: 30,
        marginRight: 30,
    },
    inputText: {
        color: '#736d6b',
        paddingHorizontal: 10,
        fontSize: 20,
    },
    buttonContainer: {
        height: 60,
        backgroundColor: '#0AFAD5',
        marginVertical: 5,
        marginRight: 30,
        marginLeft: 30,
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700'
    }
})