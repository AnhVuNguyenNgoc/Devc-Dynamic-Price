import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import InventoryScreen from '../screens/InventoryScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import DetailScreen from '../screens/DetailScreen';

const config = Platform.select({
    web: { headerMode: 'screen' },
    default: {},
});

const InventoryStack = createStackNavigator({
        Home: InventoryScreen,
        Detail: DetailScreen
    },
    config
);

InventoryStack.navigationOptions = {
    tabBarLabel: 'Inventory',
    tabBarIcon: ({ focused }) => ( <
        TabBarIcon focused = { focused }
        name = {
            Platform.OS === 'ios' ?
            `ios-basket${focused ? '' : '-outline'}` :
                'md-basket'
        }
        />
    ),
};

InventoryStack.path = '';

const LinksStack = createStackNavigator({
        Links: LinksScreen,
    },
    config
);

LinksStack.navigationOptions = {
    tabBarLabel: 'Dashboard',
    tabBarIcon: ({ focused }) => ( <
        TabBarIcon focused = { focused }
        name = { Platform.OS === 'ios' ? 'ios-trending-up' : 'md-trending-up' }
        />
    ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator({
        Settings: SettingsScreen,
    },
    config
);

SettingsStack.navigationOptions = {
    tabBarLabel: 'Settings',
    tabBarIcon: ({ focused }) => ( <
        TabBarIcon focused = { focused }
        name = { Platform.OS === 'ios' ? 'ios-options' : 'md-options' }
        />
    ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
    InventoryStack,
    LinksStack,
    SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;