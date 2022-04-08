import React from 'react';
import { Image, View } from 'react-native';
import styles from './styles';



const ProfilePicture3 = () => (
   <View style={styles.container}>
      <Image 
      source={require('../../../assets/images/gate.jpg')}
      style={styles.image}
     />
    </View>
 );


export default ProfilePicture3;