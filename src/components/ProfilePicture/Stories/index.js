import React, {useEffect, useState} from 'react';
import { View, FlatList , ScrollView} from 'react-native';
import Story from '../Story';
import styles from './styles';
import storiesData from '../../../data/stories';

import { API, graphqlOperation} from 'aws-amplify';
import { listStorys } from '../../../graphql/queries';


const Stories = () => {

     const [ stories, setStories] = useState ([]);
  
     useEffect(() => {
          fetchStories();
     }, [])

     const fetchStories = async () => {
          try {
               const storiesData = await API.graphql(graphqlOperation(listStorys));
               setStories(storiesData.data.listStorys.items);
          } catch(e) {
               console.log(e)
          }
     }

     return (
     <FlatList
     data={storiesData}
     keyExtractor={({user: {id}}) => id}
     horizontal
     showsHorizontalScrollIndicator={false}
     style={styles.container}
     renderItem={({item})=><Story story={item}/>}

     />
     )
         
}


export default Stories;