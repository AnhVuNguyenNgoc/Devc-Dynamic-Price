import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import Login from '../screens/LoginScreen'
import NotFoundScreen from '../screens/NotFoundScreen'

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    // Main: MainTabNavigator,
    Main: Login,
    Details: MainTabNavigator,
    Errors: NotFoundScreen,
  })
);
