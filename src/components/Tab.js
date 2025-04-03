import React, { useState } from 'react';
import { Radio, Tabs } from 'antd';

const Tab = (props) => {
    return (
        <div>
            <Tabs
                defaultActiveKey="1"
                tabPosition={props.mode}
                style={{ height: 220 }}
                items={Array.from({ length: 30 }, (_, i) => {
                    const id = String(i);
                    return {
                        label: `Tab số ${id}`,
                        key: id,
                        disabled: i === 28,
                        children: `Đây là nội dung của tab số ${id}`,
                    };
                })}
            />
        </div>
    );
}
export default Tab;