import { FC } from 'react';
import { OpenData, View } from '@tarojs/components';
import './index.scss';

//  个人中心 页面
// 功能: 登录 注销 个人基本头像获取 以及其他一些设置

const My: FC = () => {
  const menuList = [
    {
      title: '关于',
      jumpLink: '',
    },
    {
      title: '打赏项目',
      jumpLink: '',
    },
    {
      title: '意见反馈',
      jumpLink: '',
    },
    {
      title: '清除缓存',
      jumpLink: '',
    },
  ];

  return (
    <>
      <View className="my-header">
        <View className="avatar">
          <OpenData type="userAvatarUrl" />
        </View>
        <View className="name">
          <OpenData type="userNickName" />
        </View>
      </View>
      <View>创建好的备忘录和消息提醒入口</View>
      <View className="my-bottom">
        {menuList.map(item => {
          return <View>{item.title}</View>;
        })}
      </View>
    </>
  );
};

export default My;
