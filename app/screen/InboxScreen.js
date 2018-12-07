import React,{Component} from 'react';
import {createMaterialTopTabNavigator, createAppContainer} from 'react-navigation';

import MessageScreen from './MessageScreen';
import NotificationScreen from './NotificationScreen';
class InboxScreen extends Component {

  render(){
    return(
      <Screen />
    )
  }

}

const Screen = createMaterialTopTabNavigator(
  {
    Messages: MessageScreen,
    Notifications: NotificationScreen
  },
  {
    tabBarOptions: {
      labelStyle: {
        color: 'black'
      },
      style: {
        backgroundColor: 'white'
      },
      indicatorStyle: {
        backgroundColor: 'black'
      }
    },
  }
);

export default createAppContainer(Screen);