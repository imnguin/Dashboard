import React from 'react';
import { createRoot } from 'react-dom/client'; // Sử dụng createRoot từ react-dom/client
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import Loading from './components/Loading';

const root = createRoot(document.getElementById('root')); // Tạo root
root.render(
    <Provider store={store}>
        {/* <React.StrictMode> */}
            <BrowserRouter>
                <Loading />
                <App />
            </BrowserRouter>
        {/* </React.StrictMode> */}
    </Provider>
);