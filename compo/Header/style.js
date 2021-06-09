import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    header:{
        position:'absolute',
        top:50,
        zIndex: 100,
        flexDirection:'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,

    },
    logo:{
        width: 200,
        height: 30,

    },
    manu:{
        width: 25,
        height: 25,
    },
});
export default style;