import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute';
import MainLayout from '../layouts/MainLayout';
import Login from '../views/Login';
import configRoute from './config';

const Router = () => {
    return (
        <>
            <Routes>
                <Route path='/login' element={<Login />}></Route>
                <Route
                    path='*'
                    element={
                        // <ProtectedRoute>
                            <React.Suspense fallback={<div>Đang tải dữ liệu... </div>}>
                                <Routes>
                                    {
                                        configRoute.map(({ component: Component, path, layout, breadcrumb }) => (
                                            <Route path={path} key={path} element={Component ? <MainLayout layout={!!layout ? layout : 'Nguin'}><Component /></MainLayout> : <Navigate to={'/'} replace={true} />} />
                                        ))
                                    }
                                </Routes>
                            </React.Suspense>
                        // </ProtectedRoute>
                    }>
                </Route>
            </Routes>
        </>
    );
}
export default Router;