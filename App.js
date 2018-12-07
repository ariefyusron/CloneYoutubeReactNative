import React,{Component} from 'react';
import {TouchableOpacity,StyleSheet, Image} from 'react-native';
import {Icon, Title, Row, Col, Item, Input, Thumbnail} from 'native-base';
import {createBottomTabNavigator,createStackNavigator,createAppContainer} from 'react-navigation';

import HomeScreen from './app/screen/HomeScreen';
import TrendingScreen from './app/screen/TrendingScreen';
import InboxScreen from './app/screen/InboxScreen';
import LibraryScreen from './app/screen/LibraryScreen';
import SubscriptionsScreen from './app/screen/SubscriptionsScreen';
import SearchScreen from './app/screen/SearchScreen';

class App extends Component {

  render(){
    return(
      <ScreenTab />
    )
  }

}

profil = 'https://lh3.googleusercontent.com/-kCJD5dkof6Y/AAAAAAAAAAI/AAAAAAAAAJo/EnnmsZuhYss/s640-il/photo.jpg';

const HomeSearch = createStackNavigator(
  {
    Beranda: {
      screen: HomeScreen,
      navigationOptions: ({navigation}) => {
        return {     
          headerLeft: (
            <Image style={styles.image} source={require('./logo/youtube.png')} />
          ),
          headerRight: (
            <Row style={{width: 140}}>
              <Col>
                <Icon style={styles.icon} name='videocam' />
              </Col>
              <Col>
                <TouchableOpacity onPress={()=>{navigation.navigate('Search')}}>
                  <Icon style={styles.icon} name='search' />
                </TouchableOpacity>
              </Col>
              <Col>
                <Thumbnail small style={styles.thumbnail} source={{uri: profil}} />
              </Col>            
            </Row>
          ),
          headerStyle: {
            height: 47
          },
        }
      }
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: ({navigation}) => {
        return { 
          headerTitle: (
            <Item style={styles.item}>
              <Input placeholder="Search" autoFocus={true} />
              <Icon name="mic" style={{fontSize:17}} />
            </Item>
          ),    
          headerStyle: {
            height: 47
          },
        }
      }
    },
  }
);

const TrendingSearch = createStackNavigator(
  {
    Beranda: {
      screen: TrendingScreen,
      navigationOptions: ({navigation}) => {
        return {     
          headerLeft: (
            <Image style={styles.image} source={require('./logo/youtube.png')} />
          ),
          headerRight: (
            <Row style={{width: 140}}>
              <Col>
                <Icon style={styles.icon} name='videocam' />
              </Col>
              <Col>
                <TouchableOpacity onPress={()=>{navigation.navigate('Search')}}>
                  <Icon style={styles.icon} name='search' />
                </TouchableOpacity>
              </Col>
              <Col>
                <Thumbnail small style={styles.thumbnail} source={{uri: profil}} />
              </Col>            
            </Row>
          ),
          headerStyle: {
            height: 47
          },
        }
      }
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: ({navigation}) => {
        return { 
          headerTitle: (
            <Item style={styles.item}>
              <Input placeholder='Search' autoFocus={true} />
              <Icon name='mic' style={{fontSize:17}} />
            </Item>
          ),    
          headerStyle: {
            height: 47
          },
        }
      }
    },
  }
);

const SubscriptionsSearch = createStackNavigator(
  {
    Beranda: {
      screen: SubscriptionsScreen,
      navigationOptions: ({navigation}) => {
        return {     
          headerLeft: (
            <Image style={styles.image} source={require('./logo/youtube.png')} />
          ),
          headerRight: (
            <Row style={{width: 140}}>
              <Col>
                <Icon style={styles.icon} name='videocam' />
              </Col>
              <Col>
                <TouchableOpacity onPress={()=>{navigation.navigate('Search')}}>
                  <Icon style={styles.icon} name='search' />
                </TouchableOpacity>
              </Col>
              <Col>
                <Thumbnail small style={styles.thumbnail} source={{uri: profil}} />
              </Col>            
            </Row>
          ),
          headerStyle: {
            height: 47
          },
        }
      }
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: ({navigation}) => {
        return { 
          headerTitle: (
            <Item style={styles.item}>
              <Input placeholder='Search' autoFocus={true} />
              <Icon name='mic' style={{fontSize:17}} />
            </Item>
          ),    
          headerStyle: {
            height: 47
          },
        }
      }
    },
  }
);

