import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import ProfilePicture1 from '../../../../ProfilePicture/ProfilePicture1';
import styles from './styles';

const Header = ({name}) => (
    <View style={styles.container}>

        <View style={styles.left}>
         <ProfilePicture1 style={styles.container}/>
         <Text style={styles.name}>{name}</Text>
        </View>

        <View style={styles.right}>
             <Icon name="dots-three-vertical" size={18} />
        </View>
    </View>
)

export default Header;