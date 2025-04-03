import React from 'react';
import Router from './routers';
import './index.css'

function App() {
    return (
        <React.Suspense fallback={<div>Đang tải dữ liệu...</div>}>
            <Router />
        </React.Suspense>
    );
}

export default App;