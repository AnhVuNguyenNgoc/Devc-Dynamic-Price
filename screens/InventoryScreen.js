import React, { Component } from 'react';
import { Container, Form, Picker, Icon, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import { StyleSheet, View, ProgressBarAndroid } from 'react-native';
let inventoryProduct = [
  {
    'id': 1,
    'name': 'Bitis Hunter 2018',
    'image': require('../assets/images/bitis_hunter_x_2019.jpg'),
    'price': 900000
  },
  {
    'id': 2,
    'name': 'Bitis Hunter 2019',
    'image': require('../assets/images/bitis_hunter_x_2019.jpg'),
    'price': 900000
  },
  {
    'id': 3,
    'name': 'Bitis Hunter 2020',
    'image': require('../assets/images/bitis_hunter_x_2019.jpg'),
    'price': 900000
  },
  {
    'id': 4,
    'name': 'Bitis Hunter 2021',
    'image':require('../assets/images/bitis_hunter_x_2019.jpg'),
    'price': 900000
  },
]

export default class InventoryScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: undefined
    };
  }

  renderListInventory() {
    return inventoryProduct.map((item) => {
      return (
        <ListItem thumbnail key={item.id} style={{ borderWidth: 0}}>
          <View style={{ flex: 1, flexDirection: 'column' }} >
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Left>
                <Thumbnail square source={item.image} />
              </Left>
              <Body>
                <Text>{item.name}</Text>
                <Text note numberOfLines={1} style={{ color: 'green' }}>{item.price} VNĐ</Text>
              </Body>
            </View>
            <View style={{ flex: 1, backgroundColor: 'yellow', height: 10 }}>
              <ProgressBarAndroid styleAttr="Horizontal" color="#2196F3" />
            </View>
          </View>
          <Right  style={{ borderBottomWidth: 0}}>
            <Button transparent onPress={() => this.props.navigation.navigate('Detail')}>
              <Text>THAY ĐỔI GIÁ</Text>
            </Button>
          </Right>
        </ListItem>
      )
    })
  }

  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }

  render() {
    return (
      <Container>

        <Content>
          <Form style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, backgroundColor: '#DEDEDE' }}>
            <Icon name='funnel' />
            <Picker
              mode="dropdown"
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Loại" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
              <Picker.Item label="Bitis Hunter X" value="key0" />
            </Picker>
            <Picker
              mode="dropdown"
              style={{ width: 50 }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Số lượng" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>
          </Form>
          <List>
            {this.renderListInventory()}
          </List>
        </Content>
      </Container>
    )
  }
}

InventoryScreen.navigationOptions = {
  title: 'Inventory'
};

