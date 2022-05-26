// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()

// 通用crud
// 云函数入口函数
exports.main = async (event, context) => {
  const { dbName = '', searchParam = {}, type="query" } = event;
  switch (type) {
    case "query":
      return await db.collection(dbName).where(searchParam).get();
    case "delete":
      // 删除
      break
    case "add":
      // 添加
      break
    case "update":
      // 更新
      break
    
    default:
      break;
  }
  
}