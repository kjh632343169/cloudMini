import { FC, useState, useEffect } from 'react';
import Taro, { useDidHide, useDidShow } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { baseCloudRequest } from '../pages/utils/api/query';
import { getSentenceData } from '../pages/utils/api/api';

let timer

// todo 要给一句默认的,还是先请求一遍?
const Sentence: FC = () => {
    const [data, setData] = useState('');
    const [from, setFrom] = useState('')

    const getData = async () => {
        const result = await getSentenceData()
        if (result) {
            console.log(result);
            setData(result.data.hitokoto);
            setFrom(result.data.from);
        }
    }
    const setTimer = () => {
        timer = setInterval(() => {
            getData()
        }, 10000)
    }

    useDidShow(() => {
       !timer && setTimer();
     })
    
    useDidHide(() => {
       timer && clearInterval(timer)
    })


    const testCloud = async() => {
        const result = await baseCloudRequest()
        console.log(result);
    }

    useEffect(() => {
        testCloud()
        getData();
        return () => {
            clearInterval(timer)
        }
    },[])

    

    return <>
        <View>{ data }</View>
        <View>{ from }</View>
    </>
}


export default Sentence