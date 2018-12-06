import React,{Component} from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Content, Card, CardItem, Left, Thumbnail, Body, Text, Right, Icon } from 'native-base';

import ListTrending from '../list/ListTrending';
import ListTrendingGlobal from '../list/ListTrendingGlobal';
import ListHome from '../list/ListHome';

export default class TrendingScreen extends Component {

  dataTop = [
    {
      title: 'Music',
      thumnail: 'https://s.ytimg.com/yts/img/trending/nav_icons/coverMusic_84BG_320x320-vflI7Luak.png'
    },
    {
      title: 'Live',
      thumnail: 'https://s.ytimg.com/yts/img/trending/nav_icons/coverLive_84BG_320x320-vflLaOXzZ.png'
    },
    {
      title: 'Gaming',
      thumnail: 'https://s.ytimg.com/yts/img/trending/nav_icons/coverGaming_84BG_320x320-vflr0EUXA.png'
    },
    {
      title: 'News',
      thumnail: 'https://s.ytimg.com/yts/img/trending/nav_icons/coverNews_84BG_320x320-vflYn8aEE.png'
    },
    {
      title: 'Movies',
      thumnail: 'https://s.ytimg.com/yts/img/trending/nav_icons/coverMovies_84BG_320x320-vflVwPGdB.png'
    }
  ];

  data = [
    {
      title: 'KORBAN JANJI - Reggae Version By Dhevy Geranium',
      note: 'Dhevy Geranium . 900k views . 3 hours ago',
      thumnail: 'https://yt3.ggpht.com/a-/AN66SAyPsA-VTz6j7iOeKWgfolIOK2CHQg8yC5L-jw=s288-mo-c-c0xffffffff-rj-k-no',
      image: 'https://i.ytimg.com/vi/AetPR3z8YiU/hqdefault.jpg?'
    },
    {
      title: '7 Wisata yang wajib Anda kunjungi di Madura',
      note: 'Arief Yusron . 3.9M views . 6 hours ago',
      thumnail: 'https://lh3.googleusercontent.com/-kCJD5dkof6Y/AAAAAAAAAAI/AAAAAAAAAJo/EnnmsZuhYss/s640-il/photo.jpg',
      image: 'https://aishasnews.files.wordpress.com/2017/06/2-indonesiaexpat-biz.jpg'
    },
    {
      title: 'Sheila On 7 - DAN (Reggae Cover SMVLL)',
      note: 'SMVLL . 69k views . 2 days ago',
      thumnail: 'https://yt3.ggpht.com/a-/AN66SAyUe-lfnyKITCFQh6zrcNMeE-WXnuMTEJi-FA=s288-mo-c-c0xffffffff-rj-k-no',
      image: 'https://i.ytimg.com/vi/qypO3p8g2ZU/hqdefault.jpg?'
    },
    {
      title: 'Sheila On 7 - DAN (Reggae Cover SMVLL)',
      note: 'SMVLL . 69k views . 2 days ago',
      thumnail: 'https://yt3.ggpht.com/a-/AN66SAyUe-lfnyKITCFQh6zrcNMeE-WXnuMTEJi-FA=s288-mo-c-c0xffffffff-rj-k-no',
      image: 'https://i.ytimg.com/vi/qypO3p8g2ZU/hqdefault.jpg?'
    },
    {
      title: 'Sheila On 7 - DAN (Reggae Cover SMVLL)',
      note: 'SMVLL . 69k views . 2 days ago',
      thumnail: 'https://yt3.ggpht.com/a-/AN66SAyUe-lfnyKITCFQh6zrcNMeE-WXnuMTEJi-FA=s288-mo-c-c0xffffffff-rj-k-no',
      image: 'https://i.ytimg.com/vi/qypO3p8g2ZU/hqdefault.jpg?'
    },
  ];

  render(){
    return(
      <Container>
        <Content showsVerticalScrollIndicator={false}>
          <Content horizontal={true} showsHorizontalScrollIndicator={false}>
            {this.dataTop.map((data,key)=> <ListTrending key={key} data={data} />)}
          </Content>
          <Content>
            <Card style={styles.card}>
              <CardItem cardBody>
                <Image source={{uri: 'https://aishasnews.files.wordpress.com/2017/06/2-indonesiaexpat-biz.jpg'}} style={styles.image} />
              </CardItem>
              <CardItem>
                <Left style={{flex:1.1}}>
                  <Thumbnail style={styles.thumnail} source={{uri: 'https://lh3.googleusercontent.com/-kCJD5dkof6Y/AAAAAAAAAAI/AAAAAAAAAJo/EnnmsZuhYss/s640-il/photo.jpg'}} />
                </Left>
                <Body style={{flex:5}}>
                  <Text>7 Wisata yang wajib Anda kunjungi di Madura</Text>
                  <Text note>Arief Yusron . 3.9M views . 6 hours ago</Text>
                </Body>
                <Right style={{flex:0.3}}>
                  <Icon style={styles.icon} name='more' />
                </Right>
              </CardItem>
            </Card>
            <Card style={styles.card}>
              <CardItem>
                <Text style={{marginLeft:-8}}>Video Paling Populer 2018 (Global)</Text>
                <Right>
                  <Icon style={[styles.icon,{marginRight:-23}]} name='more' />
                </Right>
              </CardItem>
              <Content horizontal={true} showsHorizontalScrollIndicator={false}>
                {this.data.map((data,key)=> <ListTrendingGlobal key={key} data={data} />)}
              </Content>
            </Card>
            <Card style={styles.card}>
              <CardItem>
                <Text style={{marginLeft:-8}}>Video Musik Paling Populer 2018 (Global)</Text>
                <Right>
                  <Icon style={[styles.icon,{marginRight:-20}]} name='more' />
                </Right>
              </CardItem>
              <Content horizontal={true} showsHorizontalScrollIndicator={false}>
                {this.data.map((data,key)=> <ListTrendingGlobal key={key} data={data} />)}
              </Content>
            </Card>
            <Card style={styles.card}>
              {this.data.map((data,key)=> <ListHome key={key} data={data} />)}  
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