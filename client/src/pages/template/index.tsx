import { getCurrentInstance } from '@tarojs/taro';
import { View } from '@tarojs/components';

// 备忘录和提醒 模板列表 及 创建列表
// 可能会加一个反馈入口?

export default function TabBar() {
  const instance = getCurrentInstance().router;
  console.log(instance);

  return (
    <View className="template">
      <View>创建好的备忘录和消息提醒入口</View>
      <View>备忘录模板和创建</View>
      <View>消息模板和创建</View>
    </View>
  );
}
