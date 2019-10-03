
import React, { Component } from 'react';
import {
  Input,
  DatePicker
} from 'native-base';
import {
  Image,
  View,
  Text,
  StyleSheet,
  ScrollView,
  CheckBox,
  TouchableOpacity
} from 'react-native';
import RadioButton from '../components/RadioButton'
export default class DetailScreen extends Component {

  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date(), price: "" };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  componentDidMount() {
    const { params } = this.props.navigation.state;
    const inventory = params ? params.inventory : null;
  }

  onCategoryCheckBox = (value) => {
    alert("value " + value)
  }

  onPressUpdate = () => {
    const { params } = this.props.navigation.state;
    let inventory = params ? params.inventory : null;
    const updateInventoryEvent = params ? params.updateInventoryEvent : null;
    var value =this.inputRef.wrappedInstance._lastNativeText;
    if (value) { 
      let updateInventory ={
        id:inventory.id,
        price:value
      }
      updateInventoryEvent.emit("updateInventory", updateInventory)
      this.props.navigation.navigate('Home')
    }
    else{
      this.props.navigation.navigate('Home')
    }
  }

  refPrice = (component) => {
    return this._price = component
  }


  render() {
    const { params } = this.props.navigation.state;
    const inventory = params ? params.inventory : null;

    if (inventory) {
      return (
        <ScrollView style={styles.container}>
          <View style={styles.imageWrapper}>
            <Image source={inventory.image}
              style={{ height: 100, width: null, flex: 1, resizeMode: 'contain', borderRadius: 50 }} />
          </View>
          <View style={styles.inforWrapper}>
            <View style={styles.titleWrapper}>
              <Text style={styles.title}>
                Bitis Hunter 2019
            </Text>
              <Text style={styles.producer}>
                Biti's
            </Text>
              <Text style={styles.inventoryAmount}>
                9 trong 10 sản phẫm tồn kho
            </Text>
            </View>
            <View style={styles.sectionTitle}>
              <Text style={{ fontSize: 16, color: 'black', marginRight: 10 }}>
                Chọn mức giá
            </Text>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red' }}>
                *
           </Text>
            </View>
            <View style={styles.priceWrapper}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 13, color: '#AEAEAE', marginRight: 10 }}>
                  Gợi ý giá
            </Text>
                <Text style={{ fontSize: 15, color: '#AEAEAE' }}>
                  900.000 - 1.000.000
            </Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Input placeholder="990.000" style={{ left: 0, width: 300 }} ref={(input) => { this.inputRef = input }}
                />
                <Text style={{ fontSize: 15, color: 'black', padding: 10 }}>
                  VNĐ
            </Text>
              </View>
            </View>
            <View style={styles.sectionTitle}>
              <Text style={{ fontSize: 16, color: 'black', marginRight: 10 }}>
                Thời hạn áp dụng
            </Text>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red' }}>
                *
            </Text>
            </View>
            <View style={styles.peridodWrapper}>

              <View style={{ flexDirection: 'row' }}>
                <Text style={{ padding: 10 }}>
                  Bắt đầu
                </Text>
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
                  placeHolderTextStyle={{ color: "#d3d3d3" }}
                  onDateChange={this.setDate}
                  disabled={false}
                />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ padding: 10 }}>
                  Kết thúc
                </Text>
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
              </View>

              <View style={{ flexDirection: 'row', alignItems: "center" }}>
                <CheckBox
                  value={true}
                  onValueChange={this.onCategoryCheckBox}
                >
                </CheckBox>
                <Text>
                  Đến khi hết hàng
                </Text>
              </View>
              <TouchableOpacity style={{ backgroundColor: 'red', height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}
                onPress={this.onPressUpdate}
              >
                <Text style={{ color: 'white' }}>
                  ĐỔI GIÁ
                </Text>
              </TouchableOpacity>

            </View>

          </View>
        </ScrollView>
      );
    }

    return (
      <ScrollView style={styles.container}></ScrollView>
    )
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageWrapper: {
    flex: 0.3,
    marginTop: 5
  },
  inforWrapper: {
    flex: 0.7,
  },
  titleWrapper: {
    flex: 0.3,
    paddingHorizontal: 30,
    paddingVertical: 15,

  },
  sectionTitle: {
    flex: 0.1, flexDirection: 'row', backgroundColor: '#ECE9F6', paddingVertical: 5,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 20, fontWeight: 'bold'
  },
  producer: {
    fontSize: 13, color: '#DEDEDE'
  },
  inventoryAmount: {
    fontSize: 13, color: 'black'
  },
  priceWrapper: {
    flex: 0.3,
    paddingVertical: 15,
    paddingHorizontal: 25,
  },
  peridodWrapper: {
    flex: 0.3,
    paddingHorizontal: 30,

  }
});

DetailScreen.navigationOptions = {
  title: 'Detail Product',
  headerStyle: {
    backgroundColor: '#0AFAD5',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

