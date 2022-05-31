import request from '../request'


// 获取语句
export const getSentenceData = async() => {
    return await request({
        url: 'https://v1.hitokoto.cn/?c=b'
    })
}