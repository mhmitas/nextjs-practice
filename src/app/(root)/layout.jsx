import Navbar from '@/components/my-ui/Navbar';
import React from 'react';

const layout = ({ children }) => {
    return (
        <section className='min-h-screen flex flex-col'>
            <Navbar />
            <div className='flex-1'>{children}</div>
        </section>
    );
};

export default layout;