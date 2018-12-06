import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Card, CardItem, Left, Thumbnail, Body, Text, Right, Icon } from 'native-base';

export default ListHome = (props) => (
  <Card transparent style={styles.card}>
    <CardItem cardBody>
      <Image source={{uri: props.data.image}} style={styles.image} />
    </CardItem>
    <CardItem>
      <Left style={{flex:1.1}}>
        <Thumbnail style={styles.thumnail} source={{uri: props.data.thumnail}} />
      </Left>
      <Body style={{flex:5}}>
        <Text>{props.data.title}</Text>
        <Text note>{props.data.note}</Text>
      </Body>
      <Right style={{flex:0.3}}>
        <Icon style={styles.icon} name='more' />
      </Right>
    </CardItem>
  </Card>
);

const styles = StyleSheet.create({
  card: {
    marginTop:0,
    marginLeft:0,
    marginRight:0,
    marginBottom:18,
    borderRadius:0
  },
  image: {
    height: 200,
    flex: 1
  },
  thumnail: {
    width: 42,
    height: 42
  },
  icon: {
    fontSize:25,
    color:'grey'
  },
});