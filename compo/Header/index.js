import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style';

const Header = () => {
    return (
        <View style={styles.header}>
            <Image style={styles.logo} source={require('../../assets/image/logo1.png')} />
            <Image style={styles.manu} source={require('../../assets/image/menu.png')} />
        </View>

    );
};
export default Header;