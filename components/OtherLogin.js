import * as Facebook from 'expo-facebook';
import MainTabNavigator from '../navigation/MainTabNavigator';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export async function facebookLogIn(props) {
    try {
        const {
            type,
            token,
            expires,
            permissions,
            declinedPermissions,
        } = await Facebook.logInWithReadPermissionsAsync('1126585187528684', {
            permissions: ['public_profile'],
            email: ['email']
        });
        if (type === 'success') {
            // Get the user's name using Facebook's Graph API
            let linkGetInfo = "https://graph.facebook.com/me?access_token=" + token
            let response = await fetch(linkGetInfo);
            let info = await response.json();
            props.navigateMain.navigate('Details');
        } else {
            // type === 'cancel'
        }
    } catch ({ message }) {
        alert(`Facebook Login Error: ${message}`);
    }
}