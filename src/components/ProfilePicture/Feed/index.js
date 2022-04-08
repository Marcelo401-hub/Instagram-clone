import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import Post from '../Post';
import Stories from './../Stories';

import { API, graphqlOperation } from 'aws-amplify';
import { listPosts } from '../../../graphql/queries';

import { onError } from "@apollo/client/link/error";


const Feed = () => {

    const [posts, setPosts] = useState([]);
  
    
    useEffect(() => {
        fetchPosts();
    }, [])

    const fetchPosts = async () => {
        try {
            const postsData = await API.graphql(graphqlOperation(listPosts));
            setPosts(postsData.data.listPosts.items);
        } catch(e) {
            console.log(e.message);
        }
    } 
     
    const errorLink = onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );
    
      if (networkError) console.log(`[Network error]: ${networkError}`);
    });
    
    return (
       <FlatList
         data={posts}
         renderItem={({item}) => <Post post={item}/>}
         keyExtractor={({id})=>id}
         ListHeaderComponent={Stories}
      />
    )
}


export default Feed;