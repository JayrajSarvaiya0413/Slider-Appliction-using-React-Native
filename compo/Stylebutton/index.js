import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import styles from './style';


const Stylebutton = (props) => {

    const {type, content, onPress} = props;
   

    const backgruondColor = type === 'primary' ? 'gray' : 'white';
    const textcolor = type === 'primary' ? 'black' : 'gray';

    return (
        <View style={styles.container}>
            <Pressable
            style={[styles.button, {backgroundColor: backgruondColor}]}
            onPress={() =>onPress()}
            >
                <Text style={[styles.text,{color:textcolor}]}>{content}</Text>

            </Pressable>
        </View>

    );
};

export default Stylebutton;