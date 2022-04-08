import React from 'react';
import { Image, View } from 'react-native';
import styles from './styles';



const ProfilePicture1 = () => (
   <View style={styles.container}>
      <Image 
      source={require('../../../assets/images/MarMoney.png')}
      style={styles.image}
     />
    </View>
 );


export default ProfilePicture1;