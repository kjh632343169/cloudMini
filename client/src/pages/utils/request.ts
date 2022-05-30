import Taro from '@tarojs/taro';

/** HTTP 请求方法 */
interface Method {
  OPTIONS;
  GET;
  HEAD;
  POST;
  PUT;
  DELETE;
  TRACE;
  CONNECT;
}

interface requestOptions {
  url: string;
  /**
   *  @default GET
   */
  method?: keyof Method;
  data?: object;
  header?: object;
}

// todo 增加请求错误提示 等等内容
export default async (options: requestOptions) => {
  console.log(options);
  try {
    return await Taro.request(options);
  } catch (error) {
    console.log(error);
  }
};
