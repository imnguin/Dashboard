import React from 'react';
import loadingGif from '../assets/images/loadingGif.gif';
import '../assets/css/Loading.css';
import { useSelector } from 'react-redux';

const Loading = () => {
    const isLoading = useSelector((state) => state.loading.isLoading);
    if (!isLoading) return null;
    return (
        <div className="loading-container">
            <img src={loadingGif} alt="Loading..." />
        </div>
    );
};

export default Loading;