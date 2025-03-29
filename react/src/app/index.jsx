import { Route, Routes } from 'react-router';

import { ClassifierPage } from '../pages/classifier';

import './reset.css';
import './index.css';

export const App = () => {
    return (
        <Routes>
            <Route index element={<ClassifierPage />} />
            <Route path="classifier" element={<ClassifierPage />} />
        </Routes>
    );
};
