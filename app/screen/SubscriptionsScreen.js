import React,{Component} from 'react';
import { TouchableOpacity } from 'react-native';
import { Container, Content, Row, Col, Text } from 'native-base';

import ListHome from '../list/ListHome';
import ListSubscriptions from '../list/ListSubscriptions';

export default class SubscriptionsScreen extends Component {

  dataTop = [
      {
        thumnail: 'https://yt3.ggpht.com/a-/AN66SAx3lV1Wf6BEECAKTUWipKHulK-5hD3NxZACsw=s88-mo-c-c0xffffffff-rj-k-no',
        title: 'UYE tone'
      },
      {
        thumnail: 'https://yt3.ggpht.com/a-/AN66SAyPsA-VTz6j7iOeKWgfolIOK2CHQg8yC5L-jw=s88-mo-c-c0xffffffff-rj-k-no',
        title: 'Dhevy Gera..'
      },
      {
        thumnail: 'https://yt3.ggpht.com/a-/AN66SAyUe-lfnyKITCFQh6zrcNMeE-WXnuMTEJi-FA=s88-mo-c-c0xffffffff-rj-k-no',
        title: 'SMVLL'
      },
      {
        thumnail: 'https://yt3.ggpht.com/a-/AN66SAyPsA-VTz6j7iOeKWgfolIOK2CHQg8yC5L-jw=s88-mo-c-c0xffffffff-rj-k-no',
        title: 'Dhevy Gera..'
      },
      {
        thumnail: 'https://yt3.ggpht.com/a-/AN66SAyUe-lfnyKITCFQh6zrcNMeE-WXnuMTEJi-FA=s88-mo-c-c0xffffffff-rj-k-no',
        title: 'SMVLL'
      },
      {
        thumnail: 'https://yt3.ggpht.com/a-/AN66SAx3lV1Wf6BEECAKTUWipKHulK-5hD3NxZACsw=s88-mo-c-c0xffffffff-rj-k-no',
        title: 'UYE tone'
      },
      {
        thumnail: 'https://yt3.ggpht.com/a-/AN66SAyUe-lfnyKITCFQh6zrcNMeE-WXnuMTEJi-FA=s88-mo-c-c0xffffffff-rj-k-no',
        title: 'SMVLL'
      },
      {
        thumnail: 'https://yt3.ggpht.com/a-/AN66SAyPsA-VTz6j7iOeKWgfolIOK2CHQg8yC5L-jw=s88-mo-c-c0xffffffff-rj-k-no',
        title: 'Dhevy Gera..'
      },
      {
        thumnail: 'https://yt3.ggpht.com/a-/AN66SAyUe-lfnyKITCFQh6zrcNMeE-WXnuMTEJi-FA=s88-mo-c-c0xffffffff-rj-k-no',
        title: 'SMVLL'
      },
      {
        thumnail: 'https://yt3.ggpht.com/a-/AN66SAx3lV1Wf6BEECAKTUWipKHulK-5hD3NxZACsw=s88-mo-c-c0xffffffff-rj-k-no',
        title: 'UYE tone'
      },
  ]

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
  ];

  render(){
    return(
      <Container>
        <Content showsVerticalScrollIndicator={false}>
          <Row>
            <Col style={{flex:6}}>
              <Content horizontal={true} showsHorizontalScrollIndicator={false}>
                {this.dataTop.map((data,key)=> <ListSubscriptions key={key} data={data} />)}
              </Content>
            </Col>
            <Col style={{flex:1,justifyContent:'center'}}>
              <TouchableOpacity>
                <Text style={{color:'#6495ED',textAlign:'center'}}>ALL</Text>
              </TouchableOpacity>
            </Col>
          </Row>
          <Content>
            {this.data.map((data,key) => <ListHome key={key} data={data} />)}          
          </Content>
        </Content>
      </Container>
    )
  }

}