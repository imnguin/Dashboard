import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import authMiddleware from '../routers/authMiddleware';

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const isAuthenticated = authMiddleware(navigate); //khúc này check authen nè đại ca
    // const isAuthenticated = true; // giả định đã đăng nhập

    return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;