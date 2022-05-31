import Taro from '@tarojs/taro';

const enum CloudFunctionName {
  QUERY='query'
}

const enum DbName {
  lolHeroList='lolHeroList'
}

const enum RequestTypeData {
  QUERY='QUERY',
  ADD='ADD',
  UPDATE='UPDATE',
  REMOVE='REMOVE',
}

interface Param {
  searchParam?: object;
  updateParam?: object;
  pageParam?: object;
  dbName?: DbName;
  type?: RequestTypeData;
}


const initParam:Param = {
  searchParam: {},
  updateParam: {},
  pageParam: {},
  dbName: DbName.lolHeroList,
  type: RequestTypeData.QUERY
}


const baseCloudRequest = async (param: Param=initParam) => {
  try {
    const data = await Taro.cloud.callFunction({
      name: CloudFunctionName.QUERY,
      data: param
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export  {
  baseCloudRequest,
  RequestTypeData,
  DbName,
  CloudFunctionName
};
