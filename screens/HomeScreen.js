import React, { Component } from 'react';
import { Container, Form, Picker, Icon, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import { StyleSheet, View, ProgressBarAndroid, H1 } from 'react-native';
import { TouchableOpacity, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

let inventoryProduct = [
    {
        'id': 1,
        'title': 'Sản phẩm bán chạy',
        'name': 'Bitis Hunter 2019',
        'image': require('../assets/images/bitis1.jpg'),
        'price': 900000
    },
    {
        'id': 2,
        'title': 'Sản phẩm tồn kho',
        'name': 'Dép bitis',
        'image': require('../assets/images/bitis2.jpg'),
        'price': 900000
    },
    {
        'id': 3,
        'title': 'Sản phẩm còn nhiều',
        'name': 'Bitis Hunter 2017',
        'image': require('../assets/images/bitis3.jpg'),
        'price': 900000
    },
]
let linkIcon = {
    iconModify: require('../assets/images/i_time.png'),
    iconVerify: require('../assets/images/i_verified.png'),
    iconCancel: require('../assets/images/i_cancel.png'),
    iconDelivery: require('../assets/images/i_delivery.png'),
    iconInvoice: require('../assets/images/i_invoice.png'),
    iconStore: require('../assets/images/i_store.png'),
}
let storage = {
    modify: 15,
    verify: 5,
    cancel: 0,
    delivery: 15,
    invoice: 15,
    store: 0
}
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: undefined
        };
    }

    onValueChange(value) {
        this.setState({
            selected: value
        });
    }

    renderStatusView() {
        return (
            <View>
                <View>
                    <Text style={styles.title}>Tình trạng đơn hàng</Text>
                </View>
                <View style={styles.statusContent}>
                    <View style={styles.statusRow}>
                        <TouchableOpacity
                            style={styles.statusDetail}
                            onPress={() => { return alert("da click") }}>
                            <Text style={styles.statusNumber}>
                                {storage.modify}
                            </Text>
                            <Image
                                source={linkIcon.iconModify}
                                resizeMode="stretch"
                                style={styles.choiceImage}
                            />
                            <Text>
                                Chờ xử lý
                                    </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.statusDetail}
                            onPress={() => { return alert("da click 2") }}>
                            <Text style={styles.statusNumber}>
                                {storage.verify}
                            </Text>
                            <Image
                                source={linkIcon.iconVerify}
                                resizeMode="stretch"
                                style={styles.choiceImage}
                            />
                            <Text>
                                Đã xác nhận
                                    </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.statusDetail}
                            onPress={() => { return alert("da click 3") }}>
                            <Text style={styles.statusNumber}>
                                {storage.cancel}
                            </Text>
                            <Image
                                source={linkIcon.iconCancel}
                                resizeMode="stretch"
                                style={styles.choiceImage}
                            />
                            <Text>
                                Hủy
                                    </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.statusRow}>
                        <TouchableOpacity
                            style={styles.statusDetail}
                            onPress={() => { return alert("da click") }}>
                            <Text style={styles.statusNumber}>
                                {storage.delivery}
                            </Text>
                            <Image
                                source={linkIcon.iconDelivery}
                                resizeMode="stretch"
                                style={styles.choiceImage}
                            />
                            <Text>
                                Đang giao
                                    </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.statusDetail}
                            onPress={() => { return alert("da click 2") }}>
                            <Text style={styles.statusNumber}>
                                {storage.invoice}
                            </Text>
                            <Image
                                source={linkIcon.iconInvoice}
                                resizeMode="stretch"
                                style={styles.choiceImage}
                            />
                            <Text>
                                Hoàn tất
                                    </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.statusDetail}
                            onPress={() => { return alert("da click 3") }}>
                            <Text style={styles.statusNumber}>
                                {storage.store}
                            </Text>
                            <Image
                                source={linkIcon.iconStore}
                                resizeMode="stretch"
                                style={styles.choiceImage}
                            />
                            <Text>Chuyển cửa hàng</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    _renderProduct({ item, index }) {
        return (
            <View style={styles.todayDetail}>
                <Image
                    source={item.image}
                    resizeMode="stretch"
                    style={styles.swipeImage}
                />
                <Text style={styles.todayTextTitle}>
                    {item.title}
                </Text>
                <Text style={styles.todayText}>
                    {item.name}
                </Text>
                <Button rounded danger style={styles.todayButton}>
                    <Text>     Xem thêm     </Text>
                </Button>
            </View>
        );
    }

    renderCarousel(dataRender, fnRender) {
        return (
            <Carousel
                // ref={(c) => { this._carousel = c; }}
                data={dataRender}
                renderItem={fnRender}
                sliderWidth={viewportWidth - 80}
                itemWidth={viewportWidth - 80}
                loop={true}
                inactiveSlideScale={0.94}
                inactiveSlideOpacity={0.7}
                containerCustomStyle={styles.slider}
                contentContainerCustomStyle={styles.sliderContentContainer}
                layout={'default'}
            />
        )
    }

    renderTodayView() {
        return (
            <View>
                <View>
                    <Text style={styles.title}>Hôm nay thế nào?</Text>
                </View>
                <View>
                    {this.renderCarousel(inventoryProduct, this._renderProduct)}
                </View>
            </View>
        );
    }

    // _renderChart({ item, index }) {
    //     return (
    //         <View style={styles.todayDetail}>
    //             <Text style={styles.todayText}>Sản phẩm bán chạy</Text>
    //             <Image
    //                 source={item.image}
    //                 resizeMode="stretch"
    //                 style={styles.swipeImage}
    //             />
    //         </View>
    //     );
    // }

    // renderBrief() {
    //     return (
    //         <View>
    //             <View>
    //                 <Text style={styles.title}>Hôm nay thế nào?</Text>
    //             </View>
    //             <View>
    //                 {this.renderCarousel(inventoryProduct, this._renderImage)}
    //             </View>
    //         </View>
    //     );
    // }

    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <View style={styles.weather}>

                        </View>
                        <View style={styles.status}>
                            {this.renderStatusView()}
                        </View>
                        <View style={styles.status}>
                            {this.renderTodayView()}
                        </View>
                        <View style={styles.brief}>

                        </View>
                    </List>
                </Content>
            </Container>
        )
    }
}

