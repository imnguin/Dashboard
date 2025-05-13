import { Image } from "antd";
import React from "react";
import myImage from '../assets/images/472378d8ae8c1bd2429d.jpg';
const Test = () => {
    return (
        <div>
            <Image src={myImage} width={'100%'} height={'100%'} />
            <div style={{ marginTop: 50, fontSize: 40, fontWeight: 'bold', textAlign: 'center' }}>Ngọc đẹp gái quá</div>
        </div>
    )
}
export default Test;