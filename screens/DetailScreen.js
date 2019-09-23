
import React, { Component } from 'react';
import {
  Container,
  Content,
  Item,
  Input,
  DatePicker
} from 'native-base';
import {
  Image,
  View,
  Text,
  StyleSheet
} from 'react-native';
export default class DetailScreen extends Component {

  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  render() {

    return (
      <View style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image source={require('../assets/images/bitis_hunter_x_2019.jpg')}
            style={{ height: 300, width: null, flex: 1, resizeMode: 'contain' }} />
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
          <View style={styles.priceWrapper}>
            <View style={styles.sectionTitle}>
              <Text style={{ fontSize: 16, color: 'black', marginRight: 10 }}>
                Chọn mức giá
          </Text>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red' }}>
                *
          </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 13, color: '#DEDEDE', marginRight: 10 }}>
                Giợi ý giá
          </Text>
              <Text style={{ fontSize: 15, color: 'black' }}>
                990.000
          </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Input placeholder="Price" style={{ left: 0 , width: 300}} />
              <Text style={{ fontSize: 15, color: 'black', padding:10 }}>
                VNĐ
          </Text>
            </View>


          </View>
          <View style={styles.peridodWrapper}>
            <View style={{ flexDirection: 'row', backgroundColor: '#F5F5F5', paddingVertical: 5, }}>
              <Text style={{ fontSize: 16, color: 'black', marginRight: 10 }}>
              Thời hạn áp dụng
          </Text>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red' }}>
                *
          </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
            <Text style = {{padding:10}}>
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
                textStyle={{ color: "green" }}
                placeHolderTextStyle={{ color: "#d3d3d3" }}
                onDateChange={this.setDate}
                disabled={false}
              />
            </View>
            <View style={{ flexDirection: 'row' }}>
            <Text style = {{padding:10}}>
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
            <View style = {{backgroundColor: 'red', height: 30, alignItems:'center', justifyContent:'center'}}>
            <Text style={{color:'white'}}>
               THAY ĐỔI GIÁ
              </Text>
            </View>



          </View>

        </View>
      </View>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageWrapper: {
    flex: 0.3,
  },
  inforWrapper: {
    flex: 0.7,
    paddingHorizontal: 30,
  },
  titleWrapper: {
    flex: 0.2,
  },
  title:{
    fontSize: 20, fontWeight: 'bold' 
  },
  producer:{
    fontSize: 13, color: '#DEDEDE' 
  },
  inventoryAmount:{
    fontSize: 13, color: 'black' 
  },
  priceWrapper: {
    flex: 0.3,
    paddingVertical: 25,
  },
  sectionTitle:{
    flexDirection: 'row', backgroundColor: '#F5F5F5', paddingVertical: 5
  },
  peridodWrapper: {
    flex: 0.5,
  }
});

DetailScreen.navigationOptions = {
  title: 'Detail Product',

};

