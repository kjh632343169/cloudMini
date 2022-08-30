import { View, ScrollView } from '@tarojs/components';
import { FC , useRef } from 'react';
import Taro, { useReady, getCurrentInstance } from '@tarojs/taro';

import Sentence from '../../../src/component/Sentence';
import './index.scss';
import ObserveWrapper from '../../../src/component/ObserveWrapper';

//  主页
//  即将到期提醒 及备忘录 等等内容

const initData = [1,2,3,4,5,6,7,8,8,10]

const Home: FC = (props) => {
  console.log(props);

  // Taro.cloud.callFunction({
  //   // 要调用的云函数名称
  //   name: 'login',
  //   }).then(res => {
  //     console.log(res);
  //   }).catch(err => {
  //     console.log(err)
  //   })

  useReady(() => {
    setTimeout(() => {
      // 函数组件没有组件实例
      let ob = Taro.createIntersectionObserver( null as unknown as TaroGeneral.IAnyObject, { thresholds: [0.1], observeAll: true })
      ob.relativeToViewport().observe('.home-header', (res) => {
          console.log(res)
      })
    })
  })


  return (
    <View className='home'>
      {/* <Sentence /> */}
      <View className='home-header'>小程序功能简介</View>
      <View className='home-content'>
        <View>前N条备忘录</View>
        <View>前N条消息提醒</View>
      </View>
      <ScrollView>
        {initData.map((item) => {
          return  <ObserveWrapper key={item} ele={'test'+ item}><View className='test'>item</View></ObserveWrapper>
        })}
      </ScrollView>
    </View>
  );
};

export default Home;
