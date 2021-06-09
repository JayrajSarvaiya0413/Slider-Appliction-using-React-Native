import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import Stylebutton from '../Stylebutton';
import styles from './style';

const Laptop = (props) => {

      const {name, price, infoCTA, img} = props.model;

    return (
        
      <View style={styles.logo}>

      <ImageBackground 
      source={img}
      style={styles.img}
      />

      <View style={styles.head}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {price} 
          {' '}
        <Text style={styles.click}>
          {infoCTA}
        </Text>
        </Text>
      </View>

      <View style={styles.buttoncontainer}>
      <Stylebutton type='primary'
      content={"ORDER"}
      onPress={() =>{
        console.warn("OREDER PLACED");
      }}
      />

      <Stylebutton type='secondary'
      content={"ADD TO CART"}
      onPress={() =>{
        console.warn("OREDER EXITNG PLACED");
      }}
      />  
    </View>
    </View>

    );
};

export default Laptop;