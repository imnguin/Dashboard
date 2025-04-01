import React from 'react';
import { createRoot } from 'react-dom/client'; // Sử dụng createRoot từ react-dom/client
import App from './App';

const root = createRoot(document.getElementById('root')); // Tạo root
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);