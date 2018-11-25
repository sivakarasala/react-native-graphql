import React, { Component } from 'react';
import {Text, View, FlatList, ActivityIndicator } from 'react-native';
import { List, ListItem, Body, Right, Icon } from 'native-base';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class Posts extends Component {
  render() {
    const { loading, allPosts, navigation } = this.props;
    if (loading) return <ActivityIndicator size="large"/>;
    return(
      <View>
        <List>
        <FlatList
          data={allPosts}
          renderItem={({item}) => (
          <ListItem
            onPress={() => navigation.navigate('Post', {
              id: item.id,
              title: item.title
            })}>
            <Body>
              <Text>{item.title}</Text>
            </Body>
            <Right>
              <Icon name="ios-arrow-forward" />
            </Right>
          </ListItem>
          )}
          keyExtractor={item => item.id}/>
        </List>
      </View>
    );
  }
}

const postsQuery = gql`
query postsQuery {
  allPosts(orderBy: createdAt_DESC){
    id
    title
  }
}
`;

export default graphql(postsQuery, {
  props: ({ data }) => ({...data})
})(Posts);