import React, { useState, useEffect  } from 'react';
import { 
  Text, 
  View,
  SafeAreaView, 
  ImageBackground,
  ActivityIndicator,
  TouchableWithoutFeedback,
  TextInput,
  Dimensions
 } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import storiesData from '../../../data/stories';
import styles from './styles';
import ProfilePicture from '../../../components/ProfilePicture';
import Feather from 'react-native-vector-icons/Feather';
import Paper from 'react-native-vector-icons/Ionicons';

const StoryScreen = () => {

  const [userStories, setUserStories] = useState(null);
  const [activeStoryIndex, setActiveStoryIndex] = useState(null);
  

  const route = useRoute();
  const userId = route.params.userId;
  const navigation = useNavigation();

  useEffect( () => {
    const userStories = storiesData.find(storyData => storyData.user.id === userId);
    setUserStories(userStories)
    setActiveStoryIndex(0);
  }, [])

  useEffect( () => {

    if (!userStories){
      return;
    }
   
    if ( activeStoryIndex < 0) {
      setActiveStoryIndex(0);
      return;
    }

    if ( activeStoryIndex >= userStories.stories.length) {
          setActiveStoryIndex(userStories.stories.length -1)
          return;
    }

      
  
  }, [activeStoryIndex])

  const navigateToNextUser = () => {
   navigation.navigate("Story", {userId: (parseInt(userId) + 1).toString() });
  }

  const  navigateToPrevUser = () => {
    navigation.navigate("Story", {userId: (parseInt(userId) - 1).toString() });
  }


  const handleNextStory = () => {
    if (activeStoryIndex >= userStories.stories.length -1){
      navigateToNextUser();
      return;
    }
      setActiveStoryIndex( activeStoryIndex + 1);
  }

  const handlePrevStory = () => {
    if (activeStoryIndex <= 0) {
      navigateToPrevUser();
      return;
    }
      setActiveStoryIndex( activeStoryIndex - 1);
  }

   const handlePress = (evt) => {
      const x = evt.nativeEvent.locationX;
      const screenWidth = Dimensions.get('window').width;
      

      if (x < screenWidth / 2) {
        handlePrevStory();
      } else {
        handleNextStory();
      }
     
   }

   if(!userStories){
    return (
     <SafeAreaView>
        <ActivityIndicator/>
    </SafeAreaView>

    )
  }
  
  const activeStory = userStories.stories[activeStoryIndex];

 

  return (
    <SafeAreaView style={styles.container}>
   
        <TouchableWithoutFeedback onPress={handlePress}>
          <ImageBackground source={{uri: activeStory.imageUri}} style={styles.image}>
           
            <View style={styles.userInfo}>
            <ProfilePicture uri={userStories.user.imageUri}/>
            <Text style={styles.userName}>{userStories.user.name}</Text>
            </View>
            
            <View style={styles.bottomContainer}>
              <View style={styles.cameraButton}>
              <Feather name="camera" size={30} color={'#FFF'} />

              </View>
          

            <View style={styles.textInputContainer}>
              <TextInput editable />
            </View>
              
              <View style={styles.messageContainer}>
                <Paper name="paper-plane-outline" size={30} color={"#FFF"}/>
              </View>
            
            </View>
          </ImageBackground>
        </TouchableWithoutFeedback>
    
       
    </SafeAreaView>

  )

   
}

export default StoryScreen;