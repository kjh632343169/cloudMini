// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()

// 通用crud
// 云函数入口函数
exports.main = async (event, context) => {
  const { dbName, searchParam={}, updateParam={}, pageParam={}, type } = event;
  const dataBase = await db.collection(dbName);
  switch (type) {
    case "QUERY":
      return await dataBase.where(searchParam).get();
    case "REMOVE":
      // 删除
      return await dataBase.where(searchParam).remove();
    case "ADD":
      // 添加
      return await dataBase.add({data:updateParam});
    case "UPDATE":
      // 更新
      return await dataBase.where(searchParam).update({data:updateParam});
    default:
      break;
  }
  
}