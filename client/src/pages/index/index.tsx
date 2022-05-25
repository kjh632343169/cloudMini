import { View } from '@tarojs/components';
import { FC } from 'react';
import Taro from '@tarojs/taro';
import './index.scss';

//  主页
//  即将到期提醒 及备忘录 等等内容

const Home: FC = () => {

  Taro.cloud.callFunction({
    // 要调用的云函数名称
    name: 'login',
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err)
      // handle error
    })
  return (
    <View className='home'>
      <View className='home-header'>小程序功能简介</View>
      <View className='home-content'>
        <View>前N条备忘录</View>
        <View>前N条消息提醒</View>
      </View>
    </View>
  );
};

export default Home;