const InboxSearch = createStackNavigator(
  {
    Beranda: {
      screen: InboxScreen,
      navigationOptions: ({navigation}) => {
        return {
          headerLeft: (
            <Image style={styles.image} source={require('./logo/youtube.png')} />
          ),
          headerRight: (
            <Row style={{width: 140}}>
              <Col>
                <Icon style={styles.icon} name='videocam' />
              </Col>
              <Col>
                <TouchableOpacity onPress={()=>{navigation.navigate('Search')}}>
                  <Icon style={styles.icon} name='search' />
                </TouchableOpacity>
              </Col>
              <Col>
                <Thumbnail small style={styles.thumbnail} source={{uri: profil}} />
              </Col>            
            </Row>
          ),
          headerStyle: {
            height: 47,
            elevation: 0
          },
        }
      }
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: ({navigation}) => {
        return { 
          headerTitle: (
            <Item style={styles.item}>
              <Input placeholder='Search' autoFocus={true} />
              <Icon name='mic' style={{fontSize:17}} />
            </Item>
          ),    
          headerStyle: {
            height: 47
          },
        }
      }
    },
  }
);

const LibrarySearch = createStackNavigator(
  {
    Beranda: {
      screen: LibraryScreen,
      navigationOptions: ({navigation}) => {
        return {     
          headerLeft: (
            <Image style={styles.image} source={require('./logo/youtube.png')} />
          ),
          headerRight: (
            <Row style={{width: 140}}>
              <Col>
                <Icon style={styles.icon} name='videocam' />
              </Col>
              <Col>
                <TouchableOpacity onPress={()=>{navigation.navigate('Search')}}>
                  <Icon style={styles.icon} name='search' />
                </TouchableOpacity>
              </Col>
              <Col>
                <Thumbnail small style={styles.thumbnail} source={{uri: profil}} />
              </Col>            
            </Row>
          ),
          headerStyle: {
            height: 47
          },
        }
      }
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: ({navigation}) => {
        return { 
          headerTitle: (
            <Item style={styles.item}>
              <Input placeholder='Search' autoFocus={true} />
              <Icon name='mic' style={{fontSize:17}} />
            </Item>
          ),    
          headerStyle: {
            height: 47
          },
        }
      }
    },
  }
);

const ScreenTab = createBottomTabNavigator(
  {
    Home: HomeSearch,
    Trending: TrendingSearch,
    Subscriptions: SubscriptionsSearch,
    Inbox: InboxSearch,
    Library: LibrarySearch
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({tintColor})=>{
        const {routeName} = navigation.state;
        let icon;
        if (routeName=='Home') {
          icon = 'home'
        } else if (routeName=='Trending') {
          icon= 'flame'
        } else if (routeName=='Subscriptions') {
          icon= 'appstore'
        } else if (routeName=='Inbox') {
          icon= 'mail'
        } else if (routeName=='Library') {
          icon= 'folder'
        }
        return <Icon name={icon} style={{color: tintColor,fontSize:23}} />
      },
      tabBarOptions: {
        activeTintColor: 'red',
        inactiveTintColor: 'grey',
        labelStyle: {
          fontSize: 9,
          marginBottom: 5 
        },
      },
      tabBarButtonComponent: TouchableOpacity,
    }),
  }
);

const styles = StyleSheet.create({
  icon: {
    fontSize:20,
    textAlign: 'center',
    color:'grey',
    marginTop:2
  },
  thumbnail: {
    height:25,
    width:25,
    marginLeft:10
  },
  item: {
    backgroundColor:'#f8f8f8',
    height:30,
    flex:0.98,
    paddingLeft:5,
    borderBottomColor:'white'
  },
  image: {
    width:90,
    height:20,
    marginLeft:17
  },
});

export default createAppContainer(ScreenTab);