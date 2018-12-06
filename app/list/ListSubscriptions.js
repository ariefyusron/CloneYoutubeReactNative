import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { List, ListItem, Thumbnail, Text } from 'native-base';

export default ListSubscriptions = (props) => (
  <List>
    <ListItem avatar style={{marginTop:12,marginBottom:12,marginLeft:10}}>
      <TouchableOpacity>
        <Thumbnail source={{uri: props.data.thumnail}} style={{marginBottom:7}} />
        <Text style={{fontSize:12}} note>{props.data.title}</Text>
      </TouchableOpacity>
    </ListItem>
  </List>
);