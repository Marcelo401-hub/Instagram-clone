import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    left: {
      flexDirection: 'row',
      
    },
    right: {
       marginRight: 20,
    },
    name: {
      alignSelf: 'center',
      fontWeight: 'bold',
      color: '#131313',
      flexDirection: 'row'
    }
})

export default style;