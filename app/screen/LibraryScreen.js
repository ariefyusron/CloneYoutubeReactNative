import React,{Component} from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Content, Card, CardItem, Left, Thumbnail, Body, Text, Right, Icon, List, ListItem, Button } from 'native-base';

import ListTrendingGlobal from '../list/ListTrendingGlobal';
import ListLibrary from '../list/ListLibrary';
import ListPlaylist from '../list/ListPlaylist';

export default class LibraryScreen extends Component {

  dataOptions = [
    {
      icon: 'time',
      title: 'History'
    },
    {
      icon: 'download',
      title: 'Downloads'
    },
    {
      icon: 'logo-youtube',
      title: 'My videos'
    },
    {
      icon: 'timer',
      title: 'Watch later'
    }
  ];

  data = [
    {
      title: 'KORBAN JANJI - Reggae Version By Dhevy Geranium',
      note: 'Dhevy Geranium',
      thumnail: 'https://yt3.ggpht.com/a-/AN66SAyPsA-VTz6j7iOeKWgfolIOK2CHQg8yC5L-jw=s288-mo-c-c0xffffffff-rj-k-no',
      image: 'https://i.ytimg.com/vi/AetPR3z8YiU/hqdefault.jpg?',
      total: '27'
    },
    {
      title: '7 Wisata yang wajib Anda kunjungi di Madura',
      note: 'Arief Yusron',
      thumnail: 'https://lh3.googleusercontent.com/-kCJD5dkof6Y/AAAAAAAAAAI/AAAAAAAAAJo/EnnmsZuhYss/s640-il/photo.jpg',
      image: 'https://aishasnews.files.wordpress.com/2017/06/2-indonesiaexpat-biz.jpg',
      total: '15'
    },
    {
      title: 'Sheila On 7 - DAN (Reggae Cover SMVLL)',
      note: 'SMVLL',
      thumnail: 'https://yt3.ggpht.com/a-/AN66SAyUe-lfnyKITCFQh6zrcNMeE-WXnuMTEJi-FA=s288-mo-c-c0xffffffff-rj-k-no',
      image: 'https://i.ytimg.com/vi/qypO3p8g2ZU/hqdefault.jpg?',
      total: '10'
    },
    {
      title: 'Sheila On 7 - DAN (Reggae Cover SMVLL)',
      note: 'SMVLL',
      thumnail: 'https://yt3.ggpht.com/a-/AN66SAyUe-lfnyKITCFQh6zrcNMeE-WXnuMTEJi-FA=s288-mo-c-c0xffffffff-rj-k-no',
      image: 'https://i.ytimg.com/vi/qypO3p8g2ZU/hqdefault.jpg?',
      total: '20'
    },
    {
      title: 'Sheila On 7 - DAN (Reggae Cover SMVLL)',
      note: 'SMVLL',
      thumnail: 'https://yt3.ggpht.com/a-/AN66SAyUe-lfnyKITCFQh6zrcNMeE-WXnuMTEJi-FA=s288-mo-c-c0xffffffff-rj-k-no',
      image: 'https://i.ytimg.com/vi/qypO3p8g2ZU/hqdefault.jpg?',
      total: '39'
    },
  ];

  render(){
    return(
      <Container>
        <Content showsVerticalScrollIndicator={false}>
          <Content>
            <Card style={styles.card}>
              <CardItem>
                <Text>Recent</Text>
              </CardItem>
              <Content horizontal={true} showsHorizontalScrollIndicator={false}>
                {this.data.map((data,key)=> <ListTrendingGlobal key={key} data={data} />)}
              </Content>
            </Card>
            <Card style={styles.card}>
              <List>
                {this.dataOptions.map((data,key)=> <ListLibrary key={key} data={data} />)}
              </List>
            </Card>
            <Card style={styles.card}>
              <CardItem>
                <Text style={{color:'grey'}}>Playlists (Recently added)</Text>
                <Icon style={{color:'grey',fontSize:22,marginLeft:12}} name='arrow-dropdown' />
              </CardItem>
              <List>
                <ListItem noBorder>
                  <Left style={{flex:1,justifyContent:'center'}}>
                    <Icon name='thumbs-up' style={{fontSize:35,width:35,color:'grey'}} />
                  </Left>
                  <Body style={{flex:5}}>
                    <Text>Like</Text>
                    <Text note>100 videos</Text>
                  </Body>
                </ListItem>
                {this.data.map((data,key)=> <ListPlaylist key={key} data={data} />)}
              </List>
            </Card>
          </Content>
        </Content>
      </Container>
    )
  }

}

const styles = StyleSheet.create({
  card : {
    marginLeft:0,
    marginRight:0,
    borderRadius:0,
    marginBottom:0,
    marginTop: 0
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
})