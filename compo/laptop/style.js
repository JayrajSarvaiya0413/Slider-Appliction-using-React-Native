import {StyleSheet, Dimensions} from 'react-native';

const style = StyleSheet.create({
    logo: { 
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
          
      },
      head:{
        marginTop:'30%',
        width: '100%',
        alignItems:'center',
    
      },
      title:{
        fontSize:30,
        color:'#fff',
        fontWeight: 'bold',
    
      },
      click:{
        textDecorationLine:'underline',
      },
      subtitle: {
        fontSize:16,
        color: '#5c5e62',
    
      },
      img:{
        width:'100%',
        height:'100%',
        resizeMode: 'cover',
        position:'absolute',
      },
      buttoncontainer:{
        position: 'absolute',
        bottom: 30,
        width: '100%',
        
      },
});

export default style;

