import React, { Component } from 'react';
import { Image } from 'react-native';
import { Left, Body, Text, ListItem, Thumbnail, Right, Icon, Item } from 'native-base';

export default ListNotification = (props) => (
  <ListItem noBorder>
    <Left style={{flex:0.5}}>
      <Thumbnail small source={{uri: props.data.thumnail}} style={{marginLeft:-10}} />
    </Left>
    <Body style={{flex:4}}>
      <Text>{props.data.title}</Text>
      <Text note>{props.data.time}</Text>
    </Body>
    <Right style={{flex:2}}>
      <Item style={{width:105,borderBottomColor:'white'}}>
        <Image source={{uri: props.data.image}} style={{width:80,height:40}} />
        <Icon name='more' style={{color:'grey',fontSize:25,marginLeft:20}} />
      </Item>
    </Right>
  </ListItem>
);