HomeScreen.navigationOptions = {
    title: 'Trang chủ',
    headerStyle: {
        backgroundColor: '#0AFAD5',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
};

const styles = StyleSheet.create({
    weather: {
        backgroundColor: 'blue',
    },
    status: {
        marginHorizontal: 40,
        marginVertical: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    statusContent: {
        //backgroundColor: '#E8F1F2',
    },
    statusRow: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
    },
    statusDetail: {
        flex: 0.3,
    },
    statusNumber: {
        fontSize: 24,
        lineHeight: 28,
        color: '#FF686B',
    },
    today: {
        backgroundColor: 'red',
    },
    brief: {
        backgroundColor: 'blue',
    },
    title: {
        color: '#006494',
        fontSize: 25,
        marginBottom: 10,
    },
    slider: {
        marginTop: 15,
        marginHorizontal: 10,
        overflow: 'visible' // for custom animations
    },
    sliderContentContainer: {
        marginHorizontal: 10,
        paddingVertical: 10 // for custom animation
    },
    swipeImage: {
        width: viewportWidth - 100,
        height: viewportWidth - 100,
    },
    todayDetail: {
        alignItems: "center",
        borderColor: 'grey',
        borderWidth: 1,
    },
    todayTextTitle: {
        fontSize: 22,
        color: '#081e80'
    },
    todayText: {
        fontSize: 22,
        color: '#073B4C',
        marginVertical: 7,
    },
    todayButton: {
        marginBottom: 7,
    }
});

