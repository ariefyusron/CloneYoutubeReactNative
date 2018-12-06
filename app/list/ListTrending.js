import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { List, ListItem, Thumbnail, Text } from 'native-base';

export default ListTrending = (props) => (
  <List>
    <ListItem avatar style={{marginTop:12,marginBottom:12,marginLeft:17}}>
      <TouchableOpacity vertical>
        <Thumbnail source={{uri: props.data.thumnail}} style={{marginBottom:7}} />
        <Text note>{props.data.title}</Text>
      </TouchableOpacity>
    </ListItem>
  </List>
);