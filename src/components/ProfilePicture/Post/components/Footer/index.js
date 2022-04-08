import React, {useState, useEffect} from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import ADIcon from 'react-native-vector-icons/AntDesign';
import FontIcon from 'react-native-vector-icons/Fontisto';
import Paper from 'react-native-vector-icons/Ionicons';
import Book from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const Footer = ({LikesCount: LikesCountProp, caption, postedAt}) => {
  
  const [isLiked, setIsLike] = useState(false);
  const [LikesCount, setLikesCount] = useState(0);


  const onLikePressed = () => {
    const amount = isLiked ? -1 : 1;
    setLikesCount(LikesCount + amount);
    
    setIsLike(!isLiked);
  }
  
  useEffect(() => {
     setLikesCount(LikesCountProp)  
  }, [])


  return( 
    <View style={styles.container}>

    <View style={styles.iconsContainer}>
      <View style={styles.leftIcons}>

      <TouchableWithoutFeedback onPress={onLikePressed}>
         {isLiked ?
          <ADIcon name="heart" size={24} color={"#FF0000"}/>
          :  <ADIcon name="hearto" size={24} color={"#424242"}/>
        }

        


       </TouchableWithoutFeedback>
       
        <FontIcon name="comment" size={22} color={"#424242"}/>
      
        
        <Paper name="paper-plane-outline" size={24} color={"#424242"}/>
      
      </View>
       
       <Book name="bookmark-o" size={24} color={"#424242"}/>
   
    </View>
      
     <Text style={styles.LikesCount}>{LikesCount} Likes</Text>
     <Text style={styles.caption}>{caption}</Text>
     <Text style={styles.postedAt}>{postedAt}</Text>
    
 </View>

  )
 
}

export default Footer;