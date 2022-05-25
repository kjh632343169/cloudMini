import Taro from '@tarojs/taro';

export enum jumpType {
  /**
   * 直接跳转
   */
  navigateTo = 'navigateTo',
  /**
   * 关闭所有页面跳转
   */
  reLanuch = 'reLanuch',
  /**
   * 关闭当前页面跳转
   */
  redirectTo = 'redirectTo',
  /**
   * 跳转到tabbar页面
   */
  switchTab = 'switchTab',
  /**
   * 返回上一页面
   */
  navigateBack = 'navigateBack',
}

const getQueryString = (obj: object = {}): string => {
  let str = '';
  Object.keys(obj).map((item, index) => {
    if (index !== 0) {
      str += '&';
    }
    const itemStr = item + '=' + obj[item];
    str += itemStr;
  });
  return str ? '?' + str : '';
};

/**
 * @urlParam 跳转路径或者后退页面数
 * @type 跳转模式
 * @query 跳转参数
 */
export function jumpUrl(
  urlParam: string | number,
  type: jumpType = jumpType.navigateTo,
  query?: object,
  success?: () => void,
  fail?: () => void,
  complete?: () => void,
): void {
  if (typeof urlParam === 'number') {
    Taro.navigateBack({
      delta: urlParam,
      success,
      fail,
      complete,
    });
    return;
  }
  const queryUrl = query ? urlParam + getQueryString(query) : urlParam;
  Taro[jumpType[type]]({
    url: jumpType[type] === jumpType.switchTab ? urlParam : queryUrl,
    success,
    fail,
    complete,
  });
  return;
}
