import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Card, CardItem, Body, Text, Right, Icon } from 'native-base';

export default ListTrending = (props) => (
  <Card transparent style={styles.card}>
    <CardItem cardBody>
      <Image source={{uri: props.data.image}} style={styles.image} />
    </CardItem>
    <CardItem cardBody>
      <Body style={{flex:1}}>
        <Text style={styles.text}>{props.data.title}</Text>
        <Text note style={styles.note}>{props.data.note}</Text>
      </Body>
      <Right style={{flex:0.2}}>
        <Icon style={styles.icon} name='more' />
      </Right>
    </CardItem>
  </Card>
);

const styles = StyleSheet.create({
  card: {
    width: 200,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 20
  },
  image: {
    height: 100,
    flex: 1
  },
  thumnail: {
    width: 42,
    height: 42
  },
  icon: {
    fontSize:20,
    color:'grey'
  },
  text: {
    fontSize:15
  },
  note: {
    fontSize:13
  },
});