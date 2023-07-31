import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../../components/Header/Header';

const MainLayout = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [selectedGenre, setSelectedGenre] = useState('');

    const toggleTheme = () => setIsDarkTheme(prevTheme => !prevTheme);

    return (
        <div style={{ backgroundColor: isDarkTheme ? 'var(--background-color-dark)' : 'var(--background-color-light)' }}>
            <Header onToggleTheme={toggleTheme} selectedGenre={selectedGenre} />
            <div style={{ color: isDarkTheme ? 'var(--text-color-dark)' : 'var(--text-color-light)' }}>
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;