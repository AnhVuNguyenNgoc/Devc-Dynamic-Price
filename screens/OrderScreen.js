import React, { Component } from 'react';
import { Container, DatePicker, Form, Picker, Icon, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import { StyleSheet, View, ProgressBarAndroid, Image } from 'react-native';
import EventEmitter from 'events'
import firebase from '../constants/firebase'
let INVENTORY_PRODUCT = [

]

// {
//     'orderId': '#10001',
//     'date': '30/09/2019 2.30 PM',
//     'status': 'Đã thanh toán',
//     'totalAmount': '1400000'
//     , 'imgURL': require('../assets/images/bitis_hunter_x_2019_black.jpg')
// },
// {
//     'orderId': '#10002',
//     'date': '29/09/2019 2.30 PM',
//     'status': 'Đã thanh toán',
//     'totalAmount': '1400000'
//     , 'imgURL': require('../assets/images/bitis_hunter_x_2019.jpg')
// },

var imgArr = [
    {
        'black': require('../assets/images/bitis_hunter_x_2019_black.jpg')
    },
    {
        'white': require('../assets/images/bitis_hunter_x_2019_black.jpg')
    }
]
export default class OrderScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inventoryProduct: [],
            selectedCategory: undefined,
            selectedPrice: undefined,
            inventoryLength: null
        };

        this.updateInventoryEvent = new EventEmitter()
    }

    componentWillMount() {
        this.updateInventoryEvent.addListener("updateInventory", (inventory) => {
            this.updateInventory(inventory)
        })
        // this.writeOrderData("100002", "30/09/2019 2.30 PM", "Đã thanh toán", "1.400.000", '../assets/images/bitis_hunter_x_2019_black.jpg')
        let orderArr = this.readOnceListOrderData()
    }

    componentDidMount(){
        this.readUpdatedOrderData()
    }
    writeOrderData = (orderId, date, status, totalAmount, imgURL) => {
        firebase.database().ref('orders/' + orderId).set({
            orderId: orderId,
            date: date,
            status: status,
            totalAmount: totalAmount,
            imgURL: imgURL
        });
    }

    readOnceListOrderData = () => {
        firebase.database().ref('orders').once('value').then((snapshot) => {
            if (snapshot) {
                let orderArr = []
                snapshot.forEach(function (childSnapshot) {

                    if (childSnapshot && childSnapshot.val()) {
                        let childData = childSnapshot.val();
                        let { orderId, date, status, totalAmount } = childSnapshot.val()
                        if (orderId && date && status && totalAmount) {
                            order = {
                                'orderId': orderId,
                                'date': date,
                                'status': status,
                                'totalAmount': totalAmount,
                                'imgURL': require('../assets/images/bitis_hunter_x_2019_black.jpg')
                            }
                            orderArr.push(order)
                        }
                    }
                });
                this.setState({
                    inventoryProduct: orderArr,
                    inventoryLength: orderArr.length
                })
            }
            return null
        });
    }

    readUpdatedOrderData = () => {
        return firebase.database().ref("orders").on('value', function (snapshot) {
            // Do whatever

            //if length > inventoryLength  
            // update price
            // if()
            if(snapshot){
                var size = Object.keys(snapshot.val()).length;
                if(this.state.inventoryLength){
                    if(size > this.state.inventoryLength){
    
                    }
                }
            }
        });
    }


    renderListInventory() {
        if (this.state.inventoryProduct) {
            return this.state.inventoryProduct.map((item) => {
                return (
                    <ListItem thumbnail key={item.id} style={{ borderWidth: 0 }}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Left>
                                <Thumbnail style={{ width: 80, height: 80 }} source={item.imgURL} />
                            </Left>
                            <Body>
                                <Text style={{ color: '#003459', fontSize: 18 }}>{item.orderId}</Text>
                                <Text note numberOfLines={1} style={{ color: '#DCD7D7', fontSize: 13 }}>{item.date}</Text>
                                <Text note numberOfLines={1} style={{ color: '#E63946', fontSize: 16 }}>{item.status}</Text>
                            </Body>
                        </View>
                        <Right style={{ width: 100 }}>
                            <Text note numberOfLines={1} style={{ color: '#20E347', fontSize: 16 }}>{item.totalAmount}đ</Text>
                        </Right>
                    </ListItem>
                )
            })
        }

        return (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text>Không có sản phẫm !!</Text>
            </View>
        );
    }

    onCategoryChange = (selectedCategory) => {
        selectedCategory ? selectedCategory : null
        if (selectedCategory != "all") {
            let inventoryProductFilter = INVENTORY_PRODUCT.filter((inventory) => {
                return inventory.name == selectedCategory
            })
            this.setState({ inventoryProduct: inventoryProductFilter, selectedCategory })
        } else {
            console.log("all")
            this.setState({ inventoryProduct: INVENTORY_PRODUCT, selectedCategory: "all" })
        }
    }

    render() {
        return (
            <Container>
                <Content style={{ backgroundColor: '#DEDEDE' }}>
                    <View style={{ paddingHorizontal: 15, marginVertical: 10, backgroundColor: 'white' }}>
                        <Form style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                            <Image style={{
                                width: 30,
                                height: 30,
                                backgroundColor: '#DEDEDE',
                                resizeMode: 'stretch'
                            }} source={require("../assets/images/filter.png")} />
                            <Picker
                                mode="dropdown"
                                style={{ width: 70, height: 50 }}
                                selectedValue={this.state.selectedCategory}
                                onValueChange={this.onCategoryChange}
                            >
                                <Picker.Item label="Tình trạng" value="all" />
                                <Picker.Item label="Đang giao hàng" value="isShipping" />
                                <Picker.Item label="Đã thanh toán" value="checkout" />
                                <Picker.Item label="Đã hủy" value="cancel" />
                            </Picker>
                            <DatePicker
                                defaultDate={new Date(2018, 4, 4)}
                                minimumDate={new Date(2018, 1, 1)}
                                maximumDate={new Date(2018, 12, 31)}
                                locale={"en"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText="Select date"
                                textStyle={{ color: "green" }}
                                placeHolderTextStyle={{ color: "#d3d3d3" }}
                                onDateChange={this.setDate}
                                disabled={false}
                            />
                        </Form>
                    </View>

                    <List style={{ backgroundColor: 'white' }}>
                        {this.renderListInventory()}
                    </List>
                </Content>
            </Container>
        )
    }
}

OrderScreen.navigationOptions = {
    title: 'Đơn hàng',
    headerStyle: {
        backgroundColor: '#0AFAD5',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    }

};

