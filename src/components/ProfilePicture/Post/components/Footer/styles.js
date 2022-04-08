import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
   container:{
      margin: 5,
      
    },
    iconsContainer: {
       flexDirection: 'row',
       justifyContent: 'space-between',
       padding: 5,
    },
   
    leftIcons: {
      flexDirection: 'row',
      width: 100,
      justifyContent: 'space-between'
    },
    likes: {
     fontWeight: 'bold',
     margin: 3,
   },
     caption: {
      margin: 3,
      color: '#131313'
   },
     postedAt: {
       color: '#8c8c8c',
       margin: 3,
   }
});

export default styles;