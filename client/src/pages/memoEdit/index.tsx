import { FC, useEffect, useState } from 'react';


interface PropParam {
    id?: string,
}


const MemoEdit: FC<PropParam> = (props) => {
    const { id } = props;
    const [title, setTitle] = useState('');
    const [content, setContent] = useState(''); 
    useEffect(() => {
        if (id) {
            // 编辑
        } else {
            // 新增
        }
    },[])
    
    console.log(id)


    return <>
        新建和编辑备忘录  可能有详情？
    </>
}

export default MemoEdit;