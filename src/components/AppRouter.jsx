import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Posts from '../pages/Posts';
const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Posts/>} />
            <Route path='/posts/:page' element={<Posts/>} />
            <Route path="*" element={<Posts replace/>}/>
        </Routes>
    );
};

export default AppRouter;