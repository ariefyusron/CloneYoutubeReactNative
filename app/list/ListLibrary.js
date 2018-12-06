import React, { Component } from 'react';
import { Left, Body, Text, Icon, ListItem } from 'native-base';

export default ListLibrary = (props) => (
  <ListItem noBorder>
    <Left style={{flex:1}}>
      <Icon name={props.data.icon} style={{fontSize:27,width:27}} />
    </Left>
    <Body style={{flex:8}}>
      <Text>{props.data.title}</Text>
    </Body>
  </ListItem>
);