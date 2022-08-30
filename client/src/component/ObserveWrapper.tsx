import { FC ,ReactNode, useEffect, useLayoutEffect} from 'react';
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components';

interface initProps  {
    ele?: string,  // 观测节点
    relativeTo?: string,  // 观测节点参照区域节点
    margin?: object,    // 参照区域节点拓展
    threshold?: number,  // 相交比例
    callback?: () => void,
    children?: ReactNode,
}

//  曝光组件
const ObserveWrapper: FC<initProps> = (props) => {
    const { threshold = 0.5, ele = '', relativeTo, margin= {}, callback } = props;
    
    
    useLayoutEffect(() => {
        let ob = Taro.createIntersectionObserver(null as unknown as TaroGeneral.IAnyObject ,{ thresholds: [0], observeAll: true })
        ob.relativeToViewport({bottom: 100}).observe('.target-class', (res) => {
            console.log(res)
        })
        // let ob = Taro.createIntersectionObserver({
        //     thresholds: [0.5],
        //     initialRatio: 0,
        // })
        // if (relativeTo) {
        //     ob.relativeTo(relativeTo, margin)
        // } else {
        //     console.log(1111);
        //     ob.relativeToViewport().observe('.testtest', res => {
        //         console.log(res);
        //         if (res.intersectionRatio >= threshold) {
        //             console.log('出现了')
        //             callback && callback();
        //         }
        //     })
        // }
        // console.log(ob);

        return () => {
            console.log('111');
            ob.disconnect()
        }
    
    }, [callback, ele, margin, relativeTo, threshold])

    return <>
        <View className='target-class'>
            {props.children}
        </View>
    </>
}


export default ObserveWrapper