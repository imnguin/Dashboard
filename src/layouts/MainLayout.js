import React from "react";

import { Button, Result } from "antd";

const MainLayout = (props) => {
    if (props.layout === '404') {
        return (
            props.children
        );
    }
    return (
        <div>{props.children}</div>
    );
}
export default MainLayout;