import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

import LoginForm from './LoginForm'
import OtherLogin from './OtherLogin'

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../assets/images/semi-logo.png')}
                    />
                    <Text style={styles.title}>
                        Semi Carry iz da best
                    </Text>
                </View>
                <View style={styles.formContainer}>
                    <LoginForm navigateMain={this.props.navigation} />
                </View>
                <View style={styles.otherLogin}>
                    <OtherLogin navigateMain={this.props.navigation} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logoContainer: {
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 120,
        height: 120
    },
    title: {
        marginTop: 10,
        color: '#ff4405',
        fontSize: 20,
        textAlign: 'center',
        opacity: 0.9
    },
    formContainer: {
        flex: 0.3
    },
    otherLogin: {
        flex: 0.4
    }
})