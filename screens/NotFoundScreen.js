import React, { Component } from 'react';
import { Container, Form, Picker, Icon, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import { StyleSheet, View, ProgressBarAndroid, H1 } from 'react-native';
import { TouchableOpacity, Image, Dimensions } from 'react-native';


const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default class NotFoundScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Container>
                <View style={styles.header}>
                    <Text style={styles.textTitle}>Không tìm thấy trang</Text>
                </View>
                <View style={styles.errorContainerImage}>
                    <Image
                        source={require('../assets/images/error.png')}
                        style={styles.errorImage}
                    />
                </View>
                <View style={styles.errorContainerText}>
                    <Text style={styles.errorTitle}>Không tìm thấy trang</Text>
                    <Text style={styles.errorApology}>Rất tiếc, tính năng còn đang phát triển</Text>
                    <Text style={styles.errorSuggest}>Chúng tôi vẫn đang phát triển chức năng này, bạn vui lòng thử lại sau nhé.</Text>
                </View>
                <Button
                    style={styles.errorContainerButton}
                    onPress={() => { redirectHome(this.props) }}
                >
                    <Text style={styles.buttonText}>Trở về trang chủ</Text>
                </Button>
            </Container>
        )
    }
}

function redirectHome(props) {
    console.log(props);
    props.navigation.navigate('Details');
}

const styles = StyleSheet.create({
    header: {
        flex: 0.1,
        backgroundColor: '#0AFAD5',
        // height: 65,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 10,
    },
    textTitle: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold'
    },
    errorContainerImage: {
        flex: 0.6,
        alignItems: 'center',
    },
    errorImage: {
        width: viewportWidth - 130,
        height: viewportWidth + 30,
    },
    errorContainerText: {
        flex: 0.15,
        marginHorizontal: 30,
    },
    errorTitle: {
        color: '#1D3557',
        fontSize: 32,
        fontWeight: 'bold'
    },
    errorApology: {
        color: '#003459',
        fontSize: 18,
        fontWeight: 'bold'
    },
    errorSuggest: {
        color: 'black',
        fontSize: 14
    },
    errorContainerButton: {
        flex: 0.07,
        backgroundColor: '#0AFAD5',
        marginVertical: 5,
        marginRight: 30,
        marginLeft: 30,
        justifyContent: 'center',
        borderRadius: 30
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700'
    }
});


