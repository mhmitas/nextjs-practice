import Navbar from '@/components/my-ui/Navbar';
import React from 'react';

const layout = ({ children }) => {
    return (
        <section className='min-h-screen'>
            <Navbar />
            {children}
        </section>
    );
};

export default layout;