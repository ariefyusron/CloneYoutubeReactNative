import React, { Component } from 'react';
import { Left, Body, Text, Icon, ListItem, Thumbnail } from 'native-base';

export default ListPlaylist = (props) => (
  <ListItem noBorder>
    <Left style={{flex:1}}>
      <Thumbnail square source={{uri: props.data.image}} />
    </Left>
    <Body style={{flex:5}}>
      <Text>{props.data.title}</Text>
      <Text note>{props.data.total} videos</Text>
    </Body>
  </ListItem>
);