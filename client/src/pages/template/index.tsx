import { getCurrentInstance } from '@tarojs/taro';
import { Button, View } from '@tarojs/components';

// 备忘录和提醒 模板列表 及 创建列表
// 可能会加一个反馈入口?

export default function TabBar() {
  const instance = getCurrentInstance().router;
  console.log(instance);

  return (
    <View className='template'>
      <View>创建好的备忘录和消息提醒入口</View>
      <View>备忘录模板和创建</View>
      <View>消息模板和创建</View>

      <View>我的备忘录</View>
      <View>分类</View>
      <Button>新建备忘录</Button>
      <View>备忘录list title  批量删除功能？</View>
      <View>我的模板</View>
      <Button>新建备忘录模板</Button>
      <View>模板list title 批量删除功能？</View>

    </View>
  );
}
