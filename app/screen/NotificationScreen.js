import React, { Component } from 'react';
import { Container, Content } from 'native-base';

import ListNotification from '../list/ListNotification';

export default class NotificationScreen extends Component{
  
  data = [
    {
      title: 'KORBAN JANJI - Reggae Version By Dhevy Geranium',
      note: 'Dhevy Geranium',
      thumnail: 'https://yt3.ggpht.com/a-/AN66SAyPsA-VTz6j7iOeKWgfolIOK2CHQg8yC5L-jw=s288-mo-c-c0xffffffff-rj-k-no',
      image: 'https://i.ytimg.com/vi/AetPR3z8YiU/hqdefault.jpg?',
      time: '2 minutes ago'
    },
    {
      title: '7 Wisata yang wajib Anda kunjungi di Madura',
      note: 'Arief Yusron',
      thumnail: 'https://lh3.googleusercontent.com/-kCJD5dkof6Y/AAAAAAAAAAI/AAAAAAAAAJo/EnnmsZuhYss/s640-il/photo.jpg',
      image: 'https://aishasnews.files.wordpress.com/2017/06/2-indonesiaexpat-biz.jpg',
      time: '1 hour ago'
    },
    {
      title: 'Sheila On 7 - DAN (Reggae Cover SMVLL)',
      note: 'SMVLL',
      thumnail: 'https://yt3.ggpht.com/a-/AN66SAyUe-lfnyKITCFQh6zrcNMeE-WXnuMTEJi-FA=s288-mo-c-c0xffffffff-rj-k-no',
      image: 'https://i.ytimg.com/vi/qypO3p8g2ZU/hqdefault.jpg?',
      time: '2 days ago'
    },
    {
      title: 'Sheila On 7 - DAN (Reggae Cover SMVLL)',
      note: 'SMVLL',
      thumnail: 'https://yt3.ggpht.com/a-/AN66SAyUe-lfnyKITCFQh6zrcNMeE-WXnuMTEJi-FA=s288-mo-c-c0xffffffff-rj-k-no',
      image: 'https://i.ytimg.com/vi/qypO3p8g2ZU/hqdefault.jpg?',
      time: '2 days ago'
    },
    {
      title: 'Sheila On 7 - DAN (Reggae Cover SMVLL)',
      note: 'SMVLL',
      thumnail: 'https://yt3.ggpht.com/a-/AN66SAyUe-lfnyKITCFQh6zrcNMeE-WXnuMTEJi-FA=s288-mo-c-c0xffffffff-rj-k-no',
      image: 'https://i.ytimg.com/vi/qypO3p8g2ZU/hqdefault.jpg?',
      time: '5 days ago'
    },
    {
      title: 'Sheila On 7 - DAN (Reggae Cover SMVLL)',
      note: 'SMVLL',
      thumnail: 'https://yt3.ggpht.com/a-/AN66SAyUe-lfnyKITCFQh6zrcNMeE-WXnuMTEJi-FA=s288-mo-c-c0xffffffff-rj-k-no',
      image: 'https://i.ytimg.com/vi/qypO3p8g2ZU/hqdefault.jpg?',
      time: '5 days ago'
    },
    {
      title: 'Sheila On 7 - DAN (Reggae Cover SMVLL)',
      note: 'SMVLL',
      thumnail: 'https://yt3.ggpht.com/a-/AN66SAyUe-lfnyKITCFQh6zrcNMeE-WXnuMTEJi-FA=s288-mo-c-c0xffffffff-rj-k-no',
      image: 'https://i.ytimg.com/vi/qypO3p8g2ZU/hqdefault.jpg?',
      time: '5 days ago'
    },
    {
      title: 'Sheila On 7 - DAN (Reggae Cover SMVLL)',
      note: 'SMVLL',
      thumnail: 'https://yt3.ggpht.com/a-/AN66SAyUe-lfnyKITCFQh6zrcNMeE-WXnuMTEJi-FA=s288-mo-c-c0xffffffff-rj-k-no',
      image: 'https://i.ytimg.com/vi/qypO3p8g2ZU/hqdefault.jpg?',
      time: '5 days ago'
    },
    {
      title: 'Sheila On 7 - DAN (Reggae Cover SMVLL)',
      note: 'SMVLL',
      thumnail: 'https://yt3.ggpht.com/a-/AN66SAyUe-lfnyKITCFQh6zrcNMeE-WXnuMTEJi-FA=s288-mo-c-c0xffffffff-rj-k-no',
      image: 'https://i.ytimg.com/vi/qypO3p8g2ZU/hqdefault.jpg?',
      time: '5 days ago'
    },
    {
      title: 'Sheila On 7 - DAN (Reggae Cover SMVLL)',
      note: 'SMVLL',
      thumnail: 'https://yt3.ggpht.com/a-/AN66SAyUe-lfnyKITCFQh6zrcNMeE-WXnuMTEJi-FA=s288-mo-c-c0xffffffff-rj-k-no',
      image: 'https://i.ytimg.com/vi/qypO3p8g2ZU/hqdefault.jpg?',
      time: '5 days ago'
    },
  ];

  render(){
    return(
      <Container>
        <Content showsVerticalScrollIndicator={false}>
         {this.data.map((data,key)=> <ListNotification key={key} data={data} />)}
        </Content>
      </Container>
    )
  }
  
}