import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import styles from './style';
import laptops from './laptops';
import Laptop from '../laptop';

const Laptoplist = (props) => {
    //  console.log(laptops)
    return (
        <View styles={styles.compo}>
           <FlatList
           data={laptops}
            renderItem ={({item}) => <Laptop model={item} />  }
            showsVerticalScrollIndicator={false}
            snapToAlignment={'start'}
            decelerationRate={'fast'}
            snapToInterval={Dimensions.get('window').height}
           
           />
        </View>

    );
};
export default Laptoplist;