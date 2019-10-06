import React, { Component } from 'react';
import { Container, Form, Picker, Icon, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import { StyleSheet, View, ProgressBarAndroid, Image } from 'react-native';
import EventEmitter from 'events'

let INVENTORY_PRODUCT = [
  {
    'id': 1,
    'name': 'Bitis Hunter 2018',
    'image': require('../assets/images/bitis_hunter_x_2019_black.jpg'),
    'price': '900.000',
    'producer': 'Bitis'
  },
  {
    'id': 2,
    'name': 'Bitis Hunter 2019',
    'image': require('../assets/images/bitis_hunter_x_2019.jpg'),
    'price': '900.000',
    'producer': 'Bitis'

  },
  {
    'id': 3,
    'name': 'Bitis Hunter 2020',
    'image': require('../assets/images/bitis_hunter_x_2019_orange.jpg'),
    'price': '900.000',
    'producer': 'Bitis'
  },
  {
    'id': 4,
    'name': 'Bitis Hunter 2021',
    'image': require('../assets/images/bitis_hunter_x_2019_white.jpg'),
    'price': '900.000',
    'producer': 'Bitis'
  },
  {
    'id': 5,
    'name': 'Bitis Hunter 2018',
    'image': require('../assets/images/bitis_hunter_x_2019_black.jpg'),
    'price': '900.000',
    'producer': 'Bitis'
  },
  {
    'id': 6,
    'name': 'Bitis Hunter 2019',
    'image': require('../assets/images/bitis_hunter_x_2019.jpg'),
    'price': '900.000',
    'producer': 'Bitis'
  },
  {
    'id': 7,
    'name': 'Bitis Hunter 2020',
    'image': require('../assets/images/bitis_hunter_x_2019_orange.jpg'),
    'price': '900.000',
    'producer': 'Bitis'
  },
  {
    'id': 8,
    'name': 'Bitis Hunter 2021',
    'image': require('../assets/images/bitis_hunter_x_2019_white.jpg'),
    'price': '900.000',
    'producer': 'Bitis'
  },
]

export default class InventoryScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inventoryProduct: [],
      selectedCategory: undefined,
      selectedPrice: undefined
    };

    this.updateInventoryEvent = new EventEmitter()
  }

  componentWillMount() {
    this.updateInventoryEvent.addListener("updateInventory", (inventory) => {
      this.updateInventory(inventory)
    })

    this.setState({
      inventoryProduct: INVENTORY_PRODUCT
    })
  }

  updateInventory = (_updatedInventory) => {
    if (_updatedInventory) {
      let temptInventory = Object.assign([], INVENTORY_PRODUCT);
      for (let inventory of temptInventory) {
        if (inventory.id == _updatedInventory.id) {
          inventory['price'] = _updatedInventory.price
        }
      }
      this.setState({ inventoryProduct: temptInventory })
    }
  }

  renderListInventory() {
    if (this.state.inventoryProduct) {
      return this.state.inventoryProduct.map((item) => {
        return (
          <ListItem thumbnail key={item.id} style={{ borderWidth: 0 }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Left>
                <Thumbnail style={{ width: 80, height: 80 }} source={item.image} />
              </Left>
              <Body>
                <Text style={{ color: '#003459', fontSize: 16 }}>{item.name}</Text>
                <Text note numberOfLines={1} style={{ color: '#dedede', fontSize: 13 }}>{item.producer}</Text>
                <Text note numberOfLines={1} style={{ color: '#20E347', fontSize: 16 }}>{item.price} VNĐ</Text>
                <Text note numberOfLines={1} style={{ color: '#006494', fontSize: 13 }}>9/10 sản phẫm tồn</Text>
              </Body>
            </View>
            <Right style={{ width: 100 }}>
              <Button style={{ backgroundColor: '#E63946', borderRadius: 30 }} transparent onPress={() =>
                this.props.navigation.navigate('Detail',
                  {
                    inventory: item,
                    updateInventoryEvent: this.updateInventoryEvent
                  })}>
                <Text style={{ color: "white" }}>ĐỔI GIÁ</Text>
              </Button>
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

  onPriceChange = (value) => {

    console.log("onPriceChange" + this.state.selectedPrice)
  }

  render() {
    return (
      <Container>
        <Content style={{ backgroundColor: '#DEDEDE' }}>
          <View style={{ paddingHorizontal: 15, marginVertical: 10, backgroundColor: 'white' }}>
            <Form style = {{flexDirection: 'row', justifyContent: 'center', alignItems: 'center',}}>
              <Image style={{
                width: 30,
                height: 30,
                backgroundColor: '#DEDEDE',
                resizeMode: 'stretch'
              }} source={require("../assets/images/filter.png")} />
              <Picker
                mode="dropdown"
                style={{ width: 70 , height:20}}
                selectedValue={this.state.selectedCategory}
                onValueChange={this.onCategoryChange}
              >
                <Picker.Item label="Loại" value="all" />
                <Picker.Item label="Bitis Hunter X 2018" value="Bitis Hunter 2018" />
                <Picker.Item label="Bitis Hunter X 2019" value="Bitis Hunter 2019" />
                <Picker.Item label="Bitis Hunter X 2020" value="Bitis Hunter 2020" />
              </Picker>
              <Picker
                mode="dropdown"
                selectedValue={this.state.selectedPrice}
                onValueChange={this.onPriceChange}
              >
                <Picker.Item label="Số lượng" value="all" />
                <Picker.Item label="10" value="10" />
                <Picker.Item label="50" value="50" />
                <Picker.Item label="100" value="100" />
                <Picker.Item label="200" value="200" />
              </Picker>
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

InventoryScreen.navigationOptions = {
  title: 'Tồn kho',
  headerStyle: {
    backgroundColor: '#0AFAD5',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  }
  
};

