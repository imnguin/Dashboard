import React, { useEffect, useState } from 'react';
import { Steps } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { LoadingOutlined } from '@ant-design/icons';
const Step = (props) => {
    const [items, setItems] = useState([])
    const isSmallScreen = useMediaQuery({ maxWidth: 1023 });
    useEffect(() => {
        const newArr = structuredClone(props?.items);
        newArr[props?.current].icon = <LoadingOutlined />;
        setItems(newArr);
    }, [props?.current, props?.items]);

    return (
        <Steps style={{ marginBottom: 30 }} current={props?.current} size='small' labelPlacement="vertical" items={items} direction={isSmallScreen ? 'vertical' : 'horizontal'} />
    )
}
export default Step;