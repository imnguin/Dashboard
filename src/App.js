import React from 'react';
import Router from './routers';
import './index.css';
import 'antd/dist/reset.css';
import './assets/css/style.css'

function App() {
    return (
        <React.Suspense fallback={<div>Đang tải dữ liệu...</div>}>
            <Router />
        </React.Suspense>
    );
}

export default App;