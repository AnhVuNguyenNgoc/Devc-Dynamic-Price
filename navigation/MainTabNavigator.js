import React from 'react';
import { Platform, Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import InventoryScreen from '../screens/InventoryScreen';
import OrderScreen from '../screens/OrderScreen';
import SettingsScreen from '../screens/SettingsScreen';
import DetailScreen from '../screens/DetailScreen';
import HomeScreen from '../screens/HomeScreen';

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

const HomeStack = createStackNavigator({
        Home: HomeScreen,
    },
    config
); {
    /* <TabBarIcon focused = { focused }
            name = {
                Platform.OS === 'ios' ?
                `ios-basket${focused ? '' : '-outline'}` :
                    'md-basket'
            }
            /> */
}
HomeStack.navigationOptions = {
    tabBarLabel: 'Trang chủ',
    tabBarOptions: { showIcon: true, activeTintColor: '#06D6A0', },
    tabBarIcon: ({ focused }) => {
        if (focused) {
            return <Image source = { require("../assets/images/DevC/DevC/btnhome.png") }
            style = {
                { width: 34, height: 34 }
            }
            />
        }
        return <Image source = { require("../assets/images/DevC/DevC/btnhome_na.png") }
        style = {
            { width: 34, height: 34 }
        }
        />
    },
};

HomeStack.path = '';

InventoryStack.navigationOptions = {
    tabBarLabel: 'Tồn kho',
    tabBarOptions: { showIcon: true, activeTintColor: '#06D6A0', },
    tabBarIcon: ({ focused }) => {
        if (focused) {
            return <Image source = { require("../assets/images/DevC/DevC/btninventory.png") }
            style = {
                { width: 34, height: 34 }
            }
            />
        }
        return <Image source = { require("../assets/images/DevC/DevC/btninventory_na.png") }
        style = {
            { width: 34, height: 34 }
        }
        />
    },
};

InventoryStack.path = '';

const OrdersStack = createStackNavigator({
        Orders: OrderScreen,
    },
    config
);

OrdersStack.navigationOptions = {
    tabBarLabel: 'Đơn hàng',
    tabBarOptions: { showIcon: true, activeTintColor: '#06D6A0', },
    tabBarIcon: ({ focused }) => {
        if (focused) {
            return <Image source = { require("../assets/images/DevC/DevC/btnbill.png") }
            style = {
                { width: 34, height: 34 }
            }
            />
        }
        return <Image source = { require("../assets/images/DevC/DevC/btnbill_na.png") }
        style = {
            { width: 34, height: 34 }
        }
        />
    },
};

OrdersStack.path = '';

const SettingsStack = createStackNavigator({
        Settings: SettingsScreen,
    },
    config
);

SettingsStack.navigationOptions = {
    tabBarLabel: 'Cài đặt',
    tabBarOptions: { showIcon: true, activeTintColor: '#06D6A0', },
    tabBarIcon: ({ focused }) => {
        if (focused) {
            return <Image source = { require("../assets/images/DevC/DevC/btnsetting.png") }
            style = {
                { width: 34, height: 34 }
            }
            />
        }
        return <Image source = { require("../assets/images/DevC/DevC/btnsetting_na.png") }
        style = {
            { width: 34, height: 34 }
        }
        />
    },
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
    HomeStack,
    InventoryStack,
    OrdersStack,
    SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;