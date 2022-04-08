import React from 'react';
import { Image, View } from 'react-native';
import styles from './styles';




const ProfilePicture = () => (
   <View style={styles.container}>
      <Image 
      source={require('../../assets/images/mae.jpeg')}
      style={styles.image}
     />
    
    </View>
 );

 


export default ProfilePicture;
