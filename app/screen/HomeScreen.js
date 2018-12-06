import React,{Component} from 'react';
import { Container, Content } from 'native-base';

import ListHome from '../list/ListHome';

export default class HomeScreen extends Component {

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
          {this.data.map((data,key) => <ListHome key={key} data={data} />)}          
        </Content>
      </Container>
    )
  }

